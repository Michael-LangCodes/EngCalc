export function interfere(inputs){
    return (inputs.pinOD / 2) - (inputs.hubID / 2);
}

export function hubDeflect(inputs){
    return ((inputs.hubID / 2) / inputs.hubStiffness) *
           ((((inputs.hubOD / 2) ** 2 + (inputs.hubID / 2) ** 2) / ((inputs.hubOD / 2) ** 2 - (inputs.hubID / 2) ** 2)) + inputs.hubPois);
}

export function pinDeflect(inputs){
    return ((inputs.pinOD / 2) / inputs.pinStiffness) *
           ((((inputs.pinOD / 2) ** 2 + (inputs.pinID / 2) ** 2) / ((inputs.pinOD / 2) ** 2 - (inputs.pinID / 2) ** 2)) + inputs.pinPois);
}

// Calculate pressure
export function calcPressure(inputs) {
    const inter = interfere(inputs);
    const hubDef = hubDeflect(inputs);
    const pinDef = pinDeflect(inputs);

    return inter / (hubDef + pinDef);
}

// Calculate hoop stresses
export function hubHoopStress(inputs) {
    const p = calcPressure(inputs);
    return p * (((inputs.hubOD / 2) ** 2 + (inputs.hubID / 2) ** 2) /
                ((inputs.hubOD / 2) ** 2 - (inputs.hubID / 2) ** 2));
}

export function pinHoopStress(inputs) {
    const p = calcPressure(inputs);
    return p * (((inputs.pinOD / 2) ** 2 + (inputs.pinID / 2) ** 2) /
                ((inputs.pinOD / 2) ** 2 - (inputs.pinID / 2) ** 2));
}

// export function shaftStress(r, pressure, shaftRadius){
//     return pressure * (r / shaftRadius)
// }

// export function hubStress(r, pressure, rInner, rOuter){
//     return pressure * (rOuter - r) / (rOuter - rInner)
// }