// Imports
document.write('<script src="js/Input.js"></script>');
document.write('<script src="js/Utility.js"></script>');

// Context
var stage;
var width;
var height;

// Objects
var player;
var cpu;
var ball;

function run()
{
	stage = new createjs.Stage('canvas');
	width = stage.canvas.width;
	height = stage.canvas.height;

	Input.initialize(stage.canvas);
	Input.preventDefaultKeys(['up', 'down', 'left', 'right']);

	ball = new createjs.Shape();
	ball.graphics.beginFill('red').drawCircle(width * 0.5, height * 0.5, 10);
	stage.addChild(ball);

	player = new createjs.Shape();
	player.speed = 50;
	player.graphics.beginFill('black').drawRect(25, (height * 0.5) - (75), 15, 150);
	stage.addChild(player);

	cpu = new createjs.Shape();
	cpu.graphics.beginFill('black').drawRect(width - 25, (height * 0.5) - (75), 15, 150);
	stage.addChild(cpu);


	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener('tick', handleTick);

	function handleTick()
	{
		stage.update();
		if(Input.pressed('w up'))
		{
			player.y -= player.speed * getDelta();
		}
		else if(Input.pressed('s down'))
		{
			player.y += player.speed * getDelta();
		}
	}
}

function getDelta()
{
	return 10 / createjs.Ticker.getMeasuredFPS();
}