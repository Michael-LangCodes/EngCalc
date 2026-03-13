import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export function drawD3Stress(inputs,results) {
  const width = 300;
  const height = 300;
  const radius = Math.min(width, height) / 2;

  const svg = d3.select("#d3Container")
    .html("") // clear previous
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width/2},${height/2})`);

  const colorScale = d3.scaleLinear()
    .domain([0, Math.max(results.hubStress, results.pinStress)])
    .range(["white", "red"]);

  // Example: two circles, hub and pin
  svg.append("circle")
    .attr("r", inputs.hubOD) // hub radius
    .attr("fill", colorScale(results.hubStress));

  svg.append("circle")
    .attr("r", inputs.pinOD) // pin radius
    .attr("fill", colorScale(results.pinStress));
}