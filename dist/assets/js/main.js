
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("pageshow", function () {  
          
            var loader = document.querySelector('.loader');
            console.log(loader)
            if (loader) {
              let containerLoader = document.querySelector('.container-loader');
               containerLoader.style.opacity = "0";
                setTimeout(function () {
                  containerLoader.style.display = "none";
                }, 200);
            }
            document.body.style.overflowY = 'visible';
        });
      })
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

    $(".closeMenu").on("click", function () {
        $(".modal-menu").fadeOut(200);
    });
    $(".phone-menu").on("click", function () {
        $(".modal-menu").css("opacity", "0");
        $(".modal-menu").css("display", "flex");
        
        $(".modal-menu").fadeTo(200, 1);
    });
});