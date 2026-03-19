import { aluminumData, noneData } from "./getMaterial.js";

export function materialData(location){
    let material = document.querySelector(`#${location}`).value;

    if (material === 'none'){
        return noneData();
    } else if (material === 'aluminum'){
        return aluminumData();
    }
}