/**
 * Created by linqiaojuan on 17-7-24.
 */
var startImg=new Image();
//创建类

var starObj=function(){
    this.x;
    this.y;
    this.updnum;
    this.timer;
    this.xSpd;
    this.ySpd;
};
starObj.prototype.init=function(){
    this.x=Math.random()*600+100;
    this.y=Math.random()*300+150;
    this.updnum=Math.floor(Math.random()*7);
    this.timer=0;
    this.xSpd=Math.random()*3-1.5;
    this.ySpd=Math.random()*3-1.5;
};
starObj.prototype.update=function(){
    this.x+=this.xSpd*deltaTime*0.004;
    this.y+=this.ySpd*deltaTime*0.004;
    this.timer+=deltaTime;
    //重生判断
    if(this.x<100||this.x>693||this.y<150||this.y>443){
        this.init();
        return;
    }
    if( this.timer>50){
        this.updnum+=1;
        this.updnum%=7;
        this.timer=0;
    }
};
starObj.prototype.draw=function(){
    ctx.drawImage(startImg,7*(this.updnum),0,7,7,this.x,this.y,7,7);

};
function drawStarts(){
    for(var i=0;i<num;i++){
        var j=Math.ceil(i/10);
        starts[i].draw(j);
        starts[i].update();
    }
}
