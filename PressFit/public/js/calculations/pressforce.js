import { calcPressure } from "./stress";

export function calcAssemblyForce(inputs){
    const friction = 0.2;
    const pressure = calcPressure(inputs);
    return (inputs.pinOD*Math.PI*pressure*friction*inputs.hubLength)
}