import { calcPressure } from "./stress.js";

export function calcAssemblyForce(inputs){
    const friction = 0.2;
    const pressure = calcPressure(inputs);
    return (inputs.pinOD*Math.PI*pressure*friction*inputs.hubLength)
}