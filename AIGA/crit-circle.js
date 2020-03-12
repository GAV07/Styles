//version #1
const tl = anime.timeline({
    //easing: 'easeOutExpo',
    duration: 1500
})

tl
.add({
    targets: ".words",
    //delay: function (el, i) { return i * 300},
    opacity: 1,
    easing: 'easeInOutSine',
    translateX: [-50, 0]
})
.add({
    targets: "path.light-bulb",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: anime.stagger(100, "center"),
    direction: 'alternate',
    fill: "#13507B",
    loop: true
})
.add({
    targets: "path.light-bulb",
    fill: "#F3C922",
    easing: "easeInOutSine"
})

// //version #2
// const tl2 = anime.timeline({
//     duration: 1500
// })

// tl2
// .add({
//     targets: ".light-bulb",
//     fill: "#F3C922",
//     easing: "easeInOutSine",
//     delay: anime.stagger(100, "center")
// })
// .add({
//         targets: ".words",
//         opacity: 1,
//         easing: 'easeInOutSine',
//         translateY: [100, 0],
//         delay: anime.stagger(100, "center")
//     })