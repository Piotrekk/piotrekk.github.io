var ctx = document.getElementById("canvas").getContext("2d");
	canvas.width = "500";
	canvas.height = "500";
	
	
function guides(ctx){
	ctx.lineWidth = 1;
	ctx.strokeStyle = "black";

	ctx.beginPath();
	//First x line
	ctx.moveTo(166.5, 20);
	ctx.lineTo(166.5, 480);
	//Second x line
	ctx.moveTo(332.5, 20);
	ctx.lineTo(332.5, 480);
	//First y line
	ctx.moveTo(20, 166.5);
	ctx.lineTo(480, 166.5)
	//Second y line
	ctx.moveTo(20, 332.5);
	ctx.lineTo(480, 332.5);
	ctx.stroke();
};
guides(ctx);

window.onclick = function(e){
	var location = {
		x: e.pageX,
		y: e.pageY
	};
	if((location.x > 380 && location.x < 510) && (location.y > 120 && location.y < 250)){
		console.log(location.x, location.y);
		console.log(true);
		
		new Square(20, 20, 150, 150, 150, 20, 20, 150);
		new Circle(250, 85);
	}else {
		console.log(false);
		console.log(location.x, location.y);
	}
};

var Circle = function(x, y){
	ctx.beginPath();
	ctx.arc(x, y, 65, 0, 2*Math.PI);
	ctx.stroke();
};

var Square = function(leftFirstXposition, leftFirstYposition, leftSecondXposition, leftSecondYposition, rightFirstXposition, rightFirstYposition, rightSecondXposition, rightSecondYposition){
	ctx.beginPath();
	ctx.moveTo(leftFirstXposition, leftFirstYposition);
	ctx.lineTo(leftSecondXposition, leftSecondYposition);
	ctx.moveTo(rightFirstXposition, rightFirstYposition);
	ctx.lineTo(rightSecondXposition, rightSecondYposition);
	ctx.stroke();
};

/*ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(20,20,130,130);*/

/*ctx.beginPath();
ctx.arc(85,85,65,0,2*Math.PI);
ctx.stroke();*/

/*ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(150, 150);
ctx.moveTo(150, 20);
ctx.lineTo(20, 150);
ctx.stroke();*/
