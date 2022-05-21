$(document).ready(function() {
    let scrollNow = window.pageYOffset;
    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        if (scroll > 400) {
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

    var containerLoader = $('.container-loader');
    console.log(containerLoader);
    var loader = $('.loader');
    
    $(window).on("pageshow", function () {  
        if (loader) {
            $('.container-loader').fadeOut(300);
        }
        document.body.style.overflowY = 'visible';
    });
});