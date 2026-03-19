import { hubHoopStress, pinHoopStress, calcPressure } from "../calculations/stress.js"

import { calcAssemblyForce } from "../calculations/pressforce.js"

import { calcTorque } from "../calculations/torque.js"

export function displayResults(results) {
    document.querySelector('#hoopStressOutput').innerText = `Hub Hoop Stress: ${results.hubStress}`;
    document.querySelector('#pressForce').innerText = `Press Force: ${results.pressForce}`;
    document.querySelector('#pressTorque').innerText = `Press Torque: ${results.pressTorque}`;

}

export function runCalculation(inputs) {
    const hubStress = hubHoopStress(inputs); // run calculations
    const pinStress = pinHoopStress(inputs);
    const pressForce = calcAssemblyForce(inputs);
    const pressure = calcPressure(inputs);
    const pressTorque = calcTorque(inputs);
    return{ hubStress, pinStress, pressForce, pressure, pressTorque };
}