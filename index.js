$(document).ready(function(){
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
    



    let i = 0;
    let count = $(".ban_txt>li").length;

    
    $(".ban_txt>li").stop().fadeOut();
    $(".ban_txt>li").eq(i).stop().fadeIn(500,function(){
        $(".txt_gp").stop().animate({"top":"0px"});
        $(".txt_down>p").stop().animate({"top":"0px"});
    });

    $(".next").click(function(){
        $(".ban_photo").stop().animate({"margin-top":"-200vh"},800,function(){
            $(".ban_photo>li:first-child").appendTo(".ban_photo");
            $(".ban_photo").css({"margin-top":"-100vh"});

            if(i == count - 1){
                i = 0;
            }else{
                i++;
            }

            $(".txt_gp").css({"top":"-211px"});
            $(".txt_down>p").css({"top":"-111px"});
            $(".ban_txt>li").stop().fadeOut();
            $(".ban_txt>li").eq(i).stop().fadeIn(500,function(){
                $(".txt_gp").stop().animate({"top":"0px"});
                $(".txt_down>p").stop().animate({"top":"0px"});
            });
        });
    });

    $(".prev").click(function(){
        $(".ban_photo").stop().animate({"margin-top":"0vh"},800,function(){
            $(".ban_photo>li:last-child").prependTo(".ban_photo");
            $(".ban_photo").css({"margin-top":"-100vh"});
        });

        if(i == 0){
            i = count - 1;
        }else{
            i--;
        }
        $(".txt_gp").css({"top":"-211px"});
        $(".txt_down>p").css({"top":"-111px"});
        $(".ban_txt>li").stop().fadeOut();
        $(".ban_txt>li").eq(i).stop().fadeIn(500,function(){
            $(".txt_gp").stop().animate({"top":"0px"});
            $(".txt_down>p").stop().animate({"top":"0px"});
        });
    });

    setInterval(function(){
        $(".ban_photo").stop().animate({"margin-top":"-200vh"},800,function(){
            $(".ban_photo>li:first-child").appendTo(".ban_photo");
            $(".ban_photo").css({"margin-top":"-100vh"});

            if(i == count - 1){
                i = 0;
            }else{
                i++;
            }

            $(".txt_gp").css({"top":"-211px"});
            $(".txt_down>p").css({"top":"-111px"});
            $(".ban_txt>li").stop().fadeOut();
            $(".ban_txt>li").eq(i).stop().fadeIn(500,function(){
                $(".txt_gp").stop().animate({"top":"0px"});
                $(".txt_down>p").stop().animate({"top":"0px"});
            });
        });
    },3000);




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

