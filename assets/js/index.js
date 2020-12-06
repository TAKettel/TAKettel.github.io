$(function() {
    webDevThumbs();
    chaDesThumbs();
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

function chaDesThumbs() {
    let jqxhr = $.getJSON( "https://takettel.github.io/assets/chaDesThumbs.json", function(data) {
        console.log( "JSON object obtained" );
        })
        .fail(function() {
        console.log( "error" );
        })
        .done(function(data) {
        const chaDesThumbs = data
        console.log(chaDesThumbs);
        chaDesThumb(chaDesThumbs)
        });
};


function webDevThumb(data) {
    console.log(data.length + " items found");
    for (let i = 0; i < data.length; i++) {
    let thumb = $('<div/>', {
        'class': 'card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 wdThumbnail',
        'id':  data[i].id,
        'data-toggle': 'modal',
        'data-target' : '.webdevDetails',
        }).text("Website: " + data[i].title);
    $("#webDevThumbnails").append(thumb)
}};

function chaDesThumb(data) {
    console.log(data.length + " items found");
    for (let j = 0; j < data.length; j++) {
    let thumb = $('<div/>', {
        'class': 'card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 cdThumbnail',
        'id':  data[j].id,
        'data-toggle': 'modal',
        'data-target' : '.chaDesDetails',
        }).text("Character: " + data[j].title);
    $("#chaDesThumbnails").append(thumb)
}};