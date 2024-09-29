// gsap.to("#box", {
//     x: 200,
//     height:100,
//     width:100,
//     y: 200,
//     backgroundColor:"#ffffff",
//     duration: 5,
//     delay:2,
//     rotate:360,
//     borderRadius:'50%',
//     ease:"power2.inOut",
//     onComplete:()=>{
//         gsap.to("#box", {
//             x: 10,
//             height:100,
//             width:100,
//             y: 10,
//             backgroundColor:"#ffffff",
//             duration: 5,
//             rotate:360,
//             borderRadius:'50%',
//             ease:"power2.inOut",
            
// })
//     }
// })


//from means your element start form the gsap position and then it will move to the original state like 
// in this below case h1 color will be yellow and then it will move to the original state of color white

// gsap.from("h1", {
//     opacity:0,
//     duration:1,
//     color:"yellow",
//     y:30,
//     delay:1,
//     stagger:0.5,

// })


// gsap.to("#box", {
//     x:800,
//     duration:5,
//     delay:2,
//     rotate:360,
//     repeat:-1,
// yoyo:true})

// gsap.to("#box1", {
//     x:800,
//     duration:1.5,
//     rotate:360,
  
// yoyo:true})

// gsap.to("#box2", {
//     x:800,
//     backgroundColor:"#ffffff",
//     duration:1.5,
//     delay:1.5,
//     rotate:360,

// yoyo:true})


// gsap.to("#box3", {
//     x:800,
//     duration:1.5,
//     delay:3,

 
// yoyo:true})

gsap.to("#p", {
    x:800,
    duration:1.5,
    delay:1,
    fontSize:100,
    rotate:360,
})

var tl = gsap.timeline();

tl.to("#p", {
    x:800,
    duration:1.5,
    delay:1,
    fontSize:100,
    rotate:360,
})

tl.to("#o", {
    x:800,
    fontSize:150,
    duration:1.5,

    rotate:360,
})

tl.to("#r", {
    x:800,
    fontSize:200,
    duration:1.5,
    rotate:360,
})

tl.to("#n", {
    x:800,
    fontSize:250,
    duration:1.5,
    rotate:360,
})