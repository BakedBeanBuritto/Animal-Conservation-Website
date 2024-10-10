const MARGIN = { top: 90, right: 40, bottom: 40, left: 40 };
const HEIGHT = 800 - MARGIN.top - MARGIN.bottom;
const WIDTH = 600 - MARGIN.left - MARGIN.right;

// CREATE SVG
let svg = d3
  .select("#section")
  .append("svg")
  .attr("height", HEIGHT + MARGIN.top + MARGIN.bottom)
  .attr("width", WIDTH + MARGIN.left + MARGIN.right)
  .append("g")
  .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`);

//CREATE AXES
let xScale = d3.scaleLinear().domain([2014, 2024]).range([0, WIDTH]);
  svg
    .append("g")
    .attr("transform", `translate(0, ${HEIGHT})`)
    .call(d3.axisBottom(xScale));


let yScale = d3.scaleLinear().domain([0, 500]).range([HEIGHT, 0]);
  svg
  .append("g").call(d3.axisLeft(yScale));

// FETCH DATA
const url = "https://climate-api.open-meteo.com/v1/climate?latitude=52.52&longitude=13.41&start_date=2000-01-01&end_date=2024-12-31&models=CMCC_CM2_VHR4&daily=temperature_2m_max";
//this is where the issue for me is. It might be the Api, but i'm not able to fetch the data properly
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Extract and format data
    // const trendData = data.daily.temperature_2m_max.map((temp, index) => ({
    //   year: new Date(data.daily.time[index]).getFullYear(),
    //   temperature: temp // Max temperature
    // }));

    // CREATE LINE
    const line = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.temperature));

    svg.append("path")
      .datum(trendData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // CREATE CIRCLES
    svg.selectAll("dots")
    .data(trendData)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.year))
    .attr("cy", d => yScale(d.temperature))
    .attr("r", 6)
    .style("fill", "crimson")
    .on("mouseover", function(event, d) {
    const tooltip = d3.select("#tooltip");
    tooltip.style("opacity", 1)
    .html(`Year: ${d.year}<br>Max Temp: ${d.temperature}°C`)
    .style("left", `${event.pageX + 5}px`)
    .style("top", `${event.pageY - 28}px`);
    })
    .on("mouseout", function() {
        d3.select("#tooltip").style("opacity", 0);
    });
  })
  .catch(error => console.error("Error fetching data:", error));

// CREATE TOOLTIP
d3.select("body").append("div")
.attr("id", "tooltip")
.style("opacity", 0)
.style("position", "absolute")
.style("background", "lightgrey")
.style("padding", "5px")
.style("border-radius", "5px");