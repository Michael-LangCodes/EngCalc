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