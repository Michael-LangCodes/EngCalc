import { calcAssemblyForce } from "./pressforce";

export function calcTorque(inputs){
    const pressForce = calcAssemblyForce(inputs);
    return pressForce*(inputs.pinOD/2)
}