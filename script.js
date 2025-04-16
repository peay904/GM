gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.panel').forEach((panel) => {
  gsap.fromTo(panel,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: panel,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    }
  );
});
