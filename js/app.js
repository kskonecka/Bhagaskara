$(document).ready(function(){

//MENU scroll

function scrollMenu(){
  var menuLinks = $("nav").find("a");
  console.log(menuLinks);

    menuLinks.on("click", function(){
      event.preventDefault();
      var menuLinksHref = $(this).attr('href');
      console.log(menuLinksHref);

      $("html, body").animate({
        scrollTop: $(menuLinksHref).offset().top
      },1000);
    });

  var hexLinks = $('.hex').find('a');
  console.log(hexLinks);
    hexLinks.on("click", function(){
      event.preventDefault();
      var hexLinksHref = $(this).attr('href');
      console.log(hexLinksHref);

      $("html, body").animate({
        scrollTop: $(hexLinksHref).offset().top
      },1000);
    });
};
scrollMenu();

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
  });//end of images.this.event
}); //end of images.each function


//******************************************************************************************
//opacity
function progressBar(){

var redford = $('.redford'); //definiuje zmienne elementow o klasie redford, newman i nolte
var newman = $('.newman');
var nolte = $('.nolte');
var opacity = redford.css('opacity'); //to jest to opacity z css-a

var progressBar1 = $("#bar1"); //to sa spany progres barow
var progressBar2 = $("#bar2");
var progressBar3 = $("#bar3");
var progressBar4 = $("#bar4");

redford.on('mouseenter', function(){ //to zmienia opacity na ruch myszy
  redford.css('opacity', 1); //opacity 1
  newman.css('opacity', opacity); //a pozostale elementy wracaja do ccs-owego opacity
  nolte.css('opacity', opacity);
});

newman.on('mouseenter', function (){
  newman.css('opacity', 1);
  redford.css('opacity', opacity);
  nolte.css('opacity', opacity);
});

nolte.on('mouseenter', function (){//to zmienia opacity na ruch myszy
  nolte.css('opacity', 1);
  newman.css('opacity', opacity);
  redford.css('opacity', opacity);
});

  redford.on('click', function(){ //na klika
    redford.css('opacity', 1); //dzieje sie to co w mouseenter
    newman.css('opacity', opacity);
    nolte.css('opacity', opacity);

    var wdWidth = $(this).data('wd'); //pobieram data-sety szerokosci skillsow
    var gdWidth = $(this).data('gd');
    var htmlWidth = $(this).data('html');
    var uiuxWidth = $(this).data('uiux');

    $('#wd-percent').text(""); //resetuje napis procentow
    $('#gd-percent').text("");
    $('#html-percent').text("");
    $('#uiux-percent').text("");

    progressBar1.css('width', 0); //resetuje szerokosci progressbaru
    progressBar2.css('width', 0);
    progressBar3.css('width', 0);
    progressBar4.css('width', 0);

    $('#wd-percent').text(wdWidth); //nastawiam napisy procentow progresbaru
    $('#gd-percent').text(gdWidth);
    $('#html-percent').text(htmlWidth);
    $('#uiux-percent').text(uiuxWidth);


    progressBar1.animate({ //nastawiam szerokosci progresbarow
      width: wdWidth
    },1000);
    progressBar2.animate({
      width: gdWidth
    },1000);
    progressBar3.animate({
      width: htmlWidth
    },1000);
    progressBar4.animate({
      width: uiuxWidth
    },1000);
  });

    newman.on('click', function (){
      newman.css('opacity', 1);
      redford.css('opacity', opacity);
      nolte.css('opacity', opacity);

      var wdWidth = $(this).data('wd');
      var gdWidth = $(this).data('gd');
      var htmlWidth = $(this).data('html');
      var uiuxWidth = $(this).data('uiux');

      $('#wd-percent').text("");
      $('#gd-percent').text("");
      $('#html-percent').text("");
      $('#uiux-percent').text("");

      progressBar1.css('width', 0);
      progressBar2.css('width', 0);
      progressBar3.css('width', 0);
      progressBar4.css('width', 0);

      $('#wd-percent').text(wdWidth);
      $('#gd-percent').text(gdWidth);
      $('#html-percent').text(htmlWidth);
      $('#uiux-percent').text(uiuxWidth);

      progressBar1.animate({
        width: wdWidth
      },1000);
      progressBar2.animate({
        width: gdWidth
      },1000);
      progressBar3.animate({
        width: htmlWidth
      },1000);
      progressBar4.animate({
        width: uiuxWidth
      },1000);
    });

      nolte.on('click', function (){
        nolte.css('opacity', 1);
        newman.css('opacity', opacity);
        redford.css('opacity', opacity);
        var wdWidth = $(this).data('wd');
        var gdWidth = $(this).data('gd');
        var htmlWidth = $(this).data('html');
        var uiuxWidth = $(this).data('uiux');

        $('#wd-percent').text("");
        $('#gd-percent').text("");
        $('#html-percent').text("");
        $('#uiux-percent').text("");

        progressBar1.css('width', 0);
        progressBar2.css('width', 0);
        progressBar3.css('width', 0);
        progressBar4.css('width', 0);

        $('#wd-percent').text(wdWidth);
        $('#gd-percent').text(gdWidth);
        $('#html-percent').text(htmlWidth);
        $('#uiux-percent').text(uiuxWidth);


        progressBar1.animate({
          width: wdWidth
        },1000);
        progressBar2.animate({
          width: gdWidth
        },1000);
        progressBar3.animate({
          width: htmlWidth
        },1000);
        progressBar4.animate({
          width: uiuxWidth
        },1000);
      });

}
progressBar();



});
