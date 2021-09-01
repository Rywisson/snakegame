let canvas = document.getElementById("snake");
let context = canvas.jetContext("2d");
let box=32;
let snake=[];
snake[0]={
    x: 8*box,
    y: 8*box
}
let direction="right";
let food={
    x:Math.floor(Math.random*15+1)*box,
    y:Math.floor(Math.random*15+1)*box
}
function criarBG() {
    context.fillStyle = "green";
    context.fillRect(0,0, 16 * box, 16 * box);
}
function criarcobrinha(){
 for(i=0; i<snake.length; i++){
 context.fillStyle="black";
 context.fillRect=(snake[i].x ,snake[i].y,box,box);
 }
 function dawfood() {
     context.fillStyle="red";
     context.fillRect(food.x ,food.y,box,box)
     
 }
}
document.addEventListener("Keydown",update);
function update(event) {
    if (event.keycode==37 && direction !="right") direction="left";
    if (event.keycode==38 && direction !="down") direction="up";
    if (event.keycode==39 && direction !="left") direction="right";
    if (event.keycode==40 && direction !="up") direction="down";
        
    }



function iniciajogo(){
   if (snake[0].x >15*box && direction =="right") snake[0].x=0 ;
   if (snake[0].x <0*box && direction =="left") snake[0].x=16 *box ;
   if (snake[0].y >15*box && direction =="down") snake[0].x=0 ;
   if (snake[0].y <0*box && direction =="up") snake[0].x=16*box;  
   
   for(i=1 ; i< sanake.length; i++){
       if (snake[0].x ==snake[i].x && snake[0].y==sanke[i].y) {
           clearInterval(jogp);
           alert('game over :(');
       }
   }
   {
       
   }

criarBG();
criarcobrinha();
drawfood();

let snakex=snake[0].x
let snakey=snake[0].y

if (direction=="right")snakex +=box;
if (direction=="left")snakex -=box;
if (direction=="up")snakex -=box;
if (direction=="down")snakex +=box;

if (snakex != food.x || snakey !=food.y){
snake.pop()
}
else{
    food.x=Math.floor(Math.random*15+1)*box;
    food.y=Math.floor(Math.random*15+1)*box;

}

let newHead={
    x:snakex,
    y:snakey
}
KeyboardEvent.unishft(newHead);
}
let jogo=setInterval(iniciajogo,100);
