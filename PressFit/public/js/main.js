import {drawStress} from "./draw.js"

import { getInputs } from "./ui/inputs.js"

import { hubHoopStress, pinHoopStress } from "./calculations/stress.js"

import { drawD3Stress } from "./plots/stressplot.js"

import { drawPlotlyStress } from "./plots/plotly.js"

import { drawCanvasStress } from "./plots/canvasplot.js"

document.querySelector('.button').addEventListener('click', ()=>{
  const inputs = getInputs();        // grab values from the form
  console.log(getInputs())
  const hubStress = hubHoopStress(inputs); // run calculations
  const pinStress = pinHoopStress(inputs);
  const results = { hubStress, pinStress };
  console.log(results);
  document.querySelector('#hoopStressOutput').innerText = `Hub Hoop Stress: ${hubStress}`
  drawD3Stress(inputs,results);
  //drawPlotlyStress(inputs,results);
  drawCanvasStress(results,inputs);
})


function calcAssemblyForce(){
  const friction = 0.2;

}