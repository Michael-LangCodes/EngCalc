export function getInputs(){
  return {
    pinOD: Number(document.querySelector('#pinOD').value),
    pinID: Number(document.querySelector('#pinID').value),
    pinLength: Number(document.querySelector('#pinLength').value),
    pinStiffness: 200,
    pinPois: 0.3,
    hubOD: Number(document.querySelector('#hubOD').value),
    hubID: Number(document.querySelector('#hubID').value),
    hubLength: Number(document.querySelector('#hubLength').value),
    hubStiffness: 200,
    hubPois: 0.3
  }
}