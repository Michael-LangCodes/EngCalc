import {drawStress} from "./draw.js"

import { getInputs } from "./ui/inputs.js"

import { hubHoopStress, pinHoopStress } from "./calculations/stress.js"

import { drawD3Stress } from "./plots/stressplot.js"

import { drawPlotlyStress } from "./plots/plotly.js"

import { drawCanvasStress } from "./plots/canvasplot.js"

import { calcAssemblyForce } from "./calculations/pressforce.js"

document.querySelector('.button').addEventListener('click', ()=>{
  const inputs = getInputs();        // grab values from the form
  console.log(getInputs())
  const hubStress = hubHoopStress(inputs); // run calculations
  const pinStress = pinHoopStress(inputs);
  const pressForce = calcAssemblyForce(inputs);
  const results = { hubStress, pinStress };
  console.log(results);
  console.log(pressForce);
  document.querySelector('#hoopStressOutput').innerText = `Hub Hoop Stress: ${hubStress}`;
  document.querySelector('#pressForce').innerText = `Press Force: ${pressForce}`;
  drawD3Stress(inputs,results);
  //drawPlotlyStress(inputs,results);
  drawCanvasStress(results,inputs);
})
