export function playTransitionAnimation(setIsTransitioning) {
  setIsTransitioning(true);
  setTimeout(() => {
    setIsTransitioning(false);
  }, 600);
}
