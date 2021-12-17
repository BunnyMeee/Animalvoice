function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gZU-aF6Xh/model.json', modelReady);

}
function modelReady() {
    classifer.classify(gotResults);
}
function gotResults(error, results) {
    console.log('result');
}