import {drawStress} from "./draw.js"

import { getInputs } from "./ui/inputs.js"

import { hubHoopStress, pinHoopStress, calcPressure } from "./calculations/stress.js"

import { drawD3Stress } from "./plots/stressplot.js"

import { drawPlotlyStress } from "./plots/plotly.js"

import { drawCanvasStress } from "./plots/canvasplot.js"

import { calcAssemblyForce } from "./calculations/pressforce.js"

import { calcTorque } from "./calculations/torque.js"

import { aluminumData } from "./materials/getMaterial.js"

import { materialData } from "./materials/selectMaterial.js"

import { displayResults, runCalculation } from "./ui/outputs.js"

document.querySelector('.button').addEventListener('click', ()=>{
  const inputs = getInputs();        // grab values from the form
  const results = runCalculation(inputs)
  console.log(getInputs())
  // const hubStress = hubHoopStress(inputs); // run calculations
  // const pinStress = pinHoopStress(inputs);
  // const pressForce = calcAssemblyForce(inputs);
  // const pressure = calcPressure(inputs);
  // const pressTorque = calcTorque(inputs);
  // const results = { hubStress, pinStress, pressForce, pressure, pressTorque };
  displayResults(results);
  drawD3Stress(inputs,results);
  drawCanvasStress(results,inputs);
})
