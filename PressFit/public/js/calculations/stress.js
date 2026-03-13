
export function interfere(pinOD, hubID){
    return (pinOD/2) - (hubID/2)
}

export function hubDeflect(hubID,hubStiffness,hubOD,hubPois){
    return ((hubID/2)/hubStiffness)*((((hubOD/2)**2 + (hubID/2)**2)/((hubOD/2)**2 - (hubID/2)**2))+hubPois);
}

export function pinDeflect(pinID,pinStiffness,pinOD,pinPois){
    return ((pinOD/2)/pinStiffness)*((((pinOD/2)**2 + (pinID/2)**2)/((pinOD/2)**2 - (pinID/2)**2))+pinPois);
}

export function pressure(hubID,hubStiffness,hubOD,hubPois,pinID,pinStiffness,pinOD,pinPois){
    //Caclulate the interference
    interfere = interfere(pinOD,hubID);
    //Calculate hub ID deflection from press
    hubDeflect = hubDeflect(hubID,hubStiffness,hubOD,hubPois);
    //Calculate pin OD deflection from press
    pinDeflect = pinDeflect(pinID,pinStiffness,pinOD,pinPois);
    return interfere/(hubDeflect+pinDeflect)
}

export function hubHoopStress(hubID,hubStiffness,hubOD,hubPois,pinID,pinStiffness,pinOD,pinPois){
    pressure = pressure(hubID,hubStiffness,hubOD,hubPois,pinID,pinStiffness,pinOD,pinPois);
    return pressure*(((hubOD/2)**2 + (hubID/2)**2)/((hubOD/2)**2 - (hubID/2)**2))
}

export function pinHoopStress(){
    pressure = pressure(hubID,hubStiffness,hubOD,hubPois,pinID,pinStiffness,pinOD,pinPois);
    return pressure*(((pinOD/2)**2 + (pinID/2)**2)/((pinOD/2)**2 - (pinID/2)**2))
}

// export function shaftStress(r, pressure, shaftRadius){
//     return pressure * (r / shaftRadius)
// }

// export function hubStress(r, pressure, rInner, rOuter){
//     return pressure * (rOuter - r) / (rOuter - rInner)
// }