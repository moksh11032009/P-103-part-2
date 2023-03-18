Webcam.set({
   width:350,
   height:300,
   image_format : 'png',
   png_quality:90
});

    camera = document.getElementById("camera");

webcam.attach( '#camera' );

function take_snapshot()
{
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        })
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4BLNLWuOo/.json',modelLoaded);
+
function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function getResult(error, results) {
if (error) {
    console.error(error);
} else{
    console.log(results);
    document.getElementById("result_object_name").innerHTMl = result[0].label;
    document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
}
}