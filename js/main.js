$(document).ready(function(){    

    scrollMagic();
    $('#nav').onePageNav();
   
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#btn-back-to-top').fadeIn('slow');
      } else {
        $('#btn-back-to-top').fadeOut('slow');
      }
    });
    $('#btn-back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });

     // Back to top link
     $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#link-back-to-top').fadeIn('slow');
      } else {
        $('#link-back-to-top').fadeOut('slow');
      }
    });
    
    $('#link-back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
    //Carousel
    $('#myCarousel').on('slid.bs.carousel', function(){
      
      var objImg = $('#stamp-img');
      
      if ($('#item-1').css("display")!="none") {
        objImg.attr("src","img/stamp-6.png")
      }
      if ($('#item-2').css("display")!="none") {
        objImg.attr("src","img/stamp-7.png")
      }
      if ($('#item-3').css("display")!="none") {
        objImg.attr("src","img/stamp-1.png")
      }
      if ($('#item-4').css("display")!="none") {
        objImg.attr("src","img/stamp-4.png")
      }
  }); 
 }); 
 