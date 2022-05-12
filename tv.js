Status="";
tv_image="";
object_detector="";

function preload(){
    tv_image=loadImage("TV.jpeg");
}

function setup(){
    canvas=createCanvas(640,350);
    canvas.position(315,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    Status=true;
    object_detector.detect(tv_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(tv_image,0,0,640,350);
}