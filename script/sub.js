$(function(){
    //scroll
    let winHeight = $(window).height();
    let winWidth = $(window).width();
    let sectionNum = 8;
    let wheelNum = 0;

    let CJaboutUsListTop = $('#CJaboutUsList').offset().top;
    let out_list1Top = $('.out_list1').offset().top;
    let out_list2Top = $('.out_list1').offset().top;
    let CJaboutUsList2Top = $('#CJaboutUsList2').offset().top;
    let in_list1Top = $('.in_list1').offset().top;
    let in_list2Top = $('.in_list2').offset().top;
    let in_list3Top = $('.in_list3').offset().top;
    let mvcTop = $('#mvc').offset().top;
    let mvc_list1Top = $('.mvc_list1').offset().top;
    let mvc_list2Top = $('.mvc_list2').offset().top;
    let mvc_list3Top = $('.mvc_list3').offset().top;
    let aboutSummaryTop = $('#aboutSummary').offset().top;

    let scrollTop

    let crewCnt = 1
    let leftMove = 1
    
    $(window).resize(function(){ //화면의 크기가 변하면
        winHeight = $(window).height(); // 화면의 높이를 다시 받고
        $('html').scrollTop(winHeight*wheelNum);
        winWidth = $(window).width();
        if(winWidth>800){
            crewCnt=5
            leftMove=33.333
        }else if(winWidth>600 && winWidth<801){
            crewCnt=6
            leftMove=50
        }else if(winWidth<600){
            crewCnt=7
            leftMove=1
        }

        CJaboutUsListTop = $('#CJaboutUsList').offset().top;
        out_list1Top = $('.out_list1').offset().top;
        out_list2Top = $('.out_list2').offset().top;
        CJaboutUsList2Top = $('#CJaboutUsList2').offset().top;
        in_list1Top = $('.in_list1').offset().top+$('.in_list1').height;
        in_list2Top = $('.in_list2').offset().top;
        in_list3Top = $('.in_list3').offset().top;
        mvcTop = $('#mvc').offset().top;
        mvc_list1Top = $('.mvc_list1').offset().top;
        mvc_list2Top = $('.mvc_list2').offset().top;
        mvc_list3Top = $('.mvc_list3').offset().top;
        aboutSummaryTop = $('#aboutSummary').offset().top;
    })

    function wheelEvent(num){
        if(winWidth>1200){
            $('html,body').animate({scrollTop:winHeight*num},500);
        }else if(winWidth>800 && winWidth<1201){
            $('html,body').animate({scrollTop:winHeight*num},500);
        }else if(winWidth>600 && winWidth<801){
            $('html,body').animate({scrollTop:winHeight*num},500);
        }else{
            $('html,body').animate({scrollTop:winHeight*num},500);
        }
    }

    $('.about_index').on('mousewheel DOMMouseScroll',function(e){
        let ani = $('html,body').is(':animated');
        if(ani==false){
            if(e.originalEvent.wheelDelta>0){
            wheelNum--;
            if(wheelNum<0){
                wheelNum=0
            }else{
                wheelEvent(wheelNum);
                console.log(wheelNum);
            }
            }else{
            wheelNum++;
            if(wheelNum>sectionNum){
                wheelNum=sectionNum
            }else{
                wheelEvent(wheelNum);
                console.log(wheelNum);
            }
            }
        }
    })
    
    let ticking = false;

    $(window).on("scroll", function(){

        let scrollTop = $(window).scrollTop()
        
        if(scrollTop>CJaboutUsListTop-200){  // 스크롤에 따른 about의 animate
            if($('#CJaboutUsList').attr('data-ok')!='ok'){
                $('#CJaboutUsList').attr('data-ok','ok');
                console.log('#CJaboutUsList');
            }
        }

        if(scrollTop>out_list1Top-200){  // 스크롤에 따른 about의 animate
            if($('.out_list1').attr('data-ok')!='ok'){
                $('.out_list1').attr('data-ok','ok');
                console.log('.out_list1');
            }
        }

        if(scrollTop>out_list2Top-200){  // 스크롤에 따른 about의 animate
            if($('.out_list2').attr('data-ok')!='ok'){
                $('.out_list2').attr('data-ok','ok');
                $('.v_line').css('height','150px')
                $('.out_list2 div h2').removeClass('red');
                setTimeout(function(){
                    $('.out_list2 div h2').addClass('red');
                },500)
                console.log('.out_list2');
            }
        }

        if(!ticking){
            window.requestAnimationFrame(function(){
                let section = $("#CJaboutUsList2");
                let scrollTop = $(window).scrollTop();
                let sectionTop = section.offset().top;
                let sectionHeight = section.outerHeight();
                let progress = scrollTop - sectionTop;

                if(progress < 0) progress = 0;
                if(progress > sectionHeight) progress = sectionHeight;

                let percent = progress / sectionHeight;
                let move = percent*1.5 * 66.66;

                $(".list_down").css("transform","translate3d(0,-"+move+"%,0)");
                $(".list_up").css("transform","translate3d(0,"+(-66.66+move)+"%,0)");

                ticking = false;
            });

            ticking = true;
        }
    });

    $('.about_summary_wrap a').click(function () {return false;});
});

$(function(){
    //scroll
    let winHeight = $(window).height();
    let winWidth = $(window).width();
    let sectionNum = 3;
    let wheelNum = 0;

    let brandBannerTop = $('#brandBanner').offset().top;
    let brand_list1Top = $('.brand_list1').offset().top;
    let brand_list2Top = $('.brand_list2').offset().top;
    let brand_list3Top = $('.brand_list3').offset().top;
    let brandTop = $('#brand').offset().top;
    
    let scrollTop

    let crewCnt = 1
    let leftMove = 1
    
    
    
    
    $(window).resize(function(){ //화면의 크기가 변하면
        winHeight = $(window).height(); // 화면의 높이를 다시 받고
        $('html').scrollTop(winHeight*wheelNum);
        winWidth = $(window).width();
        if(winWidth>800){
            crewCnt=5
            leftMove=33.333
        }else if(winWidth>600 && winWidth<801){
            crewCnt=6
            leftMove=50
        }else if(winWidth<600){
            crewCnt=7
            leftMove=1
        }

        brandBannerTop = $('#brandBanner').offset().top;
        brand_list1Top = $('.brand_list1').offset().top;
        brand_list2Top = $('.brand_list2').offset().top;
        brand_list3Top = $('.brand_list3').offset().top;
        brandTop = $('#brand').offset().top;
    })

    function wheelEvent(num){
        if(winWidth>1200){
            $('html,body').animate({scrollTop:winHeight*num},500);
        }else if(winWidth>800 && winWidth<1201){
            $('html,body').animate({scrollTop:winHeight*num},500);
        }else if(winWidth>600 && winWidth<801){
            $('html,body').animate({scrollTop:winHeight*num},500);
        }else{
            $('html,body').animate({scrollTop:winHeight*num},500);
        }
    }

    $(window).on('mousewheel DOMMouseScroll',function(e){
        let ani = $('html,body').is(':animated');
        if(ani==false){
            if(e.originalEvent.wheelDelta>0){
            wheelNum--;
            if(wheelNum<0){
                wheelNum=0
            }else{
                wheelEvent(wheelNum);
                console.log(wheelNum);
            }
            }else{
            wheelNum++;
            if(wheelNum>sectionNum){
                wheelNum=sectionNum
            }else{
                wheelEvent(wheelNum);
                console.log(wheelNum);
            }
            }
        }
    })

    $(window).on("scroll", function(){

        let scrollTop = $(window).scrollTop()
        
        $('.brand_banner').css('width','100%').css('height','100%').css('border-radius', '0rem');
        $('.brand_banner img').css('opacity','0');
        $('.brand_list2 p span').css('color','#212121');
        $('.brand_list3 p span').css('color','#212121');
        
        
        if(scrollTop<=brandBannerTop+10){  // 스크롤에 따른 about의 animate
            setTimeout(function(){
                $('.brand_banner').css('width','80%').css('height','80%').css('border-radius', '25rem');
            },0)
            setTimeout(function(){
                $('.brand_banner img').css('opacity','1');
            },700)
        }
        if(scrollTop>brand_list1Top-200){  // 스크롤에 따른 about의 animate
            if($('.brand_list1').attr('data-ok')!='ok'){
                $('.brand_list1').attr('data-ok','ok');
                console.log('.brand_list1');
            }
        }
        if(scrollTop>brand_list2Top-200){  // 스크롤에 따른 about의 animate
            $('.brand_list2 p span').css('color','#212121')
            setTimeout(function(){
                $('.brand_list2 p span').css('color','#FF9700')
            },300)
            console.log('.brand_list2');
        }
        if(scrollTop>brand_list3Top-200){  // 스크롤에 따른 about의 animate
            $('.brand_list3 p span').css('color','#212121')
            setTimeout(function(){
                $('.brand_list3 p span').css('color','#FF9700')
            },300)
            $('.brands li').css('opacity','0');
            console.log('.brand_list3');
        }
        if(scrollTop>brandTop-200){  // 스크롤에 따른 about의 animate
            let idx = 0;
            
            setInterval(brand, 200);
            
            function brand(){
                let brands = $('.brands li');

                brands.eq(idx).css('opacity','1');
                idx++;
                if(idx >= brands.length){
                    idx = brands.length;
                }
            }
        }
    });

    $(document).ready(function(){
        setTimeout(function(){
            $('.brand_banner').css('width','80%').css('height','80%').css('border-radius', '25rem');
        },500)
        setTimeout(function(){
            $('.brand_banner img').css('opacity','1');
        },1200)
    })

    $('#brand div ul li a').click(function () {return false;});
});