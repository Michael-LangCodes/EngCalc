import { materialData } from "../materials/selectMaterial.js";

export function getInputs() {
  // Grab values from HTML inputs and convert to numbers
  const hubID = Number(document.querySelector("#hubID").value);
  const hubOD = Number(document.querySelector("#hubOD").value);
  const hubLength = Number(document.querySelector("#hubLength").value);
  const hubMat = materialData('hubMat')
  const hubStiffness =  hubMat.stiffness;
  const hubPois = hubMat.pois;

  const pinID = Number(document.querySelector("#pinID").value);
  const pinOD = Number(document.querySelector("#pinOD").value);
  const pinLength = Number(document.querySelector("#pinLength").value);
  const pinMat = materialData('pinMat');
  const pinStiffness = pinMat.stiffness;
  const pinPois = pinMat.pois;

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