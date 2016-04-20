$(document).ready(function(){

//STICKY MENU
function setStickyMenu(){
  var menu = $('.menu'); //grid-container mainwidth
  var menuBg = $('.menu-bg');
  var menuOffset = menu.offset().top;


  $(window).on('scroll', function(event){
    checkSticky();
  });

  $(window).on('resize', function(){
    checkSticky();
  });

  function checkSticky(){
    var scrollTop = $(document).scrollTop();
      if (scrollTop >= menuBg.offset().top) {
        menu.addClass('sticky');
      }else{
        menu.removeClass('sticky')
      }
    }
  }

  setStickyMenu();

//Portfolio Gallery
//do zrobienia : plusy i filtry

var images = $('.portfolio-box').find('img');
console.log(images);

images.each(function(index, value){
  $(this).on('click', function(){
    var imageSource = $(this).attr('src');
    var bigImageSource = $(this).data("bigImageSource");


    var bigImage = $('<img>'); //create big image
    var fullScreen = $('<div>'); // create div that contains big image
    var closeButton = $('<div>'); //create button that exits full screen

    fullScreen.addClass('fullScreen').appendTo($('.gallery-base'));//add fullScreen class and attach to <body>
    bigImage.attr('src', bigImageSource).appendTo(fullScreen);//add img src and attach to <fullScreen>
    closeButton.addClass('closeButton').appendTo(fullScreen);//add closeButton and attach to <fullScreen>

    $('body').on('click', '.closeButton', function(){ //extis full screen
        fullScreen.remove();
    });

  });



});

//filters********************************
// var allIcon = $('.portfolio-filter-icon-1');
// var cityIcon = $('.portfolio-filter-icon-2');
// var waterIcon = $('.portfolio-filter-icon-3');
// var natureIcon = $('.portfolio-filter-icon-4');
// console.log(allIcon, cityIcon, waterIcon, natureIcon);
// var filterIcons = $('.portfolio-filter-icons').find('div');
//
//
//
// var tags = images.data('filter');
// console.log(tags);

// for (var i = 0; i < images.length; i++) {
//   images[i].dataset.filter;
//   console.log(images[i].dataset.filter);
// }


// for (var i = 0; i < filterIcons.length; i++) {
//
//   filterIcons[i].addEventListener('click', function(event){
//
//   var filterIconsClasses = filterIcons[i].classList;
//   console.log(filterIconsClasses);
//   images.each(function(index, value){
//     var imgFilters = $(this).data('filter');
//     console.log(imgFilters);
//     // if (imgFilters.indexOf(filterIconsClasses[1])
//   });
// });
//
//
// }
//
// filterIcons.each(function(index, value){
//   var filterIconsClasses = $(this).attr("class").split(' ');
//   console.log(filterIconsClasses);
//   filterIcons.
//   $(this).on('click', function(){
//     console.log("dziala");
//
//
//
//   });

//});end of filterIcons event




});
