noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage("https://www.pngarts.com/files/10/Clown-Nose-PNG-Pic.png");
}


function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


    function modelLoaded(){
        console.log('poseNet is initialized');
    }



function take_snapshot(){
    save('myimage.png');
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        console.log("nose X = "+ results[0].pose.nose.x);
        console.log("nose Y = "+ results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw(){
    image(video, 0, 0, 300, 299);
    image(clown_nose, noseX, noseY, 30, 30);
}