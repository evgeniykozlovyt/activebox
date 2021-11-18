$('.social-media-item-team__icon').mouseenter(function () {
    let img = $(this).children('img');
    let new_img = $(img).data("img-new");

    $(this).css("background-color", "#000");
    img.attr("src", new_img);
});

$('.social-media-item-team__icon').mouseleave(function () {
    let img = $(this).children('img');
    let new_img = $(img).data("img");

    $(this).css("background-color", "#fff");
    img.attr("src", new_img);
});