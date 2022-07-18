song1=""
song2=""

song1_status="";
song2_status="";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

score_rw=0;
score_lw=0;

function preload() {
song1=loadSound("mashup.mp3");
song2=loadSound("ami.mp3");
}



function setup() {
    
    canvas= createCanvas(500,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, DJisReady);
    poseNet.on("pose", gotPoses);
}
function DJisReady() {

    console.log("DJisReady");
    
}

function draw(){

    image(video,0,0,500,400);
    song1_status= song1.isPlaying();
    song2_status= song2.isPlaying();
    fill("red");
    stroke("black");
    if (score_rw>0.2) {

        circle(rightWristX, rightWristY, 20);
        song2.stop();

        if (song1_status==false) {

            song1.play();
            document.getElementById("name").innerHTML="Indian Mashup"
            
        }
        
    }
    if (score_lw>0.2) {

        circle(leftWristX, leftWristY, 20);
        song1.stop();

        if (song2_status==false) {

            song2.play();
            document.getElementById("name").innerHTML="Mere Dholna"
            
        }
        
    }
    
}


function play() {

    song1.play("mashup.mp3");
   
    song1.setVolume(1);
    song1.rate(1);
        
    }
    
    

function gotPoses(results) {

    if (results.length>0) {

        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        


        
    }
    
}