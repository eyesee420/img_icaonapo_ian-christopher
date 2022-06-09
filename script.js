var imgCount = 0;
var title;
var desc;
var imgContent = [
 ["imgOption1", "BOM", "Lorem ipsum dolor sit amet."],
 ["imgOption2", "DOM", "Nullam fringilla imperdiet eleifend"],
 ["imgOption3", "JavaScript", "Cras dapibus ipsum a consequat tincidunt"]
];
function previewImg(imgSrc){
    document.getElementById("imgViewer").src = imgSrc.src;
    var imgInput = imgSrc.id;
    console.log(imgInput);

    if(imgInput == imgContent[0][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[0][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[0][2];
    }
    else if(imgInput == imgContent[1][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[1][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[1][2];
    }
    else if(imgInput == imgContent[2][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[2][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[2][2];
    }
    else{
        title = document.getElementById('topicTtl').innerHTML = "Title";
        document.getElementById('topicDescrpt').innerHTML = "Description";
    }
}