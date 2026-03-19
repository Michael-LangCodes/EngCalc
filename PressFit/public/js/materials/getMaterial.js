/**
 * None/Default
 */
export async function noneData() {
  try {
    const response = await fetch('./js/materials/materials.json'); // Fetch the file
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json(); // Parse the response as JSON
    let stiffness = jsonData.YoungModulus; //Grab stiffness from material database
    let pois = jsonData.PoissonRation;  //Grab poisson ration from material database
    return {
         stiffness,
         pois
    }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

/**
 * Aluminum Material Import
 */
export async function aluminumData() {
  try {
    const response = await fetch('./js/materials/materials.json'); // Fetch the file
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json(); // Parse the response as JSON
    console.log(jsonData.aluminum); // Use the data (it's a JS object)
    console.log(jsonData.aluminum.YoungModulus)
    let stiffness = jsonData.YoungModulus;
    let pois = jsonData.PoissonRation;
    return {
         stiffness,
         pois
    }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}