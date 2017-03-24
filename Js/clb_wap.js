/**
 * Created by 刘先坤 on 2016/6/14.
 */
(function($){
    $(function() {
        jPanelMenu = $.jPanelMenu({
            menu: 'clb_wap_nav_left',
            trigger: '.clb_wap_nav_left_cf'
        });
        jPanelMenu.on();
    });
})(jQuery);
function formSubmit(clb) {
    document.getElementById(clb).submit();
}
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        $(".clb_wap_nav_div").css("top",top+"px");
        /*实时获取滚动条的高度，然后不断的变换absolute的top值，从而达到与fixed同等的效果*/
    });
    $(".clb_wap_nav_left_ckt").click(function(){
        $(".clb_wap_nav_left_ckt>i").toggleClass("fa-angle-down");
        $(".clb_wap_nav_left_ckt>i").toggleClass("fa-angle-up");
        $(".clb_wap_nav_left_cpk>i").attr("class","fa fa-angle-down");
        $(".clb_wap_nav_left_zx>i").attr("class","fa fa-angle-down");
        $(".clb_wap_nav_left_grzx>i").attr("class","fa fa-angle-down");
    });
    $(".clb_wap_nav_left_cpk").click(function(){
        $(".clb_wap_nav_left_cpk>i").toggleClass("fa-angle-down");
        $(".clb_wap_nav_left_cpk>i").toggleClass("fa-angle-up");
        $(".clb_wap_nav_left_ckt>i").attr("class","fa fa-angle-down");
        $(".clb_wap_nav_left_zx>i").attr("class","fa fa-angle-down");
        $(".clb_wap_nav_left_grzx>i").attr("class","fa fa-angle-down");
    });
    $(".clb_wap_nav_left_zx").click(function(){
        $(".clb_wap_nav_left_zx>i").toggleClass("fa-angle-down");
        $(".clb_wap_nav_left_zx>i").toggleClass("fa-angle-up");
        $(".clb_wap_nav_left_cpk>i").attr("class","fa fa-angle-down");
        $(".clb_wap_nav_left_ckt>i").attr("class","fa fa-angle-down");
        $(".clb_wap_nav_left_grzx>i").attr("class","fa fa-angle-down");
    });
    $(".clb_wap_nav_left_grzx").click(function(){
        $(".clb_wap_nav_left_grzx>i").toggleClass("fa-angle-down");
        $(".clb_wap_nav_left_grzx>i").toggleClass("fa-angle-up");
        $(".clb_wap_nav_left_cpk>i").attr("class","fa fa-angle-down");
        $(".clb_wap_nav_left_zx>i").attr("class","fa fa-angle-down");
        $(".clb_wap_nav_left_ckt>i").attr("class","fa fa-angle-down");

    });
});


