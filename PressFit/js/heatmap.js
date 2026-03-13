export function heatColor(value, max){

    const t = value/max

    const r = Math.floor(255*t)
    const g = Math.floor(255*(1-Math.abs(t-0.5)*2))
    const b = Math.floor(255*(1-t))

    return `rgb(${r},${g},${b})`
}