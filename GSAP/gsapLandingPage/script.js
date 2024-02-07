let t1 = gsap.timeline();
// let t1 = gsap;

t1.from("nav img , nav h1 ,nav .part3",{
    y:-100,
    duration:.5,
    // delay:.3,
    stagger:.2,
    opacity:0
})

t1.from(".content h1",{
    y:100,
    duration:1,
    // delay:.4,
    stagger:.2,
    opacity:0
})
t1.from(".content>img",{
    opacity:0,
    // scale:0,
    duration:1,
    stagger:.3
})
t1.from(".scroll",{
    opacity:1,
    scale:0
})
t1.from(".scroll",{
    // opacity:0,
    y:-20,
    repeat:-1,
    yoyo:true,
    duration:1
})