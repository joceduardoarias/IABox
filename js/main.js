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
    
 }); 
 