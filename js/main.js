$(document).ready(function(){
    // $(".ham_menu").click(function(){
    //     $(".sub_menu_wrap").addClass("active");
    // });

    // $(".close_btn").click(function(){
    //     $(".sub_menu_wrap").removeClass("active");
    // });
    
    
    $(".ham_menu").click(function(){
        // $(".sub_menu_wrap").css({
            //     right: 0
            // });
            
        $("body").css({
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)"
        });
        
        $(".sub_menu_wrap").css({
            right: 0
        });
    });

    $(".close_btn").click(function(){
        $(".sub_menu_wrap").css({
            right: '-100%'
        });

        $("body").css({
            position: "relative"
        });
    });

    $(".wrap").css({
        overflow: "hidden"
    });

    $(".text_5_1").focus(function () {
        $(".text_1").css({
            display: "none"
        });
    });

    $(".text_5_2").focus(function () {
        $(".text_2").css({
            display: "none"
        });
    });

    $(".text_5_3").focus(function () {
        $(".text_3").css({
            display: "none"
        });
    });

});