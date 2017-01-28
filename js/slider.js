$(document).ready(function(){
    $('.slider-header').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                loop:false
            }
        }
    })

});
$(document).ready(function(){
    $('.slider-about').owlCarousel({
        loop:true,
        margin:60,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots: false
            },
            400:{
                items:2,
                nav:true,
                dots: false
            },
            700:{
                items:4,
                nav:true,

                dots: false
            },
            1000:{
                items:5,
                nav:true,
                loop:false,
                dots: false
            }
        }
    })

});
$(document).ready(function(){
    $('.slider-projects').owlCarousel({
        loop:true,
        // margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                loop:false
            }
        }
    })

});