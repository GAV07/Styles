const staggerVisualizerEl = document.querySelector('.logo-pattern');
const fragment = document.createDocumentFragment();
const grid = [40, 40];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;
const colors = ["#C7CFAC", "#FFC87E", "#E34F33", "#2B5B6C"]

for (let i = 0; i < numberOfElements; i++) {
fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
    targets: '.logo-pattern div',
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: true,
    autoplay: false
})
.add({
    duration: 1000,
    scale: .5,
    delay: anime.stagger(50, {grid: grid, from: 'first'})
})
.add({
    rotate: 0,
    scaleX: 1.5,
    scaleY: 0.25,
    delay: anime.stagger(5, {grid: grid, from: 'last'})
})
.add({
    rotate: anime.stagger([90, 180], {grid: grid, from: 'center'}),
    delay: anime.stagger(25, {grid: grid, from: 'last'})
})
.add({
    rotate: 90,
    scaleY: 1,
    scale: 1,
    delay: anime.stagger(20, {grid: grid, from: 'center'})
})

staggersAnimation.play();