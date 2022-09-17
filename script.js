nose_x="";
nose_y="";
function preload() {
    mus= loadImage("m.png")
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400)
   video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video,0,0,400,400);
   image(mus,nose_x -50,nose_y-40,100,100)
   
}

function takeSnapshot(){
    save("img.jpeg");
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
   
    if(results.length >0)
    {
        
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose_x = "+ nose_x)
        console.log("nose_y = "+ nose_y)
    }
    
}