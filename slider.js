
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    nav:true,
    dots:true,
    responsive:{
    0:{
        items:1
        
    },
    425:{
        items:2
    },
    600:{
        items:3
    },
    1024:{
        items:4
    },
    1200:{
        items:5
    }
    }
    })