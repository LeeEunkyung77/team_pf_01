$(function(){
    //scroll
    let winHeight = $(window).height();
    let winWidth = $(window).width();
    let sectionNum = 4;
    let wheelNum = 0;

    let topBannerTop = $('#topBanner').offset().top;
    let aboutUsTop = $('#aboutUs').offset().top;
    let midBannerTop = $('#midBanner').offset().top;
    let eventTop = $('#event').offset().top;
    let newsroomTop = $('#newsroom').offset().top;

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
            leftMove=100
        }

        topBannerTop = $('#topBanner').offset().top;
        aboutUsTop = $('#aboutUs').offset().top;
        midBannerTop = $('#midBanner').offset().top;
        eventTop = $('#event').offset().top;
        newsroomTop = $('#newsroom').offset().top;
    })

    function wheelEvent(num){
        if(winWidth>1200){
            $('html,body').animate({scrollTop:winHeight*num},500);
        }else if(winWidth>800 && winWidth<1201){
            $('html,body').animate({scrollTop:800*num},500);
        }else if(winWidth>600 && winWidth<801){
            $('html,body').animate({scrollTop:640*num},500);
        }else{
            $('html,body').animate({scrollTop:360*num},500);
        }
    }

    $('.index').on('mousewheel DOMMouseScroll',function(e){
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

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop()

        if(scrollTop>topBannerTop-200){  // 스크롤에 따른 about의 animate
            if($('#topBanner').attr('data-ok')!='ok'){
                $('#topBanner').attr('data-ok','ok');
                $('.msg_box').removeClass('active');
                $('.about_us_btn a').css('opacity',0);
                
                console.log('#topBanner');
            }
        }

        if(scrollTop>aboutUsTop-200){  // 스크롤에 따른 about의 animate
            if($('#aboutUs').attr('data-ok')!='ok'){
                $('#aboutUs').attr('data-ok','ok');
                $('.msg_box').addClass('active');
                setTimeout(function(){
                    $('.about_us_btn a').css('opacity',1);
                },1300)
                console.log('#aboutUs');
            }
        }

        if(scrollTop>midBannerTop-200){  // 스크롤에 따른 about의 animate
            if($('#midBanner').attr('data-ok')!='ok'){
                $('#midBanner').attr('data-ok','ok');
                console.log('#midBanner');
            }
        }

        if(scrollTop>eventTop-200){  // 스크롤에 따른 about의 animate
            if($('#event').attr('data-ok')!='ok'){
                $('#event').attr('data-ok','ok');

                console.log('#event');
            }
        }

        if(scrollTop>newsroomTop-200){  // 스크롤에 따른 about의 animate
            if($('#newsroom').attr('data-ok')!='ok'){
                $('#newsroom').attr('data-ok','ok');
                console.log('#newsroom');
            }
        }
    })

//topBanner
    $(function(){
        let next_count = 0;
        $('.next_btn').click(function(){
            next_count++;
            if(next_count==0){
                $('.top_text').html('건강과 안전을 최우선으로<br>Nature to Table,<br>세계의 모든 식탁이 K-Food로 즐거워집니다');
            }
            if(next_count==1) {
                $('.top_text').html('온라인 접점에서 한식을 설계하다<br>영국에서 비비고를 전하는 Faye Min')
            }else if(next_count==2) {
                $('.top_text').html(`CJ제일제당, 생분해성 바이오소재<br>'PHA'산업계 전반 상용화 속도...<br>글로벌 기업까지 잇단 러브콜`)
            }else if(next_count==3) {
                $('.top_text').html('CJ마켓이<br>건강하고 편리한<br>식생활을 만들어갑니다')
            }else if(next_count==4){
                next_count = 0;
                $('.top_text').html('온라인 접점에서 한식을 설계하다<br>영국에서 비비고를 전하는 Faye Min')
            }
            $('#topBanner').css('background-image','url(img/TopBenner_'+(next_count)+'.jpg)')
            $('#topBanner ul li').css('right',`${next_count*1240}px`);
            $('.cnt').text(next_count+1);
        })
        setInterval(function(){
            $('.next_btn').trigger('click');
        },7000);

        $('.prev_btn').click(function(){
            next_count--;
            if(next_count<0){
                next_count = 3;
                $('.top_text').html('CJ마켓이<br>건강하고 편리한<br>식생활을 만들어갑니다')
            }else if(next_count==0){
                $('.top_text').html('건강과 안전을 최우선으로<br>Nature to Table,<br>세계의 모든 식탁이 K-Food로 즐거워집니다');
            }
            if(next_count==1) {
                $('.top_text').html('온라인 접점에서 한식을 설계하다<br>영국에서 비비고를 전하는 Faye Min')
            }else if(next_count==2) {
                $('.top_text').html(`CJ제일제당, 생분해성 바이오소재<br>'PHA'산업계 전반 상용화 속도...<br>글로벌 기업까지 잇단 러브콜`)
            }else if(next_count==3) {
                $('.top_text').html('CJ마켓이<br>건강하고 편리한<br>식생활을 만들어갑니다')
            }
            $('#topBanner').css('background-image','url(img/TopBenner_'+(next_count)+'.jpg)')
            $('#topBanner ul li').css('right',`${next_count*1240}px`);
            $('.cnt').text(next_count+1);
        })
    })
})