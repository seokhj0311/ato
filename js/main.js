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
            overflowY: "unset",
            "-webkit-overflow-x": "hidden",
            "-o-overflow-x": "hidden",
            "-moz-overflow-x": "hidden",
            "-ms-overflow-x": "hidden"
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