$(document).ready(function(){

//STICKY MENU
var nav = $('.menu');
var navTopPosition = nav.offset().top;

console.log(nav);
console.log(navTopPosition);

$(window).on('scroll', function(event){
  setSticky();
});

$(window).on('resize', function(){
   if(nav.hasClass('sticky')) {
     navTopPosition = $('nav').offset().top;
   } else {
     navTopPosition = $('.menu').offset().top;
   }

  // setSticky();
})

function setSticky(){
  var scrollTop = $(document).scrollTop();
  console.log(scrollTop);

  if (navTopPosition <= scrollTop) {
    nav.addClass('sticky');
  }else{
    nav.removeClass('sticky')
  }
}





});
