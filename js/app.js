document.documentElement.classList.add('js');
window.addEventListener('DOMContentLoaded', () => {
  const App = window.GSSApp;
  App.bootCore();
  App.search.init();
  App.score.init();
  document.querySelectorAll('[data-dialog-close]').forEach(button => button.addEventListener('click', () => App.closeDialog(button.closest('.dialog-backdrop'))));
  if ('serviceWorker' in navigator && /(^|\.)giocasulserio\.it$/i.test(location.hostname)) {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  }
});

/* =========================================================
   HERO SWAN — MOVIMENTO, RIMBALZO E RIAPPARIZIONE
   ========================================================= */

(() => {
  function initMovingSwan() {
    const screen = document.querySelector(
      '.hero-console .console-screen'
    );

    const swan = screen?.querySelector('.swan-symbol');
    
    const achievement = screen?.querySelector('[data-swan-achievement]');

    if (!screen ||
  !swan ||
  !achievement ||
  swan.dataset.motionReady === 'true') {
      return;
    }

    swan.dataset.motionReady = 'true';

    let x = screen.clientWidth / 2;
    let y = screen.clientHeight / 2;

    let velocityX = 55;
    let velocityY = 45;

    let previousTime = performance.now();
    let invisible = false;
    let caught = false;
    let speedMultiplier = 1;
    let nextDisappearance = performance.now() + randomBetween(4000, 8000);

    function randomBetween(minimum, maximum) {
      return minimum + Math.random() * (maximum - minimum);
    }

    function getBounds() {
      const halfWidth = swan.offsetWidth / 2;
      const halfHeight = swan.offsetHeight / 2;
      const margin = 8;

      return {
        minimumX: halfWidth + margin,
        maximumX: screen.clientWidth - halfWidth - margin,
        minimumY: halfHeight + margin,
        maximumY: screen.clientHeight - halfHeight - margin
      };
    }

    function placeSwan() {
      swan.style.left = `${x}px`;
      swan.style.top = `${y}px`;
    }

    function chooseDiagonalDirection() {
      const speed = randomBetween(48, 75) * speedMultiplier ;

      const diagonalAngles = [
        randomBetween(35, 55),
        randomBetween(125, 145),
        randomBetween(215, 235),
        randomBetween(305, 325)
      ];

      const angle =
        diagonalAngles[
          Math.floor(Math.random() * diagonalAngles.length)
        ] * Math.PI / 180;

      velocityX = Math.cos(angle) * speed;
      velocityY = Math.sin(angle) * speed;
    }

    function moveToRandomPosition() {
      const bounds = getBounds();

      x = randomBetween(bounds.minimumX, bounds.maximumX);
      y = randomBetween(bounds.minimumY, bounds.maximumY);

      placeSwan();
    }

    function bounceOnBorders() {
      const bounds = getBounds();

      if (x <= bounds.minimumX) {
        x = bounds.minimumX;
        velocityX = Math.abs(velocityX);
      }

      if (x >= bounds.maximumX) {
        x = bounds.maximumX;
        velocityX = -Math.abs(velocityX);
      }

      if (y <= bounds.minimumY) {
        y = bounds.minimumY;
        velocityY = Math.abs(velocityY);
      }

      if (y >= bounds.maximumY) {
        y = bounds.maximumY;
        velocityY = -Math.abs(velocityY);
      }
    }

    function disappearAndReturn(currentTime) {
      invisible = true;
      swan.style.opacity = '0';

      window.setTimeout(() => {
        moveToRandomPosition();
        chooseDiagonalDirection();

        swan.style.opacity = '.9';
        invisible = false;

        nextDisappearance =
          performance.now() + randomBetween(4000, 8000);
      }, randomBetween(500, 1100));
    }

    function animate(currentTime) {
      const elapsedSeconds = Math.min(
        (currentTime - previousTime) / 1000,
        0.05
      );

      previousTime = currentTime;

      if (!invisible && !caught) {
        x += velocityX * elapsedSeconds;
        y += velocityY * elapsedSeconds;

        bounceOnBorders();
        placeSwan();

        if (currentTime >= nextDisappearance) {
          disappearAndReturn(currentTime);
        }
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      const bounds = getBounds();

      x = Math.min(
        Math.max(x, bounds.minimumX),
        bounds.maximumX
      );

      y = Math.min(
        Math.max(y, bounds.minimumY),
        bounds.maximumY
      );

      placeSwan();
    });

swan.addEventListener('pointerdown', event => {
  event.preventDefault();
  event.stopPropagation();

  if (caught || invisible) return;

  caught = true;

  const savedVelocityX = velocityX;
  const savedVelocityY = velocityY;

  velocityX = 0;
  velocityY = 0;

  swan.classList.add('is-caught');

  const App = window.GSSApp;
  const english = App?.state?.lang === 'en';
  const scoringEnabled = Boolean(
    App?.score?.getData()?.enabled
  );

  const bonusAwarded = Boolean(
    App?.score?.award(
      'secret:eagle-eye',
      5,
      'actions',
      'eagle-eye'
    )
  );

  const achievementTitle =
    achievement.querySelector('strong');

  const achievementText =
    achievement.querySelector('span');

  if (achievementTitle && achievementText) {
    if (bonusAwarded) {
      achievementTitle.textContent =
        english ? 'EAGLE EYE!' : 'OCCHIO D’AQUILA!';

      achievementText.textContent =
        english
          ? 'You spotted a black swan · +5 BSS'
          : 'Hai individuato un cigno nero · +5 BSS';

    } else if (scoringEnabled) {
      achievementTitle.textContent =
        english ? 'SIGNAL RECORDED' : 'SEGNALE REGISTRATO';

      achievementText.textContent =
        english
          ? 'This hidden bonus has already been acquired.'
          : 'Questo bonus nascosto è già stato acquisito.';

    } else {
      achievementTitle.textContent =
        english ? 'EAGLE EYE!' : 'OCCHIO D’AQUILA!';

      achievementText.textContent =
        english
          ? 'You spotted a black swan.'
          : 'Hai individuato un cigno nero.';
    }
  }

  achievement.hidden = false;
  achievement.setAttribute('aria-hidden', 'false');

  requestAnimationFrame(() => {
    achievement.classList.add('is-visible');
  });

  /* Inizia a sfumare poco prima dei tre secondi */
  window.setTimeout(() => {
    achievement.classList.remove('is-visible');
  }, 2750);

  /* Dopo tre secondi il cigno riparte */
  window.setTimeout(() => {
    achievement.hidden = true;
    achievement.setAttribute('aria-hidden', 'true');

    swan.classList.remove('is-caught');

    const previousMultiplier = speedMultiplier;

speedMultiplier = Math.min(
  speedMultiplier * 1.35,
  3
);

const appliedIncrease =
  speedMultiplier / previousMultiplier;

velocityX = savedVelocityX * appliedIncrease;
velocityY = savedVelocityY * appliedIncrease;

    caught = false;
    previousTime = performance.now();
  }, 3000);
});

    placeSwan();
    chooseDiagonalDirection();
    requestAnimationFrame(animate);
  }

  window.addEventListener('load', initMovingSwan);
})();