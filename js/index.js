/**
 * Created by linqiaojuan on 17-7-21.
 */
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var img=new Image();
var oWidth=canvas.width;
var oHeight=canvas.height;
var num=60;
var starts=[];
var lastTime;
var deltaTime;
var swithy=false;
window.onload=function(){
    img.src='./images/girl.jpg';
    startImg.src='./images/star.png';
    for(var i=0;i<num;i++){
        var obj=new starObj();
        starts.push(obj);
        starts[i].init();
    }
    lastTime=Date.now();
document.addEventListener('mousemove',mousemove,false);
    gameloop();
};
function drawBackground(){
    // 绘制背景
    ctx.fillStyle='#393550';
    ctx.fillRect(0,0,oWidth,oHeight);
}
//添加图片
function drawgirl(){
    ctx.drawImage(img,100,150,600,300);
}
//刷新画布
function gameloop(){
    window.requestAnimationFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    drawBackground();
    drawgirl();
    if(swithy){
        drawStarts();
    }
}
function mousemove(e){
if(e.offsetX||e.layerX){
var px=e.offsetX||e.layerX;
var py=e.offsetY||e.layerY;
if(px<100||px>700||py<150||py>450){
    swithy=false;
}else{
    swithy=true;
}
}
}



