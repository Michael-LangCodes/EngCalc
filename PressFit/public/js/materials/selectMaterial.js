import { aluminumData } from "./getMaterial.js";

export function materialData(material,location){
    if (material === 'none'){
    console.log(`This is the test to check#${location}`)
        document.querySelector(`#${location}`).style.backgroundColor = "red"
    }else if (material === 'aluminum'){
        let stiffness = aluminumData().YoungModulus
    }
}