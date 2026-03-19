import {drawStress} from "./draw.js"

import { getInputs } from "./ui/inputs.js"

import { drawD3Stress } from "./plots/stressplot.js"

import { drawCanvasStress } from "./plots/canvasplot.js"

import { displayResults, runCalculation } from "./ui/outputs.js"

import { matSelectColor } from "./ui/matColor.js"

const button = document.querySelector('.button');

button.addEventListener('click', ()=> {
  const inputs = getInputs();
  const results = runCalculation(inputs);
  displayResults(results);
  drawD3Stress(inputs,results);
  drawCanvasStress(results,inputs);
});

matSelectColor('hubMat', button);
matSelectColor('pinMat', button);
