
//ОТКРЫВАЮЩЕЕ И ЗАКРЫВАЮЩЕЕСЯ МЕНЮ

$(document).click(function(event){
if (!$(event.target).closest('#head_menu').length && !$(event.target).is('#head_menu')) {
$('#head_menu').css({right: "-100%", transition: "1s"});
}
});

$('#head').click(function(event){
event.stopPropagation();
$('#head_menu').css({right: "0%", transition: "1s"});
});

$('#head_menu_zakr').click(function(event){
event.stopPropagation();
$('#head_menu').css({right: "-100%", transition: "1s"});
});

//------------------

    //цвет наведения на закрывающееся меню

$('#head').hover(function(){
    $('.head123').css({'background-color': "#AD00FF", });
}, function(){
    $('.head123').css({'background-color': "white"});
});



$('#head_menu_zakr').hover(function(){
    $('#head_menu_zakr1').css({'background-color': "#AD00FF", transition: "all 0.3s"});
}, function(){
    $('#head_menu_zakr1').css({'background-color': "white", transition: "all 0.3s"});
});

$('#head_menu_zakr').hover(function(){
    $('#head_menu_zakr2').css({'background-color': "#AD00FF", transition: "all 0.3s"});
}, function(){
    $('#head_menu_zakr2').css({'background-color': "white", transition: "all 0.3s"});
});





