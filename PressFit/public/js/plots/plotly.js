import Plotly from "https://cdn.jsdelivr.net/npm/plotly.js-dist@2.32.0/+esm";

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