$(document).ready(function() {
    let scrollNow = window.pageYOffset;
    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".topheader").addClass("topheader-with-background");
        } else {
            $(".topheader").removeClass("topheader-with-background");
        }
        if(scrollNow > scroll) {
            $(".topheader").css("transform", "translateY(0)");
        }else{
            $(".topheader").css("transform", "translateY(-100%)");
        }
        scrollNow = scroll;
    });
   
    
    
    $(window).on("pageshow", function () {  
        var loader = $('.loader');
        if (loader) {
            $('.container-loader').fadeOut(300);
        }
        document.body.style.overflowY = 'visible';
    });

    $(".closeMenu").on("click", function () {
        $(".modal-menu").fadeOut(200);
    });
    $(".phone-menu").on("click", function () {
        $(".modal-menu").css("opacity", "0");
        $(".modal-menu").css("display", "flex");
        
        $(".modal-menu").fadeTo(200, 1);
    });
});