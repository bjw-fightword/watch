var canvas=document.querySelector('#canvas1');
ctx=canvas.getContext('2d');//相当于画笔
ctx.save();
var W=document.documentElement.clientWidth;
if(W>=768){
	canvas.width = 1000;
	canvas.height = 600;
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
	ctx.strokeStyle='#ff6700';
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
	ctx.strokeStyle="#ff6700";
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
	ctx.strokeStyle="#1a1a1a";
	ctx.stroke();
	ctx.restore();

	//中心圆
	ctx.beginPath();
	ctx.arc(0,0,8,0,Math.PI*2);
	ctx.fill();
	requestAnimationFrame(drawClock);
	ctx.restore();
	}
}else{
	var drawClock=function(){
	var d=new Date();
	var h=d.getHours();
	var m=d.getMinutes();
	var s=d.getSeconds();
	ctx.clearRect(0,0,300,300);
	//表
	ctx.save();
	ctx.translate(150,150);
	//外圆
	ctx.save();
	ctx.strokeStyle='#ff6700';
	//阴影
	ctx.shadowOffsetX=0;
	ctx.shadowOffsetY=0;
	ctx.shadowBlur=2.5;
	ctx.shadowColor='red';

	ctx.lineWidth=4;
	ctx.beginPath();
	ctx.arc(0,0,100,0,Math.PI*2);
	ctx.stroke();
	ctx.restore();

	//时间刻度
	ctx.lineWidth=2;
	ctx.lineCap='round';
	for(var i=1;i<=60;i++){
		ctx.rotate(Math.PI/30);
		ctx.beginPath();
		if(i%5==0){
			ctx.lineWidth=3;
			ctx.moveTo(84,0);
			
		}else{
			ctx.lineWidth=2;
			ctx.moveTo(89,0);
		}
		ctx.lineTo(93,0);
		ctx.stroke();
	}


	//秒针
	ctx.save();
	ctx.beginPath();
	ctx.rotate(Math.PI/30*s);
	ctx.strokeStyle="red";
	ctx.lineWidth=4;
	ctx.lineCap='round';
	ctx.moveTo(0,13.5);
	ctx.lineTo(0,-50);
	ctx.moveTo(0,-58);
	ctx.lineTo(0,-65);
	ctx.stroke();
	//秒针外圆
	ctx.beginPath();
	ctx.moveTo(4,-54);
	ctx.arc(0,-54,4,0,Math.PI*2);
	ctx.stroke();
	ctx.restore();
	//分针
	ctx.save();
	ctx.beginPath();
	var r=360*((m*60+s)/3600)/180*Math.PI;
	ctx.rotate(r);
	ctx.lineWidth=3;
	ctx.lineCap='round';
	ctx.moveTo(0,5);
	ctx.lineTo(0,-40);
	ctx.strokeStyle="#ff6700";
	ctx.stroke();
	ctx.restore();
	//时针
	ctx.save();
	ctx.beginPath();
	var r=360*((h*3600+m*60+s)/(12*3600))/180*Math.PI;
	ctx.rotate(r);
	ctx.lineWidth=4;
	ctx.lineCap='round';
	ctx.moveTo(0,4);
	ctx.lineTo(0,-30);
	ctx.strokeStyle="#1a1a1a";
	ctx.stroke();
	ctx.restore();

	//中心圆
	ctx.beginPath();
	ctx.arc(0,0,4,0,Math.PI*2);
	ctx.fill();
	requestAnimationFrame(drawClock);
	ctx.restore();
	}
}


requestAnimationFrame(drawClock);

