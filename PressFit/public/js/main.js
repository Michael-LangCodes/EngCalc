import {drawStress} from "./draw.js"

import { getInputs } from "./ui/inputs.js"

import { drawD3Stress } from "./plots/stressplot.js"

import { drawCanvasStress } from "./plots/canvasplot.js"

import { displayResults, runCalculation } from "./ui/outputs.js"

document.querySelector('.button').addEventListener('click', ()=>{
  const inputs = getInputs();        // grab values from the form
  const results = runCalculation(inputs)  //calculate the pressforce calcs
  displayResults(results);
  drawD3Stress(inputs,results);
  drawCanvasStress(results,inputs);
})
