$(function(){
    for (let i = 0; i < 6; i++) {
    wedDevThumb(i);
    }
    for (let j = 6; j < 18; j++) {
    chaDesThumb(j);
    }
});

function wedDevThumb(i) {
    let thumb = $("<div class='card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' data-toggle='modal' data-target='.webdevDetails'>").text("Website " + i);
    $("#webDevThumbnails").append(thumb)
};

function chaDesThumb(j) {
    let thumb = $("<div class='card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' data-toggle='modal' data-target='.designDetails'>").text("Character " + j);
    $("#chaDesThumbnails").append(thumb)
};