function preload() {
    classifier=ml5.imageClassifier("DoodleNet");
}
function setup() {
    canvas=createCanvas(280,280);
    canvas.position(520,350);
    background("white");
    synth=window.speechSynthesis;
    canvas.mouseReleased(classifyr);
}
function classifyr() {

}