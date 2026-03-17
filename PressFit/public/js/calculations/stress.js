import { interfere, hubDeflect, pinDeflect } from "./interface.js"

// Calculate Interference Pressure
export function calcPressure(inputs) {
    const inter = interfere(inputs);
    const hubDef = hubDeflect(inputs);
    const pinDef = pinDeflect(inputs);

    return inter / (hubDef + pinDef);
}

// Calculate Hub Hoop Stresses
export function hubHoopStress(inputs) {
    const p = calcPressure(inputs);
    return p * (((inputs.hubOD / 2) ** 2 + (inputs.hubID / 2) ** 2) /
                ((inputs.hubOD / 2) ** 2 - (inputs.hubID / 2) ** 2));
}

//Calculate Pin Hoop Stresses
export function pinHoopStress(inputs) {
    const p = calcPressure(inputs);
    return p * (((inputs.pinOD / 2) ** 2 + (inputs.pinID / 2) ** 2) /
                ((inputs.pinOD / 2) ** 2 - (inputs.pinID / 2) ** 2));
}