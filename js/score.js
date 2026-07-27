/* =========================================================
   BLACK SWAN HUNTER SCORE — POPUP PUNTI
   ========================================================= */

.score-chip {
  position: relative;
  overflow: visible;
  isolation: isolate;
}

.score-gain {
  position: absolute;
  top: calc(100% + .55rem);
  right: 0;
  z-index: 50;

  min-width: max-content;
  padding: .42rem .72rem;

  border: 1px solid rgba(133, 255, 207, .48);
  border-radius: 999px;

  background: rgba(5, 24, 20, .96);
  color: #9fffd8;

  font-size: .76rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: .06em;
  white-space: nowrap;

  box-shadow:
    0 0 0 1px rgba(133, 255, 207, .08),
    0 0 18px rgba(65, 255, 180, .34),
    0 8px 24px rgba(0, 0, 0, .34);

  opacity: 0;
  pointer-events: none;

  transform:
    translateY(-8px)
    scale(.9);

  transition:
    opacity .2s ease,
    transform .28s cubic-bezier(.2, .8, .2, 1);
}

.score-gain.is-visible {
  opacity: 1;

  transform:
    translateY(0)
    scale(1);
}

.score-chip.is-scoring {
  animation: score-chip-pulse .58s ease;
}

@keyframes score-chip-pulse {
  0% {
    transform: scale(1);
  }

  35% {
    transform: scale(1.12);
    box-shadow:
      0 0 0 4px rgba(119, 255, 202, .12),
      0 0 24px rgba(61, 255, 178, .42);
  }

  100% {
    transform: scale(1);
  }
}

@media (max-width: 900px) {
  .score-gain {
    right: auto;
    left: 50%;

    transform:
      translateX(-50%)
      translateY(-8px)
      scale(.9);
  }

  .score-gain.is-visible {
    transform:
      translateX(-50%)
      translateY(0)
      scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .score-chip.is-scoring {
    animation: none;
  }

  .score-gain {
    transition: opacity .15s ease;
    transform: none;
  }

  .score-gain.is-visible {
    transform: none;
  }
}
