//
//        //закрывающее меню
//
//let head = document.getElementById('head');
//let head_menu = document.getElementById('head_menu');
//
//
//head.addEventListener('click', function Menu(){
// head_menu.classList.toggle("head_menu_yes");    
//});
//
//
//window.addEventListener('click', e=>{
//    const target=e.target;
//    if(!target.closest('#head_menu') && !target.closest('#head')){
//       head_menu.classList.remove(("head_menu_yes")); 
//    }
//})
//
//     //фуутер переход по иконкам
////миша
//let ikon11= document.querySelector('#ikon11');
//let ikon12= document.querySelector('#ikon12');
//let ikon13= document.querySelector('#ikon13');
////лена
//let ikon21= document.querySelector('#ikon21');
//let ikon22= document.querySelector('#ikon22');
//let ikon23= document.querySelector('#ikon23');
//
////миша
//ikon11.addEventListener('click', function(){
//   window.location.href='https://vk.com/xxxxbersxxxx';
//});
//ikon12.addEventListener('click', function(){
//   window.location.href='https://t.me/+79996062616';
//});
//ikon13.addEventListener('click', function(){
//   window.location.href='https://wa.me/79996062616';
//});
//
////лена
//ikon21.addEventListener('click', function(){
//   window.location.href='https://vk.com/id222603101';
//});
//ikon22.addEventListener('click', function(){
//   window.location.href='https://t.me/+79038741898';
//});
//ikon23.addEventListener('click', function(){
//   window.location.href='https://wa.me/79038741898';
//});

let header1=document.querySelector("#header1");

let hed1=document.querySelector('#hed1');

let hed2=document.querySelector('#hed2');

let hed3=document.querySelector('#hed3');

header1.addEventListener('click', function main(){
 header1.classList.toggle("activ");
 hed1.classList.toggle('no');   
  hed2.classList.toggle('no');
hed3.classList.toggle('no'); 
})


