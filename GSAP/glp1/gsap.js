
// gsap.to(".box",{
//     x:400,
//     duration:4,
//     delay:1.5,
//     backgroundColor:"red",
//     rotate:360,
//     scale:0.2
// })
gsap.from(".box",{
    x:400,
    y:400,
    // z:100,
    duration:4,
    delay:1.5,
    backgroundColor:"red",
    rotate:360,
    scale:0.2,
})

gsap.to("h1",{
    yoyo:true,
    x:300,
    duration:3,
    delay:1,
    fontSize:60,
    stagger:0.5,
    repeat:2
})