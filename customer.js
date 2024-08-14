$(document).ready(function(){
    $(".tab_menu>li").click(function(){
        let list = $(this).index();
        $(".customer_gp>div").stop().fadeOut(300);
        $(".customer_gp>div").eq(list).stop().fadeIn(300);

        $(".tab_menu>li").removeClass("on");
        $(".tab_menu>li").eq(list).addClass("on");

        $(".title_gp").removeClass("active").siblings().slideUp();
    });
    $(".title_gp").click(function(){
        if($(this).hasClass("active")){
            $(".title_gp").removeClass("active").siblings().slideUp();
            // $(".m_title").siblings().slideUp();
        }else{
            $(".title_gp").removeClass("active").siblings().slideUp();
            $(this).addClass("active").siblings().slideDown();
        }
    });

    $(".site_bt").click(function(e){
        e.preventDefault();
        // $(".site_link").stop().slideUp();
    });
    $(".site_bt").click(function(){
        $(".site_link").toggle();
        $(".fa-chevron-down").toggle();
        $(".fa-chevron-up").toggle();
    });
    $(window).click(function (e) {
        const isFamMenu = Boolean(e.target.closest(".site_bt"));
        if (!isFamMenu) {
            $(".site_link").hide();
            $(".fa-chevron-up").hide();
            $(".fa-chevron-down").show();
        }
    });


    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $(".top").stop().fadeIn(0)
        }else{
            $(".top").stop().fadeOut(0)
        }
    
    });

    $(".top").click(function(){
        $("html,body").stop().animate({"scrollTop":"0px"},500);
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $(".top").stop().fadeIn(0)
        }else{
            $(".top").stop().fadeOut(0)
        }
    
    });
});