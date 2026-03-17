import { calcAssemblyForce } from "./pressforce";

export function calcTorque(inputs){
    const pressForce = calcTorque(inputs);
    return pressForce*(inputs.pinOD/2)
}