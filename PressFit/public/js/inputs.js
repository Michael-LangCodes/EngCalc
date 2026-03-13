function getInputs(){
  return {
    pinOD: Number(document.querySelector('#pinOD').value),
    pinID: Number(document.querySelector('#pinID').value),
    pinLength: document.querySelector('#pinLength').value,
    hubOD: document.querySelector('#hubOD').value,
    hubID: document.querySelector('#hubID').value,
    hubLength: document.querySelector('#hubLength').value,
  }
}