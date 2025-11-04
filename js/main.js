$(document).ready(function(){
    // $(".ham_menu").click(function(){
    //     $(".sub_menu_wrap").addClass("active");
    // });

    // $(".close_btn").click(function(){
    //     $(".sub_menu_wrap").removeClass("active");
    // });

    $(".ham_menu").click(function(){
        $(".sub_menu_wrap").css({
            right: 0
        });

        $("body").css({
            overflowY: "hidden"
        });
    });

    $(".close_btn").click(function(){
        $(".sub_menu_wrap").css({
            right: '-100%'
        });

        $("body").css({
            overflowY: "none"
        });
    });

});