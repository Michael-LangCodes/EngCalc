document.querySelector('#title').addEventListener('click', run)

function run() {
  const pinOD = document.querySelector('#pinOD').value
  const pinID = document.querySelector('#pinID').value
  const pinLength = document.querySelector('#pinLength').value
  const holeOD = document.querySelector('#holeOD').value
  const holeID = document.querySelector('#holeID').value
  const holeLength = document.querySelector('#holeLength').value

  // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here

  document.querySelector('#hoopStressOutput').innerText = `Pin OD is: ${pinOD}`
}