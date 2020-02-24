const width = 1000
const height = 500

const svg = d3.select(".chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

let data = [
    {country: "Roumaine", count: "1000"},
    {country: "Servie", count: "900"},
    {country: "Russie", count: "890"},
    {country: "Negroes, U.S.A.", count: "700"},
    {country: "Hongrie", count: "680"},
    {country: "Italie", count: "500"},
    {country: "Autriche", count: "400"},
    {country: "Ireland", count: "350"},
    {country: "France", count: "150"},
    {country: "Suede", count: "20"},
]


const xValue = d => d.count
const yValue = d => d.country
const margin = { top: 10, right: 150, left: 200, bottom: 100}
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(.2)
    
const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, xValue)])
        .range([0, innerWidth])

const colorQuantize = d3.scaleQuantize()
        .domain([0, d3.max(data, xValue)])
        .range(colorbrewer.YlGnBu[7]);

//Margin space for entire chart
const g = svg.append("g")
    .attr("class", "chart")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)

g.append("g").call(d3.axisLeft(yScale))

d3.selectAll("path.domain, g.tick line").remove()

g.append("g").call(d3.axisBottom(xScale))
    .attr("transform", `translate(0, ${height - margin.bottom})`)

d3.selectAll("path.domain").remove()

//Create Bars
const bars = g.selectAll("rect")
    .data(data)
    .enter().append("rect")
        .attr("width", 0)
        .attr("y", d => yScale(yValue(d)))
        .attr("height", yScale.bandwidth())
        .attr("fill", d => colorQuantize(xValue(d)))

bars.transition().duration(3000)
        .attr("x", 0)
        .attr("y", d => yScale(yValue(d)))
        .attr("rx", 2.5)
        .attr("width", d => xScale(xValue(d)))
    
bars.on("mouseover", function() {
        d3.select(".count")
            .transition().duration(500)
            .attr("opacity", 1)
    })
    .on("mouseout", function() {
        d3.select(".count")
            .transition().duration(500)
            .attr("opacity", 0)
    })



g.selectAll()
    .data(data)
    .enter().append("text")
        .attr("class", "count")
        .attr("opacity", 0)
        .attr("x", (d,i) => xScale(xValue(d)) + 10)
        .attr("y", d => yScale(yValue(d)) + 20)
        .text(d => d.count)
        .style("fill", "white")
        .style("font-weight", "400")
        .style("font-size", ".8em")
    


