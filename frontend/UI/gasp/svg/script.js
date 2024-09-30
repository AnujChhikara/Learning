let path = `M 10 160 Q 420 160 760 160`;
let finalPath = `M 10 160 Q 420 160 760 160`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", (e) => {
  path = `M 10 160 Q ${e.clientX} ${e.clientY} 760 160`;
  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});

// function animateGradient() {
//   const gradient = document.querySelector("#gradientStroke");
//   const stop1 = gradient.children[0];
//   const stop2 = gradient.children[1];

//   gsap.to(stop1, {
//     stopColor: "hsl(+=360, 100%, 50%)", // Rotates through the color spectrum
//     duration: 4,
//     repeat: -1,
//     ease: "none",
//   });

//   gsap.to(stop2, {
//     stopColor: "hsl(+=360, 100%, 50%)",
//     duration: 4,
//     repeat: -1,
//     ease: "none",
//   });
// }

// animateGradient();
// string.addEventListener("mouseenter", () => {});

// string.addEventListener("mouseleave", () => {});
