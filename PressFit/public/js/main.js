import {drawStress} from "./draw.js"

import { getInputs } from "./ui/inputs.js"

import { hubHoopStress, pinHoopStress } from "./calculations/stress.js"

import { drawD3Stress } from "./plots/stressplot.js"

import { drawPlotlyStress } from "./plots/plotly.js"

document.querySelector('.button').addEventListener('click', ()=>{
  const inputs = getInputs();        // grab values from the form
  console.log(getInputs())
  const hubStress = hubHoopStress(inputs); // run calculations
  const pinStress = pinHoopStress(inputs);
  const results = { hubStress, pinStress };
  console.log(results);
  document.querySelector('#hoopStressOutput').innerText = `Hub Hoop Stress: ${hubStress}`
  drawD3Stress(inputs,results);
  drawPlotlyStress(inputs,results)
})

// const hubStiffness = 200
// const hubPois = 0.3
// const pinStiffness = 200
// const pinPois = 0.3

// function calcHoopStress() {
//   const pinOD = document.querySelector('#pinOD').value
//   const pinID = document.querySelector('#pinID').value
//   const pinLength = document.querySelector('#pinLength').value
//   const hubOD = document.querySelector('#hubOD').value
//   const hubID = document.querySelector('#hubID').value
//   const hubLength = document.querySelector('#hubLength').value

//   const interfere = ((pinOD/2) - (hubID/2));
//   const hubDeflect = ((hubID/2)/hubStiffness)*((((hubOD/2)**2 + (hubID/2)**2)/((hubOD/2)**2 - (hubID/2)**2))+hubPois);
//   const pinDeflect = ((pinOD/2)/pinStiffness)*((((pinOD/2)**2 + (pinID/2)**2)/((pinOD/2)**2 - (pinID/2)**2))+pinPois);
  
//   const pressure = interfere/(hubDeflect+pinDeflect)

//   const hubHoopStress = pressure*(((hubOD/2)**2 + (hubID/2)**2)/((hubOD/2)**2 - (hubID/2)**2));
//   const pinHoopStress = pressure*(((pinOD/2)**2 + (pinID/2)**2)/((pinOD/2)**2 - (pinID/2)**2));
//   document.querySelector('#hoopStressOutput').innerText = `Hub Hoop Stress: ${hubHoopStress}`
//   //return pressure
// }



function calcAssemblyForce(){
  const friction = 0.2;

}