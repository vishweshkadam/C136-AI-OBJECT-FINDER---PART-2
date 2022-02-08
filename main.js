satus=""


function preload(){
  
}
function setup(){
    canvas=createCanvas(400,300)
     canvas.position(480,280)
     video=createCapture(VIDEO)
     video.hide()
     Object_Detect=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("staus").innerHTML="Status detecting object"
document.getElementById("name").value
}
function draw(){
image(video,0,0,400,300)
}
function modelloaded(){
    console.log("model loaded")
    satus=true;
    
}