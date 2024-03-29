//StaticBg.js
//Generates tv static, draws it as a background
//Not an actual background, just a canvas element the size of the page
//Using dataURL's to set the background image worked in chrome but not firefox (flickered like crazy)
//getCSSCanvasContext was removed from chrome: Thanks Google
//IE / Safari untested, christ I have to *use* this computer
//The great thing about standards is everyone has their own.
//az23

"use strict"; //that behaviour is unasseptable
var c;
var ctx;

document.onLoad= staticBg();
//init
function staticBg(){
        c =  document.createElement('canvas');
        c.id  = "screen";
        c.style.position ="absolute";
        c.style.left = "0%";
        c.style.top = "0%";
        c.style.width  = "100%";
        c.style.height = "100%";
        c.style.zIndex="-1";
        document.body.appendChild(c);
        ctx = c.getContext("2d");
        drawScreen(0);

}
function drawScreen(){
        ctx.save();
        let imgData = ctx.createImageData(320,240);
        for (let i=0;i<imgData.data.length;i += 4){
                let t = Math.floor(Math.random() * 256);
                imgData.data[i+0]=t;
                imgData.data[i+1]=t;
                imgData.data[i+2]=t;
                imgData.data[i+3]=255;
        }
        ctx.putImageData(imgData, 0, 0, 0, 0,c.width,c.height);
        ctx.restore();
        setTimeout(drawScreen,40); // cause PAL > NTSC
}