gsap.registerPlugin(ScrollTrigger);

// Initialize SplitType
const letter = new SplitType('.section h1', { types: 'chars' });

// Ensure element exists
const oneSpan = document.querySelector('.distracting');
if (oneSpan) {
    oneSpan.innerHTML += `<span class="one">🥲</span>`;
}

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section',
        scroller: 'body',
        scrub: true,
        pin: true,
        // markers: true,
    },
});

// Animation timeline
tl.from('.section h1 .char', {
    xPercent: -20,
    willChange: 'transform',
    ease: 'power2.inOut',
    opacity: 0,
    stagger: 0.05,
})
    .to('.distracting', {
        color: 'rgb(255, 0, 0)',
    })
    .to('.one', {
        keyframes: {
            yPercent: [0, -50, 0],
            opacity: [0, 1, 1],
        }
    })

// Smooth scroll using Lenis
function smoothScroll() {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

smoothScroll();
