export function interfere(pinOD, hubID){
    return (pinOD/2) - (hubID/2)
}

export function shaftStress(r, pressure, shaftRadius){
    return pressure * (r / shaftRadius)
}

export function hubStress(r, pressure, rInner, rOuter){
    return pressure * (rOuter - r) / (rOuter - rInner)
}