$(document).ready(function(){

//STICKY MENU
var nav = $('.menu');
var navTopPosition = nav.offset().top;

// console.log(nav);
// console.log(navTopPosition);

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
  // console.log(scrollTop);

  if (navTopPosition <= scrollTop) {
    nav.addClass('sticky');
  }else{
    nav.removeClass('sticky')
  }
}

//Portfolio Gallery

var images = $('.portfolio-box').find('img');
console.log(images);

images.each(function(index, value){
  $(this).on('click', function(){
    var imageSource = $(this).attr('src');
        console.log(imageSource);
    var bigImageSource = $(this).data("bigImageSource");
        console.log(bigImageSource);

    var bigImage = $('<img>'); //create big image
    var fullScreen = $('<div>'); // create div that contains big image
    var closeButton = $('<div>'); //create button that exits full screen

    fullScreen.addClass('fullScreen').appendTo($('.gallery-base'));//add fullScreen class and attach to <body>
    bigImage.attr('src', bigImageSource).appendTo(fullScreen);//add img src and attach to <fullScreen>
    closeButton.addClass('closeButton').appendTo(fullScreen);//add closeButton and attach to <fullScreen>
    console.log(closeButton);

    $('body').on('click', '.closeButton', function(){ //extis full screen
        fullScreen.remove();
    });

  });

});



});
