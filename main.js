maskX = 0;
maskY = 0;

function preload() {
  mask = loadImage('https://i.postimg.cc/pLfgGM4w/Snake-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(400, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video,0,0,400,400);
    image(mask, maskX-20, maskY-35, 150, 150)
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
       maskX = results[0].pose.nose.x;
       maskY = results[0].pose.nose.y;
       console.log("mask x = " + maskX);
       console.log("mask y = " + maskY);
    }
}
