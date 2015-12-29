//1 - Get object
//2 - Set parameters/ properties
//3 - Action - (Make shape or line)

function makeCanvas() {
	var PI_TWO = Math.PI * 2;

	//1 - Get object
	var canvas1 = document.getElementById('canvas1');
	var ctx1 = canvas1.getContext('2d');

	//2 - Set parameters/ properties
	ctx1.font = '36pt Arial';
	ctx1.fillStyle = 'DeepSkyBlue';
	ctx1.strokeStyle = 'black';

	//3 - Action - (Make shape or line)	
	ctx1.fillText ('I Love HTML5', 45, 150);
	ctx1.strokeText('I Love HTML5!!!', 45, 150);


	////CANVA 2 -SQUARES///
	//1- Get Object
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d');

	//2 - Set parameters/ properties
	ctx2.fillStyle = '#ff0000';
	ctx2.strokeStyle = '#000000';
	ctx2.lineWidth = 10;

	//3- Make rect
	ctx2.fillRect(45, 5, 135, 135);
	ctx2.strokeRect(45, 5, 135, 135);

	ctx2.fillStyle = '#666666';
	ctx2.fillRect(200, 0, 135, 135);

	ctx2.fillStyle = '#666666';
	ctx2.fillRect(45, 150, 135, 135);

	//2 - Set parameters/ properties
	ctx2.fillStyle = '#ff0000';
	ctx2.fillRect(200, 150, 135, 135);
	ctx2.strokeRect(200, 150, 135, 135);


	////LINES//////////
	var canvas3 = document.getElementById('canvas3');
	var ctx3 = canvas3.getContext('2d');

	ctx3.strokeStyle = '#666666';
	ctx3.fillStyle = '#ff0000';
	ctx3.lineWidth = 5;

	ctx3.beginPath();
	ctx3.moveTo(100, 100);
	ctx3.lineTo(150, 200);
	ctx3.lineTo(200, 200);
	ctx3.lineTo(200, 290);
	ctx3.lineTo(290, 290);
	ctx3.lineTo(290, 100);
	ctx3.lineTo(100, 100);
	ctx3.stroke();
	ctx3.fill();
	ctx3.closePath();

	////CIRCLES//////////
	var canvas4 = document.getElementById('canvas4');
	var ctx4 = canvas4.getContext('2d');

	ctx4.strokeStyle = 'blue';
	ctx4.fillStyle = 'blue';
	
	ctx4.beginPath();
	ctx4.arc(200, 30, 25, 0, Math.PI * 2);
	ctx4.stroke();
	ctx4.fill();
	ctx4.closePath();

	ctx4.fillStyle = ctx4.strokeStyle = 'red';
	
	ctx4.beginPath();
	ctx4.arc(200, 100, 45, 0, Math.PI * 2);
	ctx4.fill();
	ctx4.stroke();

	ctx4.fillStyle = ctx4.strokeStyle = 'green';
	
	ctx4.beginPath();
	ctx4.arc(200, 220, 75, 0, Math.PI * 2);
	ctx4.fill();
	ctx4.stroke();


	ctx3.closePath();


	///ANIMATION////////
	var canvas5 = document.getElementById('canvas5');
	var ctx5 = canvas5.getContext('2d');

	var posX = 0;
	var posY = 0;
	setInterval(function(){
		posX += 1;
		posY += 1;

		ctx5.fillStyle = 'blue';
		ctx5.fillRect(0, 0, canvas5.width, canvas5.height);
		ctx5.fill();

		ctx5.fillStyle = "white";
		ctx5.beginPath();
		ctx5.arc(posX, 220, 75, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();

		ctx5.fillStyle = "red";
		ctx5.beginPath();
		ctx5.arc(150, posY, 55, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();

		ctx5.fillStyle = "yellow";
		ctx5.beginPath();
		ctx5.arc(350, posY, 55, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();
	}, 5);

}
