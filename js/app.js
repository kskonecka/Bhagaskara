$(document).ready(function(){

//MENU scroll

  function scrollMenu(){
    var menuLinks = $("nav").find("a");
    // console.log(menuLinks);

    menuLinks.on("click", function(){
      event.preventDefault();
      var menuLinksHref = $(this).attr('href');
      console.log(menuLinksHref);

      $("html, body").animate({
        scrollTop: $(menuLinksHref).offset().top
      },1000);
    });

    var hexLinks = $('.hex').find('a');
    // console.log(hexLinks);
      hexLinks.on("click", function(){
        event.preventDefault();
        var hexLinksHref = $(this).attr('href');
        // console.log(hexLinksHref);

      $("html, body").animate({
        scrollTop: $(hexLinksHref).offset().top
      },1000);
    });
  }; //scrollMenu

  scrollMenu();

//STICKY MENU
  function setStickyMenu(){
    var menu = $('.menu'); //grid-container mainwidth
    var menuBg = $('.menu-bg');
    var menuOffset = menu.offset().top;

    checkSticky();

    $(window).on('scroll', function(event){
      checkSticky();
    });

    $(window).on('resize', function(){
      checkSticky();
    });

    function checkSticky(){
      var scrollTop = $(document).scrollTop();
        if (scrollTop >= menuBg.offset().top + 1 || $(window).width() < 500) {
          menu.addClass('sticky');
        }else{
          menu.removeClass('sticky')
        }
      }//checkSticky()
    }//setStickyMenu()

  setStickyMenu();

  function hamburgerMenu(){

    var mq = window.matchMedia("(max-width: 500px)"); //checks width and shows/hides menus
    mq.addListener(WidthChange);
    WidthChange(mq);
    // media query change
    function WidthChange(mediaQuery) {
      if(mediaQuery.matches) {
        $(".nav-menu").find("ul").hide();
        $("#hamburger").show();
        $('.photo-box').removeClass('invisible'); //shows all the photos from the portfoio gallery
        console.log('yes');
      } else {
        $(".nav-menu").find("ul").show();
        $("#hamburger").hide().removeClass('open');
        $(".nav-menu").find("ul").removeClass('hamburger-list').addClass('wide-menu');
        console.log('no');
      }
    }//WidthChange()

    $('#hamburger').click(function(){ //toggles "open" class
      $(this).toggleClass('open');

      if ($(this).hasClass('open')){  //when class=open it rolls out the menu
        console.log('open');
        $(".nav-menu").find("ul").removeClass('wide-menu').addClass('hamburger-list');
        $(".nav-menu").find("ul").slideDown();
      }else{
        $(".nav-menu").find("ul").fadeOut();
        // $(".nav-menu").find("ul").removeClass('hamburger-list').addClass('wide-menu');
      }
    }); //hamburger.click event
  }//hamburgerMenu()

  hamburgerMenu();

  //Portfolio Gallery
  function portfolioGallery() {
    var images = $('.portfolio-box').find('img');
    // console.log(images);

    images.each(function(index, value){
    $(this).on('click', function(){
      var imageSource = $(this).attr('src');
      var bigImageSource = $(this).data("bigImageSource");


      var bigImage = $('<img>'); //create big image
      var fullScreen = $('<div>'); // create div that contains big image
      var closeButton = $('<div>'); //create button that exits full screen

      fullScreen.addClass('fullScreen').fadeIn('slow').appendTo($('.gallery-base'));//add fullScreen class and attach to <body>
      bigImage.attr('src', bigImageSource).appendTo(fullScreen);//add img src and attach to <fullScreen>
      closeButton.addClass('closeButton').appendTo(fullScreen);//add closeButton and attach to <fullScreen>

      $('body').on('click', '.closeButton', function(){ //extis full screen
         fullScreen.fadeOut('slow');
      });
    });//end of images.this.event
  }); //end of images.each function
}

portfolioGallery()

  function filterPortoflio(){
    var filterIcons = $('.portfolio-filter-icons').find('div'); //array with the filter buttons
    // console.log(filterIcons);
    var photoBoxes = $('.photo-box');
    // console.log(photoBoxes);


    filterIcons.each(function(index, value){
      $(this).on('click', function(event){
        filterIcons.removeClass('iconsClick'); //un-select all icons
        $(this).toggleClass('iconsClick'); //
        photoBoxes.removeClass('invisible');

        var filterIconsTags = $(this).data('tag');
        // console.log(filterIconsTags);

        photoBoxes.each(function(){
          var photoClasses = $(this).attr('class');
          // console.log(photoClasses);

        if (photoClasses.indexOf(filterIconsTags) == -1) {
          $(this).toggleClass('invisible');
        } //end of IF
      }) // end of photoBoxes.each
    })
  })//end of filterIcons.each
}//end of filterPortoflio function

filterPortoflio();


  function progressBar(){

    var actors = $('.actors');
    var redford = $('.redford'); //defines variables with redford,newman and nolte elements
    var newman = $('.newman');
    var nolte = $('.nolte');
    var opacity = redford.css('opacity'); //that is the css opacity

    var progressBar1 = $("#bar1"); //progress bars spans
    var progressBar2 = $("#bar2");
    var progressBar3 = $("#bar3");
    var progressBar4 = $("#bar4");

    redford.on('mouseenter', function(){ //changes opacity on mouseenter
      actors.css('opacity', opacity); //and the rest of the elements goes back to the original css opacity
      redford.css('opacity', 1); //opacity 1
    });

    newman.on('mouseenter', function (){
      actors.css('opacity', opacity);
      newman.css('opacity', 1);
    });

    nolte.on('mouseenter', function (){
      actors.css('opacity', opacity);
      nolte.css('opacity', 1);
    });

    redford.on('click', function(){ //same thing as above, but on 'click'
      redford.css('opacity', 1);
      newman.css('opacity', opacity);
      nolte.css('opacity', opacity);

      var wdWidth = $(this).data('wd'); //take dataset-width of the skills
      var gdWidth = $(this).data('gd');
      var htmlWidth = $(this).data('html');
      var uiuxWidth = $(this).data('uiux');

      $('#wd-percent').text(""); //resets the span-bars innerHTML
      $('#gd-percent').text("");
      $('#html-percent').text("");
      $('#uiux-percent').text("");

      progressBar1.css('width', 0); //resets span-bars width
      progressBar2.css('width', 0);
      progressBar3.css('width', 0);
      progressBar4.css('width', 0);

      $('#wd-percent').text(wdWidth); //sets innerHTML of progress bars
      $('#gd-percent').text(gdWidth);
      $('#html-percent').text(htmlWidth);
      $('#uiux-percent').text(uiuxWidth);


      progressBar1.animate({ //sets span-width of progress bars
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
  } //progressBar()

progressBar();

 function slider() {
   var nextButton = $("#arrow_right");
    var prevButton = $("#arrow_left");
    // console.log(nextButton);
    // console.log(prevButton);

    var slider = $('.visible-slider');
    var ul = slider.find('ul');

    var widthSlide = 0;
    var cloneFirst = $('.visible-slider').find('ul').children().first().clone();
    var cloneLast = $('.visible-slider').find('ul').children().last().clone();

    ul.append(cloneFirst);
    ul.prepend(cloneLast);

    var numberOfSLides = $('.visible-slider').find('ul').children().length;


    function setWidth() {
      widthSlide = $(window).width();
      $('.visible-slider').css('width', widthSlide );
      $('.visible-slider').find('ul').css('width', widthSlide * numberOfSLides);
      //set width for ul element
      $('.visible-slider').find('ul').children().css('width', widthSlide);
      $('.visible-slider').find('ul').css('left', -widthSlide);

    }
    setWidth();

    // -----------------------------------------
    $(window).on('resize', function() {
      setWidth();
    })
    // -----------------------------------------
    var index = 1;

    ul.css("width", (widthSlide * $('.visible-slider').find('ul').children().length));

    $(".visible-slider").css("width", widthSlide);
    $(".visible-slider").css("overflow", "hidden");

    var pushNextButton = function(){
      console.log("forwards");

        if (index < $('.visible-slider').find('ul').children().length - 1){
          index++;
        } else {
          index = 1;
        }
        console.log(index);

        ul.animate({
            left: -widthSlide*index
        }, 500, function() {
           if(index === $('.visible-slider').find('ul').children().length-1) {
             ul.css('left', -widthSlide);
             console.log('complete');
             index = 1;
           }
        });
    }

    nextButton.on("click", pushNextButton);

    var pushPrevButton = function(){

      console.log("backwards");

        if (index > 0){
          index--;
        } else {
          // index = $('.visible-slider').find('ul').children().length - 2;
          index = 0;
        }

        console.log(index);
          ul.animate({
              left: -widthSlide*index
          }, 500, function(){
            if(index === 0){
              ul.css('left', -($('.visible-slider').find('ul').children().length-2)*widthSlide)
              console.log('complete');
              index = $('.visible-slider').find('ul').children().length - 2;
              console.log(index);
            }
          });
    }
    prevButton.on("click", pushPrevButton);
 }
  slider()

//preventDefaults

  $("input[type=submit]").on('click', function (event){
    event.preventDefault()
    $("input[name=userName]").val("");
    $("input[type=email]").val("")
    $("textarea[name=message]").val("")
  })
});
