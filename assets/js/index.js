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
        'class': 'card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 thumbnail webDev',
        'id':  i,
        'data-toggle': 'modal',
        'data-target' : '.webdevDetails',
        }).text("Website: " + data[i].title);
    $("#webDevThumbnails").append(thumb)
}};

function chaDesThumb(data) {
    console.log(data.length + " items found");
    for (let j = 0; j < data.length; j++) {
    let thumb = $('<div/>', {
        'class': 'card col-6 col-md-4 col-lg-3 col-xl-2 thumbnail chaDes',
        'id':  j,
        'data-toggle': 'modal',
        'data-target' : '.chaDesDetails',
        }).html("<img src='" + data[j].thumbnail + "' alt ='" + data[j].title + "' class='thumbImg'>");
    $("#chaDesThumbnails").append(thumb)
    };
    thumbButt();
};

function thumbButt() {
    $(document).on('contextmenu', 'img', function() {
        return false;
    })
    $(".thumbnail").on("click", function() {
        let id = this.id;
        if ($(this).hasClass("webDev")) {
        $.getJSON( "https://takettel.github.io/assets/webDevThumbs.json", function(data) {
        }).done(function(data) {    
            $(".webdevDetails").find(".titleBox").text(data[id].title);
            $(".webdevDetails").find(".previewImage").html("<img src='" + data[id].image + "' alt ='" + data[id].title + "' class='fullImage'>");
            $(".webdevDetails").find(".descriptBox").text(data[id].description);
            })
        } else {
        $.getJSON( "https://takettel.github.io/assets/chaDesThumbs.json", function(data) {
        }).done(function(data) {    
            $(".chaDesDetails").find(".titleBox").text(data[id].title);
            $(".chaDesDetails").find(".previewImage").html("<img src='" + data[id].image + "' alt ='" + data[id].title + "' class='fullImage'>");
            $(".chaDesDetails").find(".descriptBox").text(data[id].description);
            })
        }
    })
}