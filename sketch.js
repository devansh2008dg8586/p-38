

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var distanceX=0
var database;
var track
var form, player,players, game;
var p1,p2
var garden;
function preload()
{
	track=loadImage("images.png")
}

function setup() {
	canvas = createCanvas(displayWidth-20,displayHeight-30);


	database = firebase.database();
	//Create the Bodies Here	.

    game = new Game();
  game.getState();
  game.start();
}


function draw() {
  background("blue");
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
  

}


