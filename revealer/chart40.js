const width = 800
const height = 500
const margin = { top: 10, right: 150, left: 80, bottom: 100}
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom
const formatTime = d3.timeFormat("%Y")

const svg = d3.select(".chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

const data = [
    { year: 1790, black: 0.8, white: 3 },
    { year: 1800, black: 1.2, white: 4 },
    { year: 1810, black: 1.3, white: 5 },
    { year: 1820, black: 1.8, white: 7 },
    { year: 1830, black: 2.0, white: 10 },
    { year: 1840, black: 2.5, white: 14 },
    { year: 1850, black: 2.9, white: 18 },
    { year: 1860, black: 3.4, white: 25 },
    { year: 1870, black: 4.5, white: 33 },
    { year: 1880, black: 5.2, white: 43 },
    { year: 1890, black: 7, white: 55 }
]

data.forEach(function(d) {
    d.date = new Date(d.year, 1)
})

console.log(data)

const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.date))
    .range([0, innerWidth])

const yScale = d3.scaleLinear()
    .domain(d3.extent([0,60]))
    .range([innerHeight, margin.top])

const xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(10)
    .tickFormat(formatTime)
    .tickSize(-innerHeight)
    
const yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(10)
    .tickSize(-innerWidth)
    

svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + innerHeight + ")")
    .call(xAxis)
    .selectAll("text")
        .attr("transform", "translate(0,10)")

svg.append("g")
    .attr("class", "y-axis")
    .attr("transform", "translate(" + 0 + ",0)")
    .call(yAxis)
    .selectAll("text")
        .attr("transform", "translate(-10,0)")

const blackLine = d3.line()
    .curve(d3.curveBasis)
    .x(d => xScale(d.date))
    .y(d => yScale(d.black))
    
const whiteLine = d3.line()
    .curve(d3.curveBasis)
    .x(d => xScale(d.date))
    .y(d => yScale(d.white))

svg.append("path")
    .attr("d", blackLine(data))
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 4)

svg.append("path")
    .attr("d", whiteLine(data))
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("stroke-width", 4)



