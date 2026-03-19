import { aluminumData, noneData } from "./getMaterial.js";

export function materialData(location){
    let material = document.querySelector(`#${location}`).value;

    if (material === 'none'){
        console.log(`This is the test to check #${location}`);
        return noneData();
        //el.style.backgroundColor = "red";
    } else if (material === 'aluminum'){
        return aluminumData();
    }
}