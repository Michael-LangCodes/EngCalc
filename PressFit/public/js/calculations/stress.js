//Calculate Interference
export function interfere(inputs){
    return (inputs.pinOD / 2) - (inputs.hubID / 2);
}

//Calculate Hub Deflection from Press
export function hubDeflect(inputs){
    return ((inputs.hubID / 2) / inputs.hubStiffness) *
           ((((inputs.hubOD / 2) ** 2 + (inputs.hubID / 2) ** 2) / ((inputs.hubOD / 2) ** 2 - (inputs.hubID / 2) ** 2)) + inputs.hubPois);
}

//Calculate Pin OD Deflection from Press
export function pinDeflect(inputs){
    return ((inputs.pinOD / 2) / inputs.pinStiffness) *
           ((((inputs.pinOD / 2) ** 2 + (inputs.pinID / 2) ** 2) / ((inputs.pinOD / 2) ** 2 - (inputs.pinID / 2) ** 2)) + inputs.pinPois);
}

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