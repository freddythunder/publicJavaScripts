/* include this in a file, or drop and execute in console to put a whiteboard over whatever page you are on */
var canvasElement=document.createElement('canvas');canvasElement.style.border='1px #F00 solid';canvasElement.id='can';document.body.append(canvasElement);
var canvas,ctx,coord={x:0,y:0},paint=false;canvas=document.getElementById('can');canvas.style.position='fixed';canvas.style.top=0;ctx=canvas.getContext('2d');
var resize=()=>{ctx.canvas.width=window.innerWidth;ctx.canvas.height=window.innerHeight;};
var getPosition=(e)=>{coord.x=event.clientX-canvas.offsetLeft;coord.y=event.clientY-canvas.offsetTop;};
var startPainting=(e)=>{paint=true;getPosition(e)};var stopPainting=()=>{paint=false;};var clear=()=>{ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)};
var sketch=(e)=>{if(!paint){return;}ctx.beginPath();ctx.lineWidth=5;ctx.lineCap='round';
ctx.strokeStyle='#C00';ctx.moveTo(coord.x,coord.y);getPosition(e);ctx.lineTo(coord.x,coord.y);ctx.stroke();};resize();
document.addEventListener('mousedown',startPainting);document.addEventListener('mouseup',stopPainting);document.addEventListener('mousemove',sketch);document.addEventListener('resize',resize);
