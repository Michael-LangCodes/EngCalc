
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
    console.log(jsonData.YoungModulus)
    let stiffness = jsonData.YoungModulus;
    let pois = jsonData.PoissonRation;
    // return {
    //     stiffness,
    //     pois
    // }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}