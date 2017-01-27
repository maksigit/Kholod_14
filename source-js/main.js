$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 4
    });
});

// $(document).ready(function() {
//     var touch = $('.touch-menu');
//     var menu = $('.nav');
//
//
//     $(touch).on('click', function(e) {
//         e.preventDefault();
//         menu.slideToggle();
//     });
//     $(window).resize(function() {
//         var wid = $(window).width();
//         if (wid > 760 && menu.is(':hidden')) {
//             menu.removeAttr('style');
//         }
//     });
// });