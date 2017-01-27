$(window).load(function(){$(".flexslider").flexslider({animation:"slide",animationLoop:!1,itemWidth:210,itemMargin:5,minItems:2,maxItems:4})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImxvYWQiLCJmbGV4c2xpZGVyIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uTG9vcCIsIml0ZW1XaWR0aCIsIml0ZW1NYXJnaW4iLCJtaW5JdGVtcyIsIm1heEl0ZW1zIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsUUFBUUMsS0FBSyxXQVlmRixFQUFBLGVBQUFHLFlBQ0FDLFVBQUEsUUFDQUMsZUFBQSxFQUNBQyxVQUFBLElBQ0FDLFdBQUEsRUFDQUMsU0FBQSxFQUNBQyxTQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgICQoJy5mbGV4c2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBcInNsaWRlXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uTG9vcDogZmFsc2UsXHJcbiAgICAgICAgaXRlbVdpZHRoOiAyMTAsXHJcbiAgICAgICAgaXRlbU1hcmdpbjogNSxcclxuICAgICAgICBtaW5JdGVtczogMixcclxuICAgICAgICBtYXhJdGVtczogNFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICB2YXIgdG91Y2ggPSAkKCcudG91Y2gtbWVudScpO1xyXG4vLyAgICAgdmFyIG1lbnUgPSAkKCcubmF2Jyk7XHJcbi8vXHJcbi8vXHJcbi8vICAgICAkKHRvdWNoKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIG1lbnUuc2xpZGVUb2dnbGUoKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICB2YXIgd2lkID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbi8vICAgICAgICAgaWYgKHdpZCA+IDc2MCAmJiBtZW51LmlzKCc6aGlkZGVuJykpIHtcclxuLy8gICAgICAgICAgICAgbWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG4vLyB9KTsiXX0=
$(document).ready(function() {
    var touch = $('.touch-menu');
    var menu = $('.nav');


    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function() {
        var wid = $(window).width();
        if (wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});