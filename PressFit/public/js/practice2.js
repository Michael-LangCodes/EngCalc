import {drawStress} from "./draw.js"

const canvas = document.getElementById("pressfit")
const ctx = canvas.getContext("2d")

drawStress(ctx)