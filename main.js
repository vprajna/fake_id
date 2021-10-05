img = "";
status = "";
var catx,caty,cath,catw,catp;
var catname = "";
var dogx,dogy,dogh,dogw,dogp;
var dogname = "";
function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded !");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results) {
    if(error){
console.log(error);
    }
    catx=results[0].x;
    caty=results[0].y;
    cath=results[0].height;
    catw=results[0].width;
    catp=results[0].confidence;
    catname=results[0].label;

    dogx=results[1].x;
    dogy=results[1].y;
    dogh=results[1].height;
    dogw=results[1].width;
    dogp=results[1].confidence;
    dogname=results[1].label;
    console.log(results);
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("FF0000");
    text(dogname+" "+dogp,dogx+10,dogy+10);
    noFill();
    stroke("FF0000");
    rect(dogx,dogy,dogw,dogh);

    fill("grey");
    text(catname+" "+catp,catx+10,caty+10);
    noFill();
    stroke("grey");
    rect(catx-80,caty,catw,cath);
}
