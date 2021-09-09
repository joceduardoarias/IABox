function scrollMagic() {
    
    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    
    var Scene1 = new ScrollMagic.Scene({

      triggerElement: '#prodText',
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#prodText','focus-in-contract')   
    .addTo(controller);

    var Scene2 = new ScrollMagic.Scene({

      triggerElement: '#servicioTittle',
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#servicioTittle','focus-in-contract')    
    .addTo(controller);
    
    var Scene3 = new ScrollMagic.Scene({

      triggerElement: '#servicioTittle',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#servicioTittle','focus-in-contract')    
    .addTo(controller);

    var Scene4 = new ScrollMagic.Scene({

      triggerElement: '#algoritmosTittle',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#algoritmosTittle','focus-in-contract')    
    .addTo(controller);

    var Scene5 = new ScrollMagic.Scene({

      triggerElement: '#prod_1',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#prod_1','bounce-in-left')    
    .addTo(controller);
    
    var Scene6 = new ScrollMagic.Scene({

      triggerElement: '#prod_2',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#prod_2','bounce-in-right')    
    .addTo(controller);

    var Scene7 = new ScrollMagic.Scene({

      triggerElement: '#prod_3',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#prod_3','bounce-in-bottom')    
    .addTo(controller);

    var Scene8 = new ScrollMagic.Scene({

      triggerElement: '#algoritmo-row-1',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#algoritmo-row-1','fade-in-top')    
    .addTo(controller);

    var Scene9 = new ScrollMagic.Scene({

      triggerElement: '#algoritmo-row-2',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#algoritmo-row-2','fade-in-bottom')    
    .addTo(controller);

    var Scene10 = new ScrollMagic.Scene({

      triggerElement: '#algoritmo-row-3',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#algoritmo-row-3','fade-in-top')    
    .addTo(controller);

    var Scene11 = new ScrollMagic.Scene({

      triggerElement: '#img-diagrama-box',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#img-diagrama-box','slide-in-blurred-left')    
    .addTo(controller);

    var Scene12 = new ScrollMagic.Scene({

      triggerElement: '#servicios-info-box',      
      triggerHook:0.9,
      reverse:false

    })
    .setClassToggle('#servicios-info-box','slide-in-blurred-right')    
    .addTo(controller);
}
    