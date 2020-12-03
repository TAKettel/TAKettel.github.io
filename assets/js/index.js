

$(function() {
    webDevThumbs();
    for (let j = 6; j < 18; j++) {
    chaDesThumb(j);
    }
});

function webDevThumbs() {
let requestURL = 'https://takettel.github.io/assets/webDevThumbs.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseText = 'json';
request.send();
request.onload = function() {
    let webDevThumbs = request.response;
    webDevThumbs = JSON.stringify(webDevThumbs);
    webDevThumbs = JSON.parse(webDevThumbs);
    console.log(webDevThumbs[1].image)
    for (let i = 0; i < webDevThumbs.length; i++) {
        webDevThumb(i);
        }    

}};


function webDevThumb(i) {
    let thumb = $("<div class='card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' data-toggle='modal' data-target='.webdevDetails'>").text("Website " + i);
    $("#webDevThumbnails").append(thumb)
};

function chaDesThumb(j) {
    let thumb = $("<div class='card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' data-toggle='modal' data-target='.designDetails'>").text("Character " + j);
    $("#chaDesThumbnails").append(thumb)
};