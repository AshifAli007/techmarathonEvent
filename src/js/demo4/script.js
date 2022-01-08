$('.close').on("click", function(){
    $('.details').css("height", "0");
});

$('.gallery__item-link').on("click", function(e){
    const event = $(e.target).attr('name');
    $('.eventName').text(event);
    console.log(event);

    $('.details').css("height", "75vh");

})