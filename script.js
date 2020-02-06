const width = 1000
const height = 600
const padding = 30


// const dataset = []					//Initialize empty array
// const numDataPoints = 20			//Number of dummy data points to create
// const xRange = 600					//Max range of new x values
// const yRange = 600					//Max range of new y values

// const xScale = d3.scaleLinear()
//     .domain([0,xRange])
//     .range([0, width])

// const yScale = d3.scaleLinear()
//     .domain([0,yRange])
//     .range([height, 0])

// for (let i = 0; i < numDataPoints; i++) {					//Loop numDataPoints times
//     const newNumber1 = Math.floor(Math.random() * xRange);	//New random integer
//     const newNumber2 = Math.floor(Math.random() * yRange);	//New random integer
//     dataset.push([newNumber1, newNumber2]);					//Add new number to array
// 	}
// console.log(dataset)

const xScale = d3.scaleLinear()
    .domain([0,1])
    .range(0, width)

const svg = d3.select("div")
        .append("svg")
        .attr("width", 960)
        .attr("height", 500)
        .style("filter", "url(#gooey)")

//Main code to make a gooey object
const defs = svg.append('defs');
const filter = defs.append('filter').attr('id','gooey');
filter.append('feGaussianBlur')
    .attr('in','SourceGraphic')
    .attr('stdDeviation','10')
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

    const stillCircle = svg.append("circle")
        .attr("fill", "steelblue")
        .attr("cx", 40)
        .attr("cy", 250)
        .attr("r", 20)

    const timeCircle = svg.append("circle")
        .attr("fill", "steelblue")
    repeat()
    
    function repeat() {
      timeCircle
        .attr('cx', 40)      // position the circle at 40 on the x axis
        .attr('cy', 250)     // position the circle at 250 on the y axis
        .attr("r", 10)
        .transition()        // apply a transition
        .duration(5000)      // apply it over 2000 milliseconds
        .attr('cx', width/2 - Math.random())     // move the circle to 920 on the x axis
        .transition().duration(1000)
        .attr("r", 0)
        .on("end", repeat)   // when the transition finishes start again
    }


};

circleTransition()
    
    




