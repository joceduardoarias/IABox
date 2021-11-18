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
    // Se hace un set de la propiedad src de la estampilla
    // para que esta cambie con cada una de las fotos.
    $('#myCarousel').on('slid.bs.carousel', function(){
      
      var objImg = $('#stamp-img');
      var botonCompra = $("#buy-button");      
      
      if ($('#item-1').css("display")!="none") {
        
        if ($(window).width()<768) {
          objImg.attr("src","img/stamp-1.png");        
        }else{
          objImg.attr("src","img/stamp-2.png");
          botonCompra.html("<i class='fas fa-shopping-cart'></i> Lo quiero!");          
          botonCompra.html("<i class='fas fa-shopping-cart'></i> Lo quiero!");
          botonCompra.html("<i class='fas fa-shopping-cart'></i> Lo quiero!");          
        }
        
      }

      if ($('#item-2').css("display")!="none") {
        objImg.attr("src","img/stamp-4.png");
        botonCompra.html("<i class='fas fa-shopping-cart'></i> Comprar");
      }

      if ($('#item-3').css("display")!="none") {
        objImg.attr("src","img/stamp-1.png");
        botonCompra.html("<i class='fas fa-shopping-cart'></i> Comienza Ahora");
      }

      if ($('#item-4').css("display")!="none") {
        objImg.attr("src","img/stamp-7.png");
        botonCompra.html("<i class='fas fa-shopping-cart'></i> Pedir cotización");
      }     
  }); 
  
 }); 
 