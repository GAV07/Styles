//create a bunch of cirlces
 const numberofCircles = 50

// for(i=0; i < numberofCircles; i++) {
//     const circle = document.createElement("div")
//     circle.classList.add("circle")
//     circle.classList.add("circleF")
//     document.querySelector(".circles").appendChild(circle)
// }

// for(i=0; i < numberofCircles; i++) {
//     const circle = document.createElement("div")
//     circle.classList.add("circle")
//     circle.classList.add("circleB")
//     document.querySelector(".circles").appendChild(circle)
// }

//wave without path
var toRadian = Math.PI / 180,
    toDegree = 180 / Math.PI,
    angle = 30
    updates = 0
    progress = 0

// anime({
//     targets: ".circle",
//     translateX: 550,
//     translateY: Math.sin(updates * toRadian),
//     update: function(anim) {
//         updates++;
//         progress = +Math.round(anim.progress)
//       }
// })


//wave with path
// const firstPath = anime.path("#regular"),
//       secondPath = anime.path("#flipped"),
//       delay = 150

// anime({
//     targets: '.circleF',
//     delay: (el,i) => i * delay,
//     translateX: firstPath('x'),
//     translateY: firstPath('y'),
//     rotate: firstPath('angle'),
//     easing: 'easeInOutSine',
//     duration: 5000,
//     loop: true
//   })

// anime({
//     targets: '.circleB',
//     delay: (el,i) => i * delay,
//     translateX: secondPath('x'),
//     translateY: secondPath('y'),
//     rotate: secondPath('angle'),
//     easing: 'easeInOutSine',
//     duration: 5000,
//     direction: "reverse",
//     loop: true
//   })

 //filter effect (wave on single circle)
 anime({
     targets: ["#wavy", "feTurbulence", "feDisplacementMap"],
     baseFrequency: [0, .05],
     numOctaves: 10,
     duration: 5000,
     loop: true
 })