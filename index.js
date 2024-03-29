
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


//-----------------
//МЕНЯЕМ ФОНОВЫЕ ИЗОБРАЖЕНИЯ В DIV1
//-----------------

$(function() {
  let images = ['img/1_1.jpg', 'img/1_2.jpg', 'img/1_3.jpg', 'img/1_4.jpg'];
  let currentImageIndex = 0;

  // Перемешиваем массив изображений
  images.sort(() => Math.random() - 0.5);

  setInterval(function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    $('#div1').css('background-image', `url(${images[currentImageIndex]})`);
  }, 5000);
});


//-----------------
//МЕНЯЕМ ЦВЕТ МАЛЕНЬКИХ КВАДРАТИКОВ В ДИВ4
//-----------------

$('#div41').click(function(){
 $('#div41').css({display:'none'});
 $('#div42').css({display:'flex'});
   $('#kn41').css('background-color', '#958585'); 
    $('#kn42').css('background-color', '#AD00FF');
});

$('#div42').click(function(){
 $('#div42').css({display:'none'});
 $('#div43').css({display:'flex'});
   $('#kn42').css('background-color', '#958585'); 
    $('#kn43').css('background-color', '#AD00FF');
});

$('#div43').click(function(){
 $('#div43').css({display:'none'});
 $('#div44').css({display:'flex'});
   $('#kn43').css('background-color', '#958585'); 
    $('#kn44').css('background-color', '#AD00FF');
});

$('#div44').click(function(){
 $('#div44').css({display:'none'});
 $('#div45').css({display:'flex'});
   $('#kn44').css('background-color', '#958585'); 
    $('#kn45').css('background-color', '#AD00FF');
});

$('#div45').click(function(){
 $('#div45').css({display:'none'});
 $('#div46').css({display:'flex'});
   $('#kn45').css('background-color', '#958585'); 
    $('#kn46').css('background-color', '#AD00FF');
});

$('#div46').click(function(){
 $('#div46').css({display:'none'});
 $('#div47').css({display:'flex'});
   $('#kn46').css('background-color', '#958585'); 
    $('#kn47').css('background-color', '#AD00FF');
});

$('#div47').click(function(){
 $('#div47').css({display:'none'});
 $('#div41').css({display:'flex'});
   $('#kn47').css('background-color', '#958585'); 
    $('#kn41').css('background-color', '#AD00FF');
});

//-----------------
//АВТОМАТИЧЕСКИ МЕНЯЕТ ДИВЫ
//-----------------

$('#div41').css('display', 'flex');
$('#kn41').css('background-color', '#AD00FF');

setInterval(function() {
  if ($('#div41').css('display') === 'flex') {
    $('#div41').css('display', 'none');
    $('#div42').css('display', 'flex');
    $('#kn41').css('background-color', '#958585'); 
    $('#kn42').css('background-color', '#AD00FF');  
      
  } else if ($('#div42').css('display') === 'flex') {
    $('#div42').css('display', 'none');
    $('#div43').css('display', 'flex');
    $('#kn42').css('background-color', '#958585'); 
    $('#kn43').css('background-color', '#AD00FF');  
      
      
  }else if ($('#div43').css('display') === 'flex') {
    $('#div43').css('display', 'none');
    $('#div44').css('display', 'flex');
    $('#kn43').css('background-color', '#958585'); 
    $('#kn44').css('background-color', '#AD00FF');  
      
  }else if ($('#div44').css('display') === 'flex') {
    $('#div44').css('display', 'none');
    $('#div45').css('display', 'flex');
    $('#kn44').css('background-color', '#958585'); 
    $('#kn45').css('background-color', '#AD00FF');  
      
  }else if ($('#div45').css('display') === 'flex') {
    $('#div45').css('display', 'none');
    $('#div46').css('display', 'flex');
    $('#kn45').css('background-color', '#958585'); 
    $('#kn46').css('background-color', '#AD00FF');  
      
  }else if ($('#div46').css('display') === 'flex') {
    $('#div46').css('display', 'none');
    $('#div47').css('display', 'flex');
    $('#kn46').css('background-color', '#958585'); 
    $('#kn47').css('background-color', '#AD00FF');  
      
  }else if ($('#div47').css('display') === 'flex') {
    $('#div47').css('display', 'none');
    $('#div41').css('display', 'flex');
    $('#kn47').css('background-color', '#958585'); 
    $('#kn41').css('background-color', '#AD00FF');  
  }
}, 3000);















