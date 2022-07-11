song1=""


function preload() {
song1=loadSound("mashup.mp3");
}

function setup() {
    
    canvas= createCanvas(500,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){

    image(video,0,0,500,400);
    
}
function play() {

    song3.play("mashup.mp3");
    
}