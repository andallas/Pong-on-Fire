// Context
var canvas;
var stage;

// BG Images
var bg;
var main;

// Button images
var startButton;
var creditsButton;

// Credits screen
var credits;

// Game
var player;
var ball;
var cpu;
var win;
var lose;

// Score
var playerScore;
var cpuScore;

// Movement
var cpuSpeed = 6;
var xSpeed = 5;
var ySpeed = 5;

// Clock
var ticker = new Object;

// Preloader
var preloader;
var manifest;
var totalLoaded = 0;

var TitleView = new Container();

function run()
{
	canvas = document.getElementById('canvas');
	stage = new Stage(canvas);

	stage.mouseEventsEnabled = true;

	manifest = [
		{src:'img/backgrounds/bg.png', id:'bg'}
	];

	preloader = new PreloadJS();
	preloader.installPlugin(SoundJS);
	preloader.onProgress = handleProgress;
	preloader.onComplete = handleComplete;
	preloader.onFileLoad = handleFileLoad;
	preloader.loadManifest(manifest);

	Ticker.setFPS(60);
	Ticker.addListener(stage);
}