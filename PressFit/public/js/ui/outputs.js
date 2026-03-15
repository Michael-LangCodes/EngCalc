function displayResults(results) {
    document.querySelector("#hoopStressOutput").innerText =
    `Pressure: ${results.hubtress}`;
    // document.querySelector("#hoopStressOutput").innerText =
    // `Pressure: ${results.hubtress}`;
    document.querySelector("#pressForce").innerText =
    `Pressure: ${results.pressForce}`;
    
}