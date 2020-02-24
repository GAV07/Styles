const width = 800
const height = 1500

const dataset = []					
const numDataPoints = 1500			
const deg = 360 / numDataPoints
const radius = 800


for (let i = 0; i < numDataPoints; i++) {					//Loop numDataPoints times
    const newNumber1 = Math.floor(Math.random() * radius);	//New random integer
    const newNumber2 = Math.floor(Math.random() * radius);	//New random integer
    //dataset.push([newNumber1, newNumber2]);					//Add new number to array
    dataset.push(newNumber1)
}

const svg = d3.selectAll(".circles")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "canvas")
        .append("g")

const xPosition = document.querySelector(".canvas").clientWidth / 2
const yPosition = document.querySelector(".canvas").clientHeight / 2 

const colorQuantize = d3.scaleQuantize()
    .domain([0, radius])
    .range(colorbrewer.YlGnBu[3]);

    function circleTransition() { 

        const timeCircle = svg.selectAll("circle")
            .data(dataset).enter()
            .append("circle")
            .attr("cx", xPosition)
            .attr("cy", yPosition)
            .attr("fill", "#FCCAAC")
            //.attr("fill", "#F9F6E5")
            //.attr("fill", d => colorQuantize(d))
            .attr("opacity", .9)
    
        repeat()
        
        function repeat() {
          timeCircle
            .attr("r", 0)
            .transition().duration(3000)
            .attr("r", 7)    
            .attr('cx', (d,i) => Math.round(xPosition + d * Math.cos(i))) 
            .attr('cy', (d,i) => Math.round(yPosition + d * Math.sin(i)))
            .attr("transform", (d,i) => "rotate(" + i * .005 +")") 
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