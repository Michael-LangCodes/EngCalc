export function drawCanvasStress(results,inputs) {
  const canvas = document.getElementById("stressCanvas");
  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Clear previous
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Simple color mapping function
  function stressToColor(stress) {
    const maxStress = Math.max(results.hubStress, results.pinStress);
    const intensity = 40;
    //const intensity = Math.round((stress / maxStress) * 255);
    return `rgb(${intensity},0,0)`; // red scale
  }

  // Draw hub circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, inputs.hubOD, 0, Math.PI * 2);
  ctx.fillStyle = stressToColor(results.hubStress);
  ctx.fill();

  // Draw pin circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, inputs.pinOD, 0, Math.PI * 2);
  ctx.fillStyle = stressToColor(results.pinStress);
  ctx.fill();
}