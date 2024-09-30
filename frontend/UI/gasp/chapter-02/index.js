// gsap.from("#page1 #box", {
//   duration: 3,
//   scale: 0,
//   opacity: 0,
//   rotate: 360,
//   ease: "power3.inOut",
//   scrollTrigger: {
//     trigger: "#page1",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//   },
// });

// gsap.from("#page2 #box", {
//   duration: 3,
//   rotate: 360,
//   ease: "power3.inOut",
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//   },
// });

// gsap.from("#page3 #box", {
//   duration: 3,
//   rotate: 360,
//   ease: "power3.inOut",
//   scrollTrigger: {
//     trigger: "#page3",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//   },
// });

gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
