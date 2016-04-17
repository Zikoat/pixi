// this is the core of the game
// this is soon to be the setup of the game
var Container = PIXI.Container,
	autoDetectRenderer = PIXI.autoDetectRenderer,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;

var stage = new Container(),
	renderer = autoDetectRenderer(256, 256, {antialias: false}),
	graphics = new PIXI.Graphics();
	// planet = new PIXI.Graphics();
	
///////////////////////////////////////////////////
// document setup
document.body.appendChild(renderer.view);

//renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = 0x7d1b91;
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";

renderer.autoResize = true;
renderer.resize(window.innerWidth,window.innerHeight);
///////////////////////////////////////////////////


//************************************
var state, player, controlState;
// state [play]
// controlState ["move", "rotate", "bounce"]
// player is a Sprite
// planet is anchor, is a PIXI.Graphics object
//************************************

loader
	.add([
		"images/smiley-face.png",
		//"images/razor-eye.gif",
		"images/space.png"
	])
	.load(setup);


function setup() {
	
	/*enemy = new Sprite(
		resources["images/razor-eye.gif"].texture
	);*/
	
	player = new Sprite(
		resources["images/smiley-face.png"].texture
	);
			
	background = new Sprite(resources["images/space.png"].texture);
	
	stage.addChild(background);
	stage.addChild(player);
	stage.addChild(graphics);
	
	
	// player.x = 30;
	// stage.addChild(enemy);
	// enemy.visible = false;
	// player.visible = true;
	playSetup();
	state = play;
	// state gets executed
	
	// rotate: orbit
	// "bounce" off walls
	controlState = "move";
	
	gameLoop();
}

function gameLoop() {
	requestAnimationFrame(gameLoop);
	graphics.clear();
	
	state();
	
	renderer.render(stage);
	
}
