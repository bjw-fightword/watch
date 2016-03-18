var canvas=document.querySelector('#canvas1');
ctx=canvas.getContext('2d');//相当于画笔
ctx.save();
var drawClock=function(){
	var d=new Date();
	var h=d.getHours();
	var m=d.getMinutes();
	var s=d.getSeconds();
	ctx.clearRect(0,0,1000,600);
	//表
	ctx.save();
	ctx.translate(500,300);
	//外圆
	ctx.save();
	ctx.strokeStyle='#2af';00
	//阴影
	ctx.shadowOffsetX=0;
	ctx.shadowOffsetY=0;
	ctx.shadowBlur=10;
	ctx.shadowColor='red';

	ctx.lineWidth=8;
	ctx.beginPath();
	ctx.arc(0,0,200,0,Math.PI*2);
	ctx.stroke();
	ctx.restore();

	//时间刻度
	ctx.lineWidth=4;
	ctx.lineCap='round';
	for(var i=1;i<=60;i++){
		ctx.rotate(Math.PI/30);
		ctx.beginPath();
		if(i%5==0){
			ctx.lineWidth=6;
			ctx.moveTo(168,0);
			
		}else{
			ctx.lineWidth=4;
			ctx.moveTo(178,0);
		}
		ctx.lineTo(186,0);
		ctx.stroke();
	}


	//秒针
	ctx.save();
	ctx.beginPath();
	ctx.rotate(Math.PI/30*s);
	ctx.strokeStyle="red";
	ctx.lineWidth=4;
	ctx.lineCap='round';
	ctx.moveTo(0,25);
	ctx.lineTo(0,-100);
	ctx.moveTo(0,-116);
	ctx.lineTo(0,-130);
	ctx.stroke();
	//秒针外圆
	ctx.beginPath();
	ctx.moveTo(8,-108);
	ctx.arc(0,-108,8,0,Math.PI*2);
	ctx.stroke();
	ctx.restore();
	//分针
	ctx.save();
	ctx.beginPath();
	var r=360*((m*60+s)/3600)/180*Math.PI;
	ctx.rotate(r);
	ctx.lineWidth=6;
	ctx.lineCap='round';
	ctx.moveTo(0,10);
	ctx.lineTo(0,-80);
	ctx.stroke();
	ctx.restore();
	//时针
	ctx.save();
	ctx.beginPath();
	var r=360*((h*3600+m*60+s)/(12*3600))/180*Math.PI;
	ctx.rotate(r);
	ctx.lineWidth=8;
	ctx.lineCap='round';
	ctx.moveTo(0,8);
	ctx.lineTo(0,-60);
	ctx.stroke();
	ctx.restore();

	//中心圆
	ctx.beginPath();
	ctx.arc(0,0,8,0,Math.PI*2);
	ctx.fill();
	requestAnimationFrame(drawClock);
	ctx.restore();
}

requestAnimationFrame(drawClock);

