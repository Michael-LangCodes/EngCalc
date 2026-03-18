import { materialData } from "../materials/selectMaterial.js";

export function getInputs() {
  // Grab values from HTML inputs and convert to numbers
  const hubID = Number(document.querySelector("#hubID").value);
  const hubOD = Number(document.querySelector("#hubOD").value);
  const hubLength = Number(document.querySelector("#hubLength").value);
  const hubStiffness =  200 //Number(materialData('#hubMat')).stiffness
  const hubPois = 0.3//Number(document.querySelector("#hubPois").value);

  const pinID = Number(document.querySelector("#pinID").value);
  const pinOD = Number(document.querySelector("#pinOD").value);
  const pinLength = Number(document.querySelector("#pinLength").value);
  const pinStiffness = 200//Number(document.querySelector("#pinStiffness").value);
  const pinPois = 0.3//Number(document.querySelector("#pinPois").value);

  // Return all values as a single object
  return {
    hubID,
    hubOD,
    hubLength,
    hubStiffness,
    hubPois,
    pinID,
    pinOD,
    pinLength,
    pinStiffness,
    pinPois
  };
}