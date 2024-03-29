
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
    $('.head123').css({'background-color': "#ff3838", });
}, function(){
    $('.head123').css({'background-color': "white"});
});



$('#head_menu_zakr').hover(function(){
    $('#head_menu_zakr1').css({'background-color': "#ff3838", transition: "all 0.3s"});
}, function(){
    $('#head_menu_zakr1').css({'background-color': "white", transition: "all 0.3s"});
});

$('#head_menu_zakr').hover(function(){
    $('#head_menu_zakr2').css({'background-color': "#ff3838", transition: "all 0.3s"});
}, function(){
    $('#head_menu_zakr2').css({'background-color': "white", transition: "all 0.3s"});
});



//---------------
//МЕНЯЕЬ DIV41 НА СЛЕД ПОДПИСИ
//---------------
$('#div41').click(function(){
    $('#div41').css({display: 'none'});
 $('#div42').css({display:'flex'});
});

$('#div42').click(function(){
    $('#div42').css({display: 'none'});
 $('#div43').css({display:'flex'});
});

$('#div43').click(function(){
    $('#div43').css({display: 'none'});
 $('#div44').css({display:'flex'});
});

$('#div44').click(function(){
    $('#div44').css({display: 'none'});
 $('#div45').css({display:'flex'});
});

$('#div45').click(function(){
    $('#div45').css({display: 'none'});
 $('#div46').css({display:'flex'});
});

$('#div46').click(function(){
    $('#div46').css({display: 'none'});
 $('#div47').css({display:'flex'});
});

$('#div47').click(function(){
    $('#div47').css({display: 'none'});
 $('#div41').css({display:'flex'});
});

// Функция для автоматического переключения каждые 5 секунд
function autoSwitch() {
    setInterval(function() {
        var currentVisible = $('#div41, #div42, #div43, #div44, #div45, #div46, #div47').filter(':visible');
        var nextElement = currentVisible.next().length ? currentVisible.next() : $('#div41');
        
        currentVisible.fadeOut(300, function() {
            nextElement.fadeIn(300);
        });
    }, 8000);
}

autoSwitch(); // Запуск функции автоматического переключения

// Добавление плавного эффекта при переключении

$('#div41, #div42, #div43, #div44, #div45, #div46, #div47').click(function(){
    $(this).fadeOut(1000, function() {
        $(this).next().fadeIn(1000);
    });
});














