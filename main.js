gsap.to("#flyingman",{
    scrollTrigger : {
        scrub:0.5,
    },
    x : 1000,
    y: 500,
})

gsap.from("#montaña",{
    scrollTrigger : {
        scrub:0.5,
    },
    x : 100,
})

gsap.from("#castle-img",{
    scrollTrigger : {
        scrub:0.5,
    },
    x : -55,
})

gsap.to("#bg-murciegalos2",{
    scrollTrigger : {
        scrub:0.5,
    },
    scale : 2.5,
    x: 500,
    y: 200,
})

gsap.to("#bg-murciegalos",{
    scrollTrigger : {
        scrub:0.5,
    },
    scale : 2,
    x: -500,
    y: 200,
})