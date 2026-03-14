import Plotly from "https://cdn.plot.ly/plotly-latest.min.js";

export function drawPlotlyStress(inputs) {
  // Example: simplified 2D grid of radial stress
  const z = [
    [hubHoopStress, hubHoopStress],
    [pinHoopStress, pinHoopStress]
  ];

  const data = [{
    z: z,
    type: 'heatmap',
    colorscale: 'Reds'
  }];

  Plotly.newPlot('plotlyContainer', data);
}