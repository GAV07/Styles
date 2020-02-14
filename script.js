const width = 1200
const height = 1000
const padding = 30

const dataset = []					//Initialize empty array
const numDataPoints = 1000			
const deg = 360 / numDataPoints
const radius = 500


for (let i = 0; i < numDataPoints; i++) {					//Loop numDataPoints times
    const newNumber1 = Math.floor(Math.random() * radius);	//New random integer
    const newNumber2 = Math.floor(Math.random() * radius);	//New random integer
    //dataset.push([newNumber1, newNumber2]);					//Add new number to array
    dataset.push(newNumber1)
}
    
console.log(dataset)

const svg = d3.select(".mini-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "canvas")
        .style("filter", "url(#gooey)")
        .append("g")
            .attr("class", "goey-circles")

const xPosition = document.querySelector(".canvas").clientWidth / 2
const yPosition = document.querySelector(".canvas").clientHeight / 2 

const colorQuantize = d3.scaleQuantize()
    .domain([0, radius])
    .range(colorbrewer.Reds[5]);

//Main code to make a gooey object
const defs = svg.append('defs');
const filter = defs.append('filter').attr('id','gooey');
filter.append('feGaussianBlur')
    .attr('in','SourceGraphic')
    .attr('stdDeviation','7')
    .attr('result','blur');
filter.append('feColorMatrix')
    .attr('in','blur')
    .attr('mode','matrix')
    .attr('values','1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7')
    .attr('result','gooey');
filter.append('feBlend')
    .attr('in','SourceGraphic')
    .attr('in2','gooey')

function circleTransition() { 

    const timeCircle = svg.selectAll("circle")
        .data(dataset).enter()
        .append("circle")
        .attr("cx", xPosition)
        .attr("cy", yPosition)
        .attr("fill", d => colorQuantize(d))
        .attr("opacity", .5)

    repeat()
    
    function repeat() {
      timeCircle
        .attr("r", 0)
        .transition().duration(3000)
        .attr("r", 7)    
        .attr('cx', (d,i) => Math.round(xPosition + d * Math.cos(i))) 
        .attr('cy', (d,i) => Math.round(yPosition + d * Math.sin(i)))
        // .attr("transform", (d,i) => "rotate(" + i * .005 +")") 
        .transition().duration(1000)
        .attr("r", 15)
        //.on("end", repeat)   // when the transition finishes start again
    }

    svg.append("circle")
        .attr("fill", colorQuantize(5))
        .attr("cx", xPosition)
        .attr("cy", yPosition)
        .attr("r", 10)


};

circleTransition()
    
    




