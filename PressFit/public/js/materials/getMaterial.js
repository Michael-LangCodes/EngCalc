export async function fetchJSONData() {
  try {
    const response = await fetch('./materials.json'); // Fetch the file
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json(); // Parse the response as JSON
    console.log(jsonData); // Use the data (it's a JS object)
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}