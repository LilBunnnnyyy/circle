var nosex=0;
var nosey=0;
function preload(){
    a=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    c=createCapture(VIDEO);
    c.size(400,300);
    c.hide();
    e=ml5.poseNet(c,f);
    e.on('pose',g);
}
function draw(){
image(c,0,0,400,300);
//image(a,nosex,nosey,40,40);
fill("red");
stroke("black");
circle(nosex,nosey,30);
}
function f(){
    console.log("poseNet is loaded");
}
function g(answer){
    if(answer.length>0){
console.log(answer);
nosex=answer[0].pose.nose.x;
nosey=answer[0].pose.nose.y;
    }
}
function b(){
    save("clown.png"); 
}