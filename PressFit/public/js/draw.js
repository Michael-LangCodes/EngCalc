import {pinHoopStress, hubHoopStress} from "./calculations/stress.js"
import {heatColor} from "./heatmap.js"

export function drawStress(ctx, params){
    const resolution = 1;
    const maxStress = interfacePressure;

    console.log('This Live Updates')
    
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
