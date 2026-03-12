$(function(){
    //scroll
    let winHeight = $(window).height();
    let winWidth = $(window).width();
    let sectionNum = 8;
    let wheelNum = 0;
    let sectionNum2 = 2;
    let wheelNum2 = 0;

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
            crewClick=6
            leftMove=50
        }else if(winWidth<600){
            crewClick=7
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
        let ani = $('.html,body').is(':animated');
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