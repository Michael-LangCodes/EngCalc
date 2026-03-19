import { aluminumData } from "./getMaterial.js";

export function materialData(location){
    const el = document.querySelector(`#${location}`);
    let material = el.value;

    if (material === 'none'){
        console.log(`This is the test to check #${location}`);
        //el.style.backgroundColor = "red";
    } else if (material === 'aluminum'){
        return aluminumData();
    }
}