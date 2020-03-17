//Cut number in half because of the two functions
const numParticles = 50
const anger = document.querySelector(".shrink")
const radius = 300

const inner = function() {
    const particle = document.createElement("div")
    particle.className = "inner anger_particle"
    anger.appendChild(particle)
}

const outer = function() {
    const particle = document.createElement("div")
    particle.className = "outer anger_particle"
    anger.appendChild(particle)
}

for( i = 0; i < numParticles; i++) { 
    inner()
    outer()
}


//Controls movement of particles
const tl = anime.timeline({
    duration: 3000,
    loop: true
})

tl
.add({
    targets: ".outer",
    rotate: () => anime.random(-360, 360),
    translateX: radius,
    rotate: () => anime.random(-360, 360),
    opacity: [0,1],
    easing: "easeInOutCubic"
})
.add({
    targets: ".inner",
    rotate: () => anime.random(-360, 360),
    translateX: () => radius / 2,
    rotate: () => anime.random(-360, 360),
    opacity: [0,1],
    easing: "easeInOutCubic"
})
.add({
    targets: ".anger_particle",
    delay: 2000,
    delay: anime.stagger(100, {from: "center"}),
    translateX: {value: "-=100"},
    translateY: {value: "-=100"},
    easing: "easeInOutCubic",
    background: "#CF4520"
})
.add({
    targets: ".anger_particle",
    delay: 500,
    translateX: [{value: "-=100", duration: 1000}, {value: "+=100", duration: 1000}, 
                {value: "-=100", duration: 1000}, {value: "+=100", duration: 1000},
                {value: "-=100", duration: 1000}, {value: "+=100", duration: 1000}  ],
    translateY: [{value: "-=100", duration: 1000}, {value: "+=100", duration: 1000}, 
                {value: "-=100", duration: 1000}, {value: "+=100", duration: 1000},
                {value: "-=100", duration: 1000}, {value: "+=100", duration: 1000}  ],
    easing: "easeOutCirc",
    background: "#CF4520",
})