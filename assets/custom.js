// /**
//  * Include your custom JavaScript here.
//  *
//  * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
//  * changes on product page, you can attach a listener to the document:
//  *
//  * document.addEventListener('variant:changed', function(event) {
//  *   var variant = event.detail.variant; // Gives you access to the whole variant details
//  * });
//  *
//  * You can also add a listener whenever a product is added to the cart:
//  *
//  * document.addEventListener('product:added', function(event) {
//  *   var variant = event.detail.variant; // Get the variant that was added
//  *   var quantity = event.detail.quantity; // Get the quantity that was added
//  * });
//  *
//  * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
//  * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
//  *
//  * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
//  *   bubbles: true
//  * }));
//  */
// jQuery(document).ready(function($) {

//   //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
//   if( getCookie('popupCookie') != 'submited'){ 
//     $('.AnnouncementBar__Wrapper ').css("display", "block");
//   }
//   else{
//     $('.AnnouncementBar__Wrapper ').css("display", "none");
//   }

//   $('.AnnouncementBar__Wrapper .close').click(function(){
//     $('.AnnouncementBar__Wrapper').css("display", "none").fadeOut();
//     setCookie( 'popupCookie', 'submited', 1 * 24 * 60 * 60 * 1000 );
//   });

//   function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//       var c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }

//   function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }


// });
// $(".ColorSwatchList .HorizontalList__Item label").on("click",function(){
//   var swatchValue = $(this).attr('data-tooltip').toLowerCase();
//   //console.log(swatchValue);
//   $(".Product__SlideshowNavScroller span.Product__SlideshowNavImage").each(function(){
//     var thumAlt = $(this).find('img').attr('data-alt-img').toLowerCase();
//     // console.log(thumAlt);
//     if(thumAlt == swatchValue){
//       $(this).show();
//       $(this).attr("data-visible","yes");
//     }

//     else{
//       $(this).hide();
//       $(this).attr("data-visible","no");
//     }
//     setTimeout(function(){
//       if($(".Product__SlideshowNavImage:visible").length == '0'){
//         $(".Product__SlideshowNavImage").show();
//         //console.log("1");
//         //console.log($(".Product__SlideshowNavImage:visible").length);
//       }

//     },200);


//   });


// //   var html= ' ';
// //   $(".Product__SlideshowNavScroller span.Product__SlideshowNavImage").each(function(){
// //     var htxml= $(this).attr("data-visible");       
// //     if(htxml == 'yes' ){
// //       html += '<div class="custom_slider_here Product__SlideItem Product__SlideItem--image Carousel__Cell"><div class"AspectRatio AspectRatio--withFallback">'+$(this).html()+'</div></div>';
// //     }
// //   });

// //   console.log("htmlhaibabubhi=="+html);


// //   $(".flickity_options_tko").html('<div class="html">'+html+'</div>');

// // //   =========================================================================================
// //   if($(".custom_slider_here").length == '0'){

// //     var html= ' ';
// //     $(".Product__SlideshowNavScroller span.Product__SlideshowNavImage").each(function(){
// //      // var htxml= $(this).attr("data-visible");       
// //       //if(htxml == 'yes' ){
// //         html += '<div class="custom_slider_here Product__SlideItem Product__SlideItem--image Carousel__Cell"><div class"AspectRatio AspectRatio--withFallback">'+$(this).html()+'</div></div>';
// //      // }
// //     });

// //     console.log("htmlhaibabubhi=="+html);

// //   $(".flickity_options_tko").html('<div class="html all_images">'+html+'</div>');

// //   }
// // //   =========================================================================================


// //   var $carousel = $('.html');
// //   // bind event listener first
// //   $carousel.on( 'ready.flickity', function() {
// //     console.log('Flickity ready');
// //   });
// //   // initialize Flickity
// //   $carousel.flickity();

// });

// $(".ColorSwatch").first().trigger("click");


// $(".custom-scent-option").click(function() {
//   var swatchValueee = $(this).attr('data-value').toLowerCase();
//   //console.log(swatchValue);
//   $(".Product__SlideshowNavScroller span.Product__SlideshowNavImage").each(function(){
//     var thumAlttt = $(this).find('img').attr('data-alt-img').toLowerCase();

//     // console.log(thumAlt);
//     if(thumAlttt == swatchValueee){
//       $(this).show();
//     }

//     else{
//       $(this).hide();
//     }
//     setTimeout(function(){
//       if($(".Product__SlideshowNavImage:visible").length == '0'){
//         $(".Product__SlideshowNavImage").show();
//         //console.log("1");
//         //console.log($(".Product__SlideshowNavImage:visible").length);
//       }
//       else{

//       }
//     },200);
//   });});


// $("button.Popover__Value.Heading.Link.Link--primary.u-h6.custom-scent-option.is-selected").trigger("click");




/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
jQuery(document).ready(function($) {

  //   $('.html').css('opacity','0');

  //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
  if( getCookie('popupCookie') != 'submited'){ 
    $('.AnnouncementBar__Wrapper ').css("display", "block");
  }
  else{
    $('.AnnouncementBar__Wrapper ').css("display", "none");
  }

  $('.AnnouncementBar__Wrapper .close').click(function(){
    $('.AnnouncementBar__Wrapper').css("display", "none").fadeOut();
    setCookie( 'popupCookie', 'submited', 1 * 24 * 60 * 60 * 1000 );
  });

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


});




///////////////////////////////////////////////////////////////////////

// Color options change functions
$(".custom_color_label_click select.option-value-click").on("change",function(){

  
  $(".Whennocolor_and_scent_Product__SlideshowNavScroller").hide();
  if($(window).width() <= 1008 ){
    var from_top_height =  $(".html .custom_aspect_ratio img").height();
    var heightt= from_top_height + 'px' ; 
    console.log(heightt);
    $(".html").css("min-height",heightt);
    $(".html").css("opacity","0");
  }


  setTimeout(function(){
    if($(window).width() <= 1008 ){
      var height=  $(".html .custom_aspect_ratio img").height();
      console.log(height);
      $(".html").css("height",height+'px');
      console.log($(".html .flickity-viewport").height());
      $(".html").css("min-height","auto");
      $(".html").css("opacity","1");

    }
  },400);



  var clickValue = $(this).val().toLowerCase();
  //console.log(swatchValue);
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var thumImg = $(this).find('img').attr('data-alt-img').toLowerCase();
    // console.log(thumAlt);
    if(thumImg == clickValue){
      $(this).show();
      //    console.log("each_mila"+$(this).html());
      $(this).attr("data-visible","yes");
    }

    else{
      $(this).hide();
      $(this).attr("data-visible","no");
    }
    setTimeout(function(){
      if($(".Product__SlideshowNavImage:visible").length == '0'){
        $(".Product__SlideshowNavImage").show();
        //   console.log("each_mila"+$(".Product__SlideshowNavImage").html());
        //console.log("1");
        //console.log($(".Product__SlideshowNavImage:visible").length);
      }

    },200);


  });
  //    var clickValue = $(this).find(".custom_color_label_click").toLowerCase();
  //   //console.log(swatchValue);
  //   $(".display_none span.Product__SlideshowNavImage").each(function(){
  //     var thumImage = $(this).find('img').attr('data-alt-img').toLowerCase();
  //     // console.log(thumAlt);
  //     if(thumImage == clickValue){
  //       $(this).show();
  //       //    console.log("each_mila"+$(this).html());
  //       $(this).attr("data-visible","yes");
  //     }

  //     else{
  //       $(this).hide();
  //       $(this).attr("data-visible","no");
  //     }
  //     setTimeout(function(){
  //       if($(".Product__SlideshowNavImage:visible").length == '0'){
  //         $(".Product__SlideshowNavImage").show();
  //         //   console.log("each_mila"+$(".Product__SlideshowNavImage").html());
  //         //console.log("1");
  //         //console.log($(".Product__SlideshowNavImage:visible").length);
  //       }

  //     },200);


  //   });

  // thumbs image
  var thumbs= ' ';
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var visible= $(this).attr("data-visible");       
    if(visible == 'yes' ){
      thumbs += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';
    }
  });
  $(".Product__SlideshowNavScroller").html(thumbs);
  // main image
  var html= ' ';
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var htxml= $(this).attr("data-visible");       
    if(htxml == 'yes' ){
      html += '<div data-number='+$(this).index() +" "+'class="custom_slider_here Product__SlideItem Product__SlideItem--image Carousel__Cell"><div class="custom_aspect_ratio">'+$(this).html().replace("_160x", "")+'</div></div>';
    }
  });

  //  console.log("htmlhaibabubhi=="+html);
  $(".flickity_options_tko").html('<div class="html">'+html+'</div>');


  // popup alt Base  image
  var popup_data= ' ';
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var visible= $(this).attr("data-visible");       
    if(visible == 'yes' ){
      popup_data += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';
    }
  });
  // $(".click-on-plus").html(popup_data);

  $(".click-on-plus").replaceWith('<div class="click-on-plus">'+popup_data+'</div>');

  //   =========================================================================================
  if($(".custom_slider_here").length == '0'){

    var html= ' ';
    $(".display_none span.Product__SlideshowNavImage").each(function(){

      html += '<div data-number='+$(this).index()+" "+'class="custom_slider_here Product__SlideItem Product__SlideItem--image Carousel__Cell slick-slide"><div class="custom_aspect_ratio">'+$(this).html().replace("_160x", "")+'</div></div>';

    });

    $(".flickity_options_tko").html('<div class="html all_images">'+html+'</div>');

    // thumbs image

    var thumbs= ' ';
    $(".display_none span.Product__SlideshowNavImage").each(function(){
      thumbs += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';
    });
    $(".Product__SlideshowNavScroller").html(thumbs);

    // popup all  image
    var popup_datwa= ' ';
    $(".display_none span.Product__SlideshowNavImage").each(function(){
      popup_datwa += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';

    });
    $(".click-on-plus").replaceWith('<div class="click-on-plus">'+popup_datwa+'</div>');

  }
  $(".click-on-plus").removeClass("slick-initialized slick-slider slick-dotted");

  $('.Product__SlideshowNavScroller').removeClass("slick-initialized slick-slider slick-dotted");
  setTimeout (function(){


    $('.html').slick({
      slidesToShow: 1,dots:false,
      slidesToScroll: 1,
      infinite:false,
      adaptiveHeight: true,
      dots:true,
      prevArrow:"<button type='button' class='slick-prev-pull-left'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow'></path></svg></button>",
      nextArrow:"<button type='button' class='slick-next-pull-right'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow' transform='translate(100, 100) rotate(180)'></path></svg></button>",
      asNavFor: '.Product__SlideshowNavScroller'
    });
    $('.Product__SlideshowNavScroller').slick({
      slidesToShow:4,
      slidesToScroll: 1,
      asNavFor: '.html',
      infinite:false,
      dots: false,
      vertical:true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow'></path></svg></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow' transform='translate(100, 100) rotate(180)'></path></svg></button>",
      focusOnSelect: true
    });




    var $carousel = $('.html');
    // bind event listener first
    $carousel.on( 'ready.slick', function() {
      console.log('Flickity ready');
    });
    // initialize Flickity
    $carousel.slick();

    $carousel.on( 'change.slick', function( event, index ) {
      console.log( 'Slide changed to ' + index )
    });





    function border(){
      var change_click =$(".custom_slider_here.Product__SlideItem.Product__SlideItem--image.Carousel__Cell.slick-slide.slick-current.slick-active").attr("data-number");
      console.log("change_click"+change_click);
      $(".Product__SlideshowNavImage").each(function(){
        var index =$(this).attr("data-number");
        //         if( index == change_click ){
        //           $(this).addClass("is-border");
        //         }
        //         else{
        //           $(this).removeClass("is-border");
        //         }
      });

    } 

    //   Main on click arrow and slide image
    var flkty = new slick('.html');
    flkty.on( 'select', function( index ) {
      border();
    });
    $(document).on("click",".Product__SlideshowNavImage img",function(){
      var img_ind= $(this).attr("data-ind");
      border();
      $('.Product__SlideItem').each(function(){
        var index =$(this).attr("data-number");
        if( img_ind == index){
          var INDEXXXX= $(this).index();
          $('.slick-dots').find('.li').each(function(){
            var dots_index = $(this).index();
            if(dots_index == INDEXXXX){
              var $carousel = $('.html').slick()
              .slick('next')
              .slick( 'select', dots_index );
            }
            else{
            }
          });
        }
      });
    });
    //     $(".Product__SlideshowNavScroller .Product__SlideshowNavImage").first().addClass("is-border");





  },200); 



  setTimeout (function(){
    if($(window).width() >= 1008 ){
      if($(".html").height() <= 200 ){
        var height=  $(".html .custom_aspect_ratio img").height();
        console.log(height);
        $(".html .flickity-viewport").css("height","584px");
        console.log($(".html .flickity-viewport").height());
      }
    }
  },220); 
});

// Scent options change functions
$(".custom_scent_valueoption_label_click").on("change",function(){
    $(".Whennocolor_and_scent_Product__SlideshowNavScroller").hide();
  console.log("scent");
  if($(window).width() <= 1008 ){
    var from_top_height =  $(".html .custom_aspect_ratio img").height();
    var heightt= from_top_height + 'px' ; 
    console.log(heightt);
    $(".html").css("min-height",heightt);
    $(".html").css("opacity","0");
  }


  setTimeout(function(){
    if($(window).width() <= 1008 ){
      var height=  $(".html .custom_aspect_ratio img").height();
      console.log(height);
      $(".html").css("height",height+'px');
      console.log($(".html .flickity-viewport").height());
      $(".html").css("min-height","auto");
      $(".html").css("opacity","1");

    }
  },400);



  var clickValue = $(this).val().toLowerCase();
  //console.log(swatchValue);
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var thumImg = $(this).find('img').attr('data-alt-img').toLowerCase();
    // console.log(thumAlt);
    if(thumImg == clickValue){
      $(this).show();
      //    console.log("each_mila"+$(this).html());
      $(this).attr("data-visible","yes");
    }

    else{
      $(this).hide();
      $(this).attr("data-visible","no");
    }
    setTimeout(function(){
      if($(".Product__SlideshowNavImage:visible").length == '0'){
        $(".Product__SlideshowNavImage").show();
        //   console.log("each_mila"+$(".Product__SlideshowNavImage").html());
        //console.log("1");
        //console.log($(".Product__SlideshowNavImage:visible").length);
      }

    },200);


  });
  //    var clickValue = $(this).find(".custom_color_label_click").toLowerCase();
  //   //console.log(swatchValue);
  //   $(".display_none span.Product__SlideshowNavImage").each(function(){
  //     var thumImage = $(this).find('img').attr('data-alt-img').toLowerCase();
  //     // console.log(thumAlt);
  //     if(thumImage == clickValue){
  //       $(this).show();
  //       //    console.log("each_mila"+$(this).html());
  //       $(this).attr("data-visible","yes");
  //     }

  //     else{
  //       $(this).hide();
  //       $(this).attr("data-visible","no");
  //     }
  //     setTimeout(function(){
  //       if($(".Product__SlideshowNavImage:visible").length == '0'){
  //         $(".Product__SlideshowNavImage").show();
  //         //   console.log("each_mila"+$(".Product__SlideshowNavImage").html());
  //         //console.log("1");
  //         //console.log($(".Product__SlideshowNavImage:visible").length);
  //       }

  //     },200);


  //   });

  // thumbs image
  var thumbs= ' ';
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var visible= $(this).attr("data-visible");       
    if(visible == 'yes' ){
      thumbs += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';
    }
  });
  $(".Product__SlideshowNavScroller").html(thumbs);
  // main image
  var html= ' ';
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var htxml= $(this).attr("data-visible");       
    if(htxml == 'yes' ){
      html += '<div data-number='+$(this).index() +" "+'class="custom_slider_here Product__SlideItem Product__SlideItem--image Carousel__Cell"><div class="custom_aspect_ratio">'+$(this).html().replace("_160x", "")+'</div></div>';
    }
  });

  //  console.log("htmlhaibabubhi=="+html);
  $(".flickity_options_tko").html('<div class="html">'+html+'</div>');


  // popup alt Base  image
  var popup_data= ' ';
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var visible= $(this).attr("data-visible");       
    if(visible == 'yes' ){
      popup_data += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';
    }
  });
  // $(".click-on-plus").html(popup_data);

  $(".click-on-plus").replaceWith('<div class="click-on-plus">'+popup_data+'</div>');

  //   =========================================================================================
  if($(".custom_slider_here").length == '0'){

    var html= ' ';
    $(".display_none span.Product__SlideshowNavImage").each(function(){

      html += '<div data-number='+$(this).index()+" "+'class="custom_slider_here Product__SlideItem Product__SlideItem--image Carousel__Cell slick-slide"><div class="custom_aspect_ratio">'+$(this).html().replace("_160x", "")+'</div></div>';

    });

    $(".flickity_options_tko").html('<div class="html all_images">'+html+'</div>');

    // thumbs image

    var thumbs= ' ';
    $(".display_none span.Product__SlideshowNavImage").each(function(){
      thumbs += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';
    });
    $(".Product__SlideshowNavScroller").html(thumbs);

    // popup all  image
    var popup_datwa= ' ';
    $(".display_none span.Product__SlideshowNavImage").each(function(){
      popup_datwa += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';

    });
    $(".click-on-plus").replaceWith('<div class="click-on-plus">'+popup_datwa+'</div>');

  }
  $(".click-on-plus").removeClass("slick-initialized slick-slider slick-dotted");

  $('.Product__SlideshowNavScroller').removeClass("slick-initialized slick-slider slick-dotted");
  setTimeout (function(){


    $('.html').slick({
      slidesToShow: 1,dots:false,
      slidesToScroll: 1,
      infinite:false,  
      adaptiveHeight: true,
      dots:true,
      prevArrow:"<button type='button' class='slick-prev-pull-left'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow'></path></svg></button>",
      nextArrow:"<button type='button' class='slick-next-pull-right'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow' transform='translate(100, 100) rotate(180)'></path></svg></button>",
      asNavFor: '.Product__SlideshowNavScroller'
    });
    $('.Product__SlideshowNavScroller').slick({
      slidesToShow:4,
      slidesToScroll: 1,
      asNavFor: '.html',
      infinite:false,
      dots: false,
      vertical:true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow'></path></svg></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow' transform='translate(100, 100) rotate(180)'></path></svg></button>",
      focusOnSelect: true
    });




    var $carousel = $('.html');
    // bind event listener first
    $carousel.on( 'ready.slick', function() {
      console.log('Flickity ready');
    });
    // initialize Flickity
    $carousel.slick();

    $carousel.on( 'change.slick', function( event, index ) {
      console.log( 'Slide changed to ' + index )
    });





    function border(){
      var change_click =$(".custom_slider_here.Product__SlideItem.Product__SlideItem--image.Carousel__Cell.slick-slide.slick-current.slick-active").attr("data-number");
      console.log("change_click"+change_click);
      $(".Product__SlideshowNavImage").each(function(){
        var index =$(this).attr("data-number");
        //         if( index == change_click ){
        //           $(this).addClass("is-border");
        //         }
        //         else{
        //           $(this).removeClass("is-border");
        //         }
      });

    } 

    //   Main on click arrow and slide image
    var flkty = new slick('.html');
    flkty.on( 'select', function( index ) {
      border();
    });
    $(document).on("click",".Product__SlideshowNavImage img",function(){
      var img_ind= $(this).attr("data-ind");
      border();
      $('.Product__SlideItem').each(function(){
        var index =$(this).attr("data-number");
        if( img_ind == index){
          var INDEXXXX= $(this).index();
          $('.slick-dots').find('.li').each(function(){
            var dots_index = $(this).index();
            if(dots_index == INDEXXXX){
              var $carousel = $('.html').slick()
              .slick('next')
              .slick( 'select', dots_index );
            }
            else{
            }
          });
        }
      });
    });
    //     $(".Product__SlideshowNavScroller .Product__SlideshowNavImage").first().addClass("is-border");





  },200); 



  setTimeout (function(){
    if($(window).width() >= 1008 ){
      if($(".html").height() <= 200 ){
        var height=  $(".html .custom_aspect_ratio img").height();
        console.log(height);
        $(".html .flickity-viewport").css("height","584px");
        console.log($(".html .flickity-viewport").height());
      }
    }
  },220); 
});

// ------------------------------------------------------------------------------------------------------

///////////////////////////////////////////////////////////////////////

$(".ColorSwatchList .HorizontalList__Item label").on("click",function(){

  if($(window).width() <= 1008 ){
    var from_top_height =  $(".html .custom_aspect_ratio img").height();
    var heightt= from_top_height + 'px' ; 
    console.log(heightt);
    $(".html").css("min-height",heightt);
    $(".html").css("opacity","0");
  }


  setTimeout(function(){
    if($(window).width() <= 1008 ){
      var height=  $(".html .custom_aspect_ratio img").height();
      console.log(height);
      $(".html").css("height",height+'px');
      console.log($(".html .flickity-viewport").height());
      $(".html").css("min-height","auto");
      $(".html").css("opacity","1");

    }
  },400);



  var swatchValue = $(this).attr('data-tooltip').toLowerCase();
  console.log("swatchValue====="+swatchValue);
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var thumAlt = $(this).find('img').attr('data-alt-img').toLowerCase();

    if(thumAlt == swatchValue){
      $(this).show();
      //    console.log("each_mila"+$(this).html());
      $(this).attr("data-visible","yes");
    }

    else{
      $(this).hide();
      $(this).attr("data-visible","no");
    }
    setTimeout(function(){
      if($(".Product__SlideshowNavImage:visible").length == '0'){
        $(".Product__SlideshowNavImage").show();
        //   console.log("each_mila"+$(".Product__SlideshowNavImage").html());
        //console.log("1");
        //console.log($(".Product__SlideshowNavImage:visible").length);
      }

    },200);


  });
  //    var clickValue = $(this).find(".custom_color_label_click").toLowerCase();
  //   //console.log(swatchValue);
  //   $(".display_none span.Product__SlideshowNavImage").each(function(){
  //     var thumImage = $(this).find('img').attr('data-alt-img').toLowerCase();
  //     // console.log(thumAlt);
  //     if(thumImage == clickValue){
  //       $(this).show();
  //       //    console.log("each_mila"+$(this).html());
  //       $(this).attr("data-visible","yes");
  //     }

  //     else{
  //       $(this).hide();
  //       $(this).attr("data-visible","no");
  //     }
  //     setTimeout(function(){
  //       if($(".Product__SlideshowNavImage:visible").length == '0'){
  //         $(".Product__SlideshowNavImage").show();
  //         //   console.log("each_mila"+$(".Product__SlideshowNavImage").html());
  //         //console.log("1");
  //         //console.log($(".Product__SlideshowNavImage:visible").length);
  //       }

  //     },200);


  //   });

  // thumbs image
  var thumbs= ' ';
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var visible= $(this).attr("data-visible");       
    if(visible == 'yes' ){
      thumbs += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';
    }
  });
  $(".Product__SlideshowNavScroller").html(thumbs);
  // main image
  var html= ' ';
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var htxml= $(this).attr("data-visible");       
    if(htxml == 'yes' ){
      html += '<div data-number='+$(this).index() +" "+'class="custom_slider_here Product__SlideItem Product__SlideItem--image Carousel__Cell"><div class="custom_aspect_ratio">'+$(this).html().replace("_160x", "")+'</div></div>';
    }
  });

  //  console.log("htmlhaibabubhi=="+html);
  $(".flickity_options_tko").html('<div class="html">'+html+'</div>');


  // popup alt Base  image
  var popup_data= ' ';
  $(".display_none span.Product__SlideshowNavImage").each(function(){
    var visible= $(this).attr("data-visible");       
    if(visible == 'yes' ){
      popup_data += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';
    }
  });
  // $(".click-on-plus").html(popup_data);

  $(".click-on-plus").replaceWith('<div class="click-on-plus">'+popup_data+'</div>');

  //   =========================================================================================
  if($(".custom_slider_here").length == '0'){

    var html= ' ';
    $(".display_none span.Product__SlideshowNavImage").each(function(){

      html += '<div data-number='+$(this).index()+" "+'class="custom_slider_here Product__SlideItem Product__SlideItem--image Carousel__Cell slick-slide"><div class="custom_aspect_ratio">'+$(this).html().replace("_160x", "")+'</div></div>';

    });

    $(".flickity_options_tko").html('<div class="html all_images">'+html+'</div>');

    // thumbs image

    var thumbs= ' ';
    $(".display_none span.Product__SlideshowNavImage").each(function(){
      thumbs += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';
    });
    $(".Product__SlideshowNavScroller").html(thumbs);

    // popup all  image
    var popup_datwa= ' ';
    $(".display_none span.Product__SlideshowNavImage").each(function(){
      popup_datwa += '<div data-number='+$(this).index() +" "+'class="custom-images-slude Product__SlideshowNavImage">'+$(this).html().replace("_160x", "")+'</div>';

    });
    $(".click-on-plus").replaceWith('<div class="click-on-plus">'+popup_datwa+'</div>');

  }
  $(".click-on-plus").removeClass("slick-initialized slick-slider slick-dotted");

  $('.Product__SlideshowNavScroller').removeClass("slick-initialized slick-slider slick-dotted");
  setTimeout (function(){


    $('.html').slick({
      slidesToShow: 1,dots:false,
      slidesToScroll: 1,
      infinite:false,
      dots:true,
      adaptiveHeight: true,
      prevArrow:"<button type='button' class='slick-prev-pull-left'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow'></path></svg></button>",
      nextArrow:"<button type='button' class='slick-next-pull-right'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow' transform='translate(100, 100) rotate(180)'></path></svg></button>",
      asNavFor: '.Product__SlideshowNavScroller'
    });
    $('.Product__SlideshowNavScroller').slick({
      slidesToShow:4,
      slidesToScroll: 1,
      asNavFor: '.html',
      infinite:false,
      dots: false,
      vertical:true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow'></path></svg></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><svg viewBox='0 0 100 100'><path d='M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z' class='arrow' transform='translate(100, 100) rotate(180)'></path></svg></button>",
      focusOnSelect: true
    });




    var $carousel = $('.html');
    // bind event listener first
    $carousel.on( 'ready.slick', function() {
      console.log('Flickity ready');
    });
    // initialize Flickity
    $carousel.slick();

    $carousel.on( 'change.slick', function( event, index ) {
      console.log( 'Slide changed to ' + index )
    });





    function border(){
      var change_click =$(".custom_slider_here.Product__SlideItem.Product__SlideItem--image.Carousel__Cell.slick-slide.slick-current.slick-active").attr("data-number");
      console.log("change_click"+change_click);
      $(".Product__SlideshowNavImage").each(function(){
        var index =$(this).attr("data-number");
        //         if( index == change_click ){
        //           $(this).addClass("is-border");
        //         }
        //         else{
        //           $(this).removeClass("is-border");
        //         }
      });

    } 

    //   Main on click arrow and slide image
    var flkty = new slick('.html');
    flkty.on( 'select', function( index ) {
      border();
    });
    $(document).on("click",".Product__SlideshowNavImage img",function(){
      var img_ind= $(this).attr("data-ind");
      border();
      $('.Product__SlideItem').each(function(){
        var index =$(this).attr("data-number");
        if( img_ind == index){
          var INDEXXXX= $(this).index();
          $('.slick-dots').find('.li').each(function(){
            var dots_index = $(this).index();
            if(dots_index == INDEXXXX){
              var $carousel = $('.html').slick()
              .slick('next')
              .slick( 'select', dots_index );
            }
            else{
            }
          });
        }
      });
    });
    //     $(".Product__SlideshowNavScroller .Product__SlideshowNavImage").first().addClass("is-border");





  },200); 



  setTimeout (function(){
    if($(window).width() >= 1008 ){
      if($(".html").height() <= 200 ){
        var height=  $(".html .custom_aspect_ratio img").height();
        console.log(height);
        $(".html .flickity-viewport").css("height","584px");
        console.log($(".html .flickity-viewport").height());
      }
    }
  },220); 
});



function selected_imagepopup(){

}

$(document).on("click",".html .Carousel__Cell.slick-current.slick-active",function(){

  if($(window).width() >= 1008 ){
    var index_here =  $(".html .Carousel__Cell.slick-current.slick-active").attr("data-number");


    var index_hsere =  $(".html .Carousel__Cell.slick-current.slick-active").attr("data-number");
    $(".Main-click-on-plus.Mainclick_fixed slick-dots li").each(function(){
      var indexxx= $(this).index();
      console.log(index_hsere);
      console.log(indexxx);

    });


    console.log("index_here===="+index_here);
    setTimeout (function(){


      var selected = $(".custom_slider_here.Product__SlideItem.Product__SlideItem--image.Carousel__Cell.slick-slide.slick-current.slick-active").attr("data-number");
      console.log("selected===="+selected);

      var selectednumber = $(this).attr("data-number");
      //console.log("selectednumber===="+selectednumber);


      $(".Main-click-on-plus").addClass("Mainclick_fixed");
      $(".Main-click-on-plus .click-on-plus").addClass("clickMainclick_fixed");
      console.log("slick");

      $(".click-on-plus").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        centerMode: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

      });

      if( $(".cus-close-button").length == '0') {
        $(".Main-click-on-plus.Mainclick_fixed .click-on-plus button.slick-prev ").after('<button class="cus-close-button pswp__button pswp__button--close RoundButton RoundButton--large" data-animate-bottom="" title="Close (Esc)"><svg class="Icon Icon--close" role="presentation" viewBox="0 0 16 14" style="color: #164e87;cursor: pointer;text-align: center;"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>    </svg></button>');
      }

      if($(".Main-click-on-plus.Mainclick_fixed .Product__SlideshowNavImage").length == '1') {
        $(".common_hide_show").hide();
      }
      else{
        $(".common_hide_show").show();
      }

    },200);
  }
});

$(document).on("click","button.RoundButton.RoundButton--small.RoundButton--flat",function(ee){
  ee.preventDefault();
  if($(window).width() < 1008 ){
    var index_here =  $(".html .Carousel__Cell.slick-active").attr("data-number");
    console.log("index_here===="+index_here);
    setTimeout (function(){


      var selected = $(".custom_slider_here.Product__SlideItem.Product__SlideItem--image.Carousel__Cell.slick-active").attr("data-number");
      console.log("selected===="+selected);

      var selectednumber = $(this).attr("data-number");
      console.log("selectednumber===="+selectednumber);


      $(".Main-click-on-plus").addClass("Mainclick_fixed");
      $(".Main-click-on-plus .click-on-plus").addClass("clickMainclick_fixed");
      console.log("slick");

      $(".click-on-plus").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true

      });

      if( $(".cus-close-button").length == '0') {
        $(".Main-click-on-plus.Mainclick_fixed .click-on-plus button.slick-prev").after('<button class="cus-close-button pswp__button pswp__button--close RoundButton RoundButton--large" data-animate-bottom="" title="Close (Esc)"><svg class="Icon Icon--close" role="presentation" viewBox="0 0 16 14" style="color: #164e87;cursor: pointer;text-align: center;"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>    </svg></button>');
      }

      if($(".Main-click-on-plus.Mainclick_fixed .Product__SlideshowNavImage").length == '1') {
        $(".common_hide_show").hide();
      }
      else{
        $(".common_hide_show").show();
      }


    },200);

  }
});



$(document).on("click",".cus-close-button",function(){
  $(".Main-click-on-plus").removeClass("Mainclick_fixed");
  $(".Main-click-on-plus .click-on-plus").removeClass("clickMainclick_fixed");
});

$(document).on( 'click', '.Product__SlideItem', function() {
  if($(window).width() >= 1008 ){
    var index =  $(".html .Carousel__Cell.slick-active").attr("data-number");
    var $carousel= $(".click-on-plus");
    $carousel.slick( 'select', index );
  }
});

$(document).on("click"," button.RoundButton.RoundButton--small.RoundButton--flat",function(e){
  console.log("clciked");
  e.preventDefault();
  if($(window).width() < 1008 ){

    $("#main .pswp--open").css("display","none");
    var index =  $(".html .Carousel__Cell.slick-active").attr("data-number");
    var $caroussel= $(".click-on-plus");
    $caroussel.slick( 'select', index );
  }
});




// $(".ColorSwatch").first().trigger("click");

$(".custom-scent-option").click(function() {
  var swatchValueee = $(this).attr('data-value').toLowerCase();
  //console.log(swatchValue);
  $(".Product__SlideshowNavScroller span.Product__SlideshowNavImage").each(function(){
    var thumAlttt = $(this).find('img').attr('data-alt-img').toLowerCase();

    // console.log(thumAlt);
    if(thumAlttt == swatchValueee){
      $(this).show();
    }

    else{
      $(this).hide();
    }
    setTimeout(function(){
      if($(".Product__SlideshowNavImage:visible").length == '0'){
        $(".Product__SlideshowNavImage").show();
        //console.log("1");
        //console.log($(".Product__SlideshowNavImage:visible").length);
      }
      else{

      }
    },200);
  });});


$("button.Popover__Value.Heading.Link.Link--primary.u-h6.custom-scent-option.slick-active").trigger("click");


// $(".Product__SlideshowNavScroller .custom-images-slude.Product__SlideshowNavImage").on('click', function() {
//   alert();
// var dssdsddds = $(this).attr("data-slick-index");
// console.log(dssdsddds);
// $(".Product__SlideshowNav--thumbnails ul.slick-dots li").each(function(){
// var thudgg = $(this).index();
// console.log(thudgg);
// if(dssdsddds == thudgg ){
// alert(true);
// $(this).trigger( "click" );
// }
// });
// });
// $('.Product__SlideshowNavScroller .custom-images-slude.Product__SlideshowNavImage.slick-slide').removeClass('slick-active');

//  //set active class to first thumbnail slides
//  $('.Product__SlideshowNavScroller .custom-images-slude.Product__SlideshowNavImage.slick-slide').eq(0).addClass('slick-active');

//  // On before slide change match active thumbnail to current slide
//  $('.flickity_options_tko').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//  	var mySlideNumber = nextSlide;
//  	$('.Product__SlideshowNavScroller .slick-slide').removeClass('slick-active');
//  	$('.Product__SlideshowNavScroller .slick-slide').eq(mySlideNumber).addClass('slick-active');
// });

// //UPDATED 

$('.custom-images-slude.Product__SlideshowNavImage.slick-slide.slick-current.slick-active').trigger('click');
// if($(window).width() < 768 ){
//   $(".ColorSwatch").first().trigger("click");
// }
// setTimeout (function(){

// },2500);

$( window ).on("load", function() {
  //   alert("window is loaded");
  console.log("window is loaded Normal");
  setTimeout (function(){
    console.log("window is loaded after 2000");
    $(".custom_scent_valueoption_label_click").first().trigger("change");
    $(".ColorSwatch").first().trigger("click");
    // $(".option-value-click").first().trigger("click");
    $(".option-value-click").first().trigger("change");
   $(".ColorSwatchList .HorizontalList__Item_avail input").eq(0).trigger("click");
  },2000);
});


$(".popup-main-buttons button.custom_click_next").click(function(){
  $('.Main-click-on-plus.Mainclick_fixed .click-on-plus').slick('slickNext');
});
$(".popup-main-buttons button.custom_click_prev").click(function(){
  $('.Main-click-on-plus.Mainclick_fixed .click-on-plus').slick('slickPrev');
});


//================================================CUSTOM DROPDOWN ON PDP PAGE by Hakuna Matata================================================
$('.custom-variant-dropdown').change(function(){
  var popup = $(this).data('controls');
  var thsival = $(this).val();
  console.log(thsival);
  console.log(popup);
  $('#'+popup).find('.Popover__Value').each(function(){
    var popup_val = $(this).data('value');
    if(popup_val == thsival){
      $(this).trigger('click');
    }
  });
});




  $(document).ready(function() {
    $('ul.tabs').each(function(){
      var active, content, links = $(this).find('a');
      active = links.first().addClass('active');
      content = $(active.attr('href'));
      links.not(':first').each(function () {
        $($(this).attr('href')).hide();
      });
      $(this).find('a').click(function(e){
        active.removeClass('active');
        content.hide();
        active = $(this);
        content = $($(this).attr('href'));
        active.addClass('active');
        content.show();
        return false;
      });
    });
  });