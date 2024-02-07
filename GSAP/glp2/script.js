let tl=gsap.timeline();

tl.from(".nav",{
    opacity:0,
    delay:0.3
})

tl.from(".nav h1 , .nav h3,.nav h4",{
    y:-80,
    opacity:0,
    duration:1,
    stagger:0.2

})
tl.from(".left h1",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:0.2

})
tl.from(".right img",{
    scale:.5,
    opacity:0,
    duration:.5
})
tl.from(".left img",{
    x:-500,
    // opacity:,
    duration:1,
    stagger:0.2,
    delay:.4
})


gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        markers:true,        
    }
})

