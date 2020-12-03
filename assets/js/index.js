

$(function() {
    webDevThumbs();
    for (let j = 6; j < 18; j++) {
    chaDesThumb(j);
    }
});

function webDevThumbs() {
    let jqxhr = $.getJSON( "https://takettel.github.io/assets/webDevThumbs.json", function(data) {
        console.log( "JSON object obtained" );
        })
        .fail(function() {
        console.log( "error" );
        })
        .done(function(data) {
        const webDevThumbs = data
        console.log(webDevThumbs);
        webDevThumb(webDevThumbs)
        });  
};

function webDevThumb(data) {
    console.log(data.length + " items found");
    for (let i = 0; i < 1; i++) {
    let thumb = $("<div class='card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' data-toggle='modal' data-target='.webdevDetails'>").text("Website: " + data.title);
    $("#webDevThumbnails").append(thumb)
}};

function chaDesThumb(j) {
    let thumb = $("<div class='card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' data-toggle='modal' data-target='.designDetails'>").text("Character " + j);
    $("#chaDesThumbnails").append(thumb)
};