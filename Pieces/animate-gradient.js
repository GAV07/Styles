const width = 600
const height = 600

const svg = d3.select(".chart47")
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
const margin = { top: 80, right: 150, left: 100, bottom: 100}
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(.2)
    
const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, xValue)])
        .range([0, innerWidth])

const g = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)

const defs = svg.append("defs")

const linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%")
    .attr("spreadMethod", "reflect")

const colors = ["#232526", "#414345", "#434343", "#2c3e50", "#274046", "#524D4A"]

linearGradient.selectAll(".stop")
    .data(colors)
    .enter().append("stop")
    .attr("offset", (d,i) => { return i / (colors.length - 1) })
    .attr("stop-color", (d) => { return d })

linearGradient.append("animate")
    .attr("attributeName","x1")
    .attr("values","0%;200%")
    .attr("dur","7s")
    .attr("repeatCount","indefinite")

linearGradient.append("animate")
    .attr("attributeName","x2")
    .attr("values","100%;300%")
    .attr("dur","7s")
    .attr("repeatCount","indefinite")

g.append("g").call(d3.axisLeft(yScale))


d3.selectAll("path.domain, g.tick line").remove()


g.selectAll("rect")
    .data(data)
    .attr("class", "reading")
    .enter().append("rect")
        .attr("width", 0)
        .attr("y", d => yScale(yValue(d)))
        .attr("height", yScale.bandwidth())
    .transition()
    .duration(5000)
        .attr("x", 0)
        .attr("y", d => yScale(yValue(d)))
        .attr("rx", 3)
        .attr("width", d => xScale(xValue(d)))
        .attr("fill", (d,i) => {
            if(i === 3) {
                return "#d91200"
            } else {
                return "url(#linear-gradient)"
            }
        })


g.selectAll()
    .data(data)
    .enter().append("text")
        .attr("opacity", 0)
        .attr("x", (d,i) => {
            if(d.country !== "Suede") {
                return xScale(xValue(d)) - 50
            } else {
                return xScale(xValue(d)) + 10
            }
        })
        .attr("y", d => yScale(yValue(d)) + 23)
        .text(d => d.count)
        .style("fill", (d,i) => {
            if(d.country !== "Suede") {
                return "white"
            } else {
                return "black"
            }
        })
        .style("font-weight", "400")
        .style("font-size", ".8em")
    .transition()
    .duration(8000)
        .attr("opacity", 1)


