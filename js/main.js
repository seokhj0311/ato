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

        $(".wrap").css({
            position: "static"
        });
    });

    $(".close_btn").click(function(){
        $(".sub_menu_wrap").css({
            right: '-100%'
        });

        $("body").css({
            overflowY: "unset",
            "-webkit-overflow-y": "hidden",
            "-o-overflow-y": "hidden",
            "-moz-overflow-y": "hidden",
            "-ms-overflow-y": "hidden"
        });
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