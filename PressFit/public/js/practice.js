const canvas = document.getElementById("pressfit");
const ctx = canvas.getContext("2d");

const centerX = 300;
const centerY = 200;

const shaftRadius = 60;
const hubInnerRadius = 60;
const hubOuterRadius = 140;

const interfacePressure = 100; // MPa (example)

/* -----------------------------
   Stress models
--------------------------------*/

function shaftStress(r){

    if(r > shaftRadius) return 0;

    // simple compressive decay toward center
    return interfacePressure * (r/shaftRadius);
}

function hubStress(r){

    if(r < hubInnerRadius || r > hubOuterRadius) return 0;

    // decay outward
    return interfacePressure * (hubOuterRadius - r) / (hubOuterRadius - hubInnerRadius);
}

/* -----------------------------
   Heatmap color
--------------------------------*/

function heatColor(value, max){

    let t = value / max;

    let r = Math.floor(255 * t);
    let g = Math.floor(255 * (1 - Math.abs(t - 0.5)*2));
    let b = Math.floor(255 * (1 - t));

    return `rgb(${r},${g},${b})`;
}

/* -----------------------------
   Draw Stress Field
--------------------------------*/

function drawStress(){

    const resolution = 1;
    const maxStress = interfacePressure;

    for(let x=0; x<canvas.width; x+=resolution){

        for(let y=0; y<canvas.height; y+=resolution){

            const dx = x-centerX;
            const dy = y-centerY;

            const r = Math.sqrt(dx*dx + dy*dy);

            let stress = 0;

            if(r <= shaftRadius){
                stress = shaftStress(r);
            }
            else if(r <= hubOuterRadius){
                stress = hubStress(r);
            }

            if(stress > 0){

                ctx.fillStyle = heatColor(stress, maxStress);
                ctx.fillRect(x,y,resolution,resolution);
            }
        }
    }
}

/* -----------------------------
   Draw Geometry
--------------------------------*/

function drawGeometry(){

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    // shaft
    ctx.beginPath();
    ctx.arc(centerX,centerY,shaftRadius,0,Math.PI*2);
    ctx.stroke();

    // hub outer
    ctx.beginPath();
    ctx.arc(centerX,centerY,hubOuterRadius,0,Math.PI*2);
    ctx.stroke();
}

drawStress();
drawGeometry();