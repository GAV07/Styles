//create a bunch of cirlces
const numofCircles = 250
const nodes = []
const svg = d3.select("svg")

const innerWidth = document.querySelector("svg").clientWidth
const innerHeight = document.querySelector("svg").clientHeight


function createCircle(radius, name) {

    for(i=0; i < numofCircles; i++) {
        angle = (i / (numofCircles/2)) * Math.PI; // Calculate the angle at which the element will be placed.
                                                    // For a semicircle, we would use (i / numNodes) * Math.PI.
        x = (radius * Math.cos(angle)) + (innerWidth/2); // Calculate the x position of the element.
        y = (radius * Math.sin(angle)) + (innerHeight/2); // Calculate the y position of the element.
        nodes.push({'id': i, 'x': x, 'y': y});
        
    }
    
    svg.selectAll("rect")
            .data(nodes).enter()
            .append("rect")
            .attr("class", name)
            .attr("x", d => d.x)
            .attr("y", d => d.y)
            .attr("width", 10)
            .attr("height", 10)
            .attr("rx", 15)
            //.attr("filter", "url(#groovy)")

}

createCircle(200, "outer")
createCircle(150, "inner")
createCircle(50, "small")

const list = [".outer", ".inner", ".small"]
 
 
anime.set( list, {
    translateX: function() {
        return anime.random(-200,100)
    },
    translateY: function() {
        return anime.random(-200,100)
    },
    opacity: 0
})

 const tl = anime.timeline({
     duration: 2000,
     easing: "easeInOutSine",
     loop: true,
     direction: "alternate"
 })

 .add({
    targets: list,
    opacity: 1,
     translateX: 0,
     translateY: 0,
     fill: ["#EA5643", "#FFE033"]
 })
 .add({
     targets: list,
     //delay: anime.stagger(10),
     fill: ["#FFE033", "#22706B"],
     width: 50
 })
 .add({
    targets: "rect",
    rotate: 360,
    fill: ["#22706B", "#EA5643"],
 })
 .add({
    targets: list,
    //delay: anime.stagger(10),
    width: 10
})
 .add({
    targets: "rect",
    opacity: 0,
    translateX: function() {
        return anime.random(-200,100)
    },
    translateY: function() {
        return anime.random(-200,100)
    }
 })
 
