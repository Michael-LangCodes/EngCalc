function displayResults(results) {
  document.querySelector("#hoopStressOutput").innerText =
    `Pressure: ${results.pressure.toFixed(2)}`;
}