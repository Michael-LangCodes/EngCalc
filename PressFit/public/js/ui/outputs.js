export function displayResults(results) {
    document.querySelector('#hoopStressOutput').innerText = `Hub Hoop Stress: ${results.hubStress}`;
    document.querySelector('#pressForce').innerText = `Press Force: ${results.pressForce}`;
    document.querySelector('#pressTorque').innerText = `Press Torque: ${results.pressTorque}`;

}
