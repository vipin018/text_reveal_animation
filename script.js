const letter = new SplitType('.section h1', { types: 'chars' });
const oneSpan = document.querySelector('.distracting');

oneSpan.innerHTML += `<span class="one">1</span>`;
gsap.from(letter.chars, {
    yPercent: -20,
    willChange: 'transform',
    ease: 'power2.inOut',
    opacity: 0,
    stagger: 0.05,
    scrollTrigger: {
        trigger: '.section',
        scroller: 'body',
        scrub: true,
        pin: true,
        markers: true,
    },

})

function soothScroll() {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

}

soothScroll();
