$(function(){
    //scroll
    let winHeight = $(window).height();
    let winWidth = $(window).width();
    let sectionNum = 9;
    let wheelNum = 0;

    let topBannerTop = $('#topBanner').offset().top;
    let aboutUsTop = $('#aboutUs').offset().top;
    let midBannerTop = $('#midBanner').offset().top;
    let eventTop = $('#event').offset().top;
    let newsroomTop = $('#newsroom').offset().top;
    let mbiTop1 = $('.mid_banner_img1').offset().top;
    let mbiTop2 = $('.mid_banner_img2').offset().top;
    let mbiTop3 = $('.mid_banner_img3').offset().top;
    let mbiTop4 = $('.mid_banner_img4').offset().top;
    let mbiTop5 = $('.mid_banner_img5').offset().top;
    let mbiTop6 = $('.mid_banner_img6').offset().top;

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

        topBannerTop = $('#topBanner').offset().top;
        aboutUsTop = $('#aboutUs').offset().top;
        midBannerTop = $('#midBanner').offset().top;
        eventTop = $('#event').offset().top;
        newsroomTop = $('#newsroom').offset().top;
        mbiTop1 = $('.mid_banner_img1').offset().top;
        mbiTop2 = $('.mid_banner_img2').offset().top;
        mbiTop3 = $('.mid_banner_img3').offset().top;
        mbiTop4 = $('.mid_banner_img4').offset().top;
        mbiTop5 = $('.mid_banner_img5').offset().top;
        mbiTop6 = $('.mid_banner_img6').offset().top;
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
                
                console.log('#topBanner');
            }
        }

        if(scrollTop>aboutUsTop-200){  // 스크롤에 따른 about의 animate
            if($('#aboutUs').attr('data-ok')!='ok'){
                $('#aboutUs').attr('data-ok','ok');
                $('.msg_box').addClass('active');
                setTimeout(function(){
                    $('.about_us_btn a').css('opacity',1);
                },700)
                console.log('#aboutUs');
            }
        }

        if(scrollTop>midBannerTop-200){  // 스크롤에 따른 about의 animate
            if($('#midBannerTop').attr('data-ok')!='ok'){
                $('#midBannerTop').attr('data-ok','ok');
                console.log('#midBannerTop');
            }
            if($('.mid_banner_img1').attr('data-ok')!='ok'){
                $('.mid_banner_img1').attr('data-ok','ok');
                $(`.mid_banner_img1`).addClass('fix');
                $(`.mid_banner_img2`).removeClass('fix');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(0).addClass('long');
                console.log('.mid_banner_img1');
            }
        
        }

        if(scrollTop>mbiTop1-200){  // 스크롤에 따른 about의 animate
            if($('.mid_banner_img1').attr('data-ok')!='ok'){
                $('.mid_banner_img1').attr('data-ok','ok');
                $(`.mid_banner_img1`).addClass('fix');
                $(`.mid_banner_img2`).removeClass('fix');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(0).addClass('long');
                console.log('.mid_banner_img2');
            }
        }else if(scrollTop<mbiTop1-200 && scrollTop>midBannerTop-200){
                $(`.mid_banner_img1`).addClass('fix');
                $(`.mid_banner_img2`).removeClass('fix');
            }

        if(scrollTop>mbiTop2-200){  // 스크롤에 따른 about의 animate
            if($('.mid_banner_img2').attr('data-ok')!='ok'){
                $('.mid_banner_img2').attr('data-ok','ok');
                $(`.mid_banner_img1`).removeClass('fix');
                $(`.mid_banner_img2`).addClass('fix');
                $(`.mid_banner_img3`).removeClass('fix');
                $('.text1').css('opacity','0');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(1).addClass('long');
                console.log('.mid_banner_img2');
            }
        }else if(scrollTop<mbiTop2-200 && scrollTop>mbiTop1-200){
                $(`.mid_banner_img2`).removeClass('fix');
                $(`.mid_banner_img1`).addClass('fix');
                $('.text1').css('opacity','1');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(0).addClass('long');
        }

        if(scrollTop>mbiTop3-200){  // 스크롤에 따른 about의 animate
            if($('.mid_banner_img3').attr('data-ok')!='ok'){
                $('.mid_banner_img3').attr('data-ok','ok');
                $(`.mid_banner_img2`).removeClass('fix');
                $(`.mid_banner_img3`).addClass('fix');
                $(`.mid_banner_img4`).removeClass('fix');
                $('.text2').css('opacity','0');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(2).addClass('long');
                console.log('.mid_banner_img3');
            }
        }else if(scrollTop<mbiTop3-200 && scrollTop>mbiTop2-200){
                $(`.mid_banner_img3`).removeClass('fix');
                $(`.mid_banner_img2`).addClass('fix');
                $('.text2').css('opacity','1');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(1).addClass('long');
        }

        if(scrollTop>mbiTop4-200){  // 스크롤에 따른 about의 animate
            if($('.mid_banner_img4').attr('data-ok')!='ok'){
                $('.mid_banner_img4').attr('data-ok','ok');
                $(`.mid_banner_img3`).removeClass('fix');
                $(`.mid_banner_img4`).addClass('fix');
                $(`.mid_banner_img5`).removeClass('fix');
                $('.text3').css('opacity','0');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(3).addClass('long');
                console.log('.mid_banner_img4');
            }
        }else if(scrollTop<mbiTop4-200&&scrollTop>mbiTop3-200){
                $(`.mid_banner_img4`).removeClass('fix');
                $(`.mid_banner_img3`).addClass('fix');
                $('.text3').css('opacity','1');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(2).addClass('long');
        }

        if(scrollTop>mbiTop5-200){  // 스크롤에 따른 about의 animate
            if($('.mid_banner_img5').attr('data-ok')!='ok'){
                $('.mid_banner_img5').attr('data-ok','ok');
                $(`.mid_banner_img4`).removeClass('fix');
                $(`.mid_banner_img5`).addClass('fix');
                $(`.mid_banner_img6`).removeClass('fix');
                $('.text4').css('opacity','0');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(4).addClass('long');
                console.log('.mid_banner_img5');
            }
        }else if(scrollTop<mbiTop5-200 && scrollTop>mbiTop4-200){
                $(`.mid_banner_img5`).removeClass('fix');
                $(`.mid_banner_img4`).addClass('fix');
                $('.text4').css('opacity','1');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(3).addClass('long');
        }
        
        if(scrollTop>mbiTop6-200){  // 스크롤에 따른 about의 animate
            if($('.mid_banner_img6').attr('data-ok')!='ok'){
                $('.mid_banner_img6').attr('data-ok','ok');
                $(`.mid_banner_img6`).addClass('fix');
                $('.text5').css('opacity','0');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(5).addClass('long');
            }
        }else if(scrollTop<mbiTop6-200&&scrollTop>mbiTop5-200){
                $(`.mid_banner_img6`).removeClass('fix');
                $(`.mid_banner_img5`).addClass('fix');
                $('.text5').css('opacity','1');
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(4).addClass('long');
        }else if(scrollTop==mbiTop6-200){
            if($('.mid_banner_img6').attr('data-ok')!='ok'){
                $('.mid_banner_controls li').removeClass('long');
                $('.mid_banner_controls li').eq(5).addClass('long');
            }
        }

        if(scrollTop>eventTop-200){  // 스크롤에 따른 about의 animate
            if($('#event').attr('data-ok')!='ok'){
                $('#event').attr('data-ok','ok');
                console.log('#event');
                $('.event_img').css('height', '60vh').css('max-width', '75%').css('margin', '20vh auto').css('border-radius','500px')
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

    //mid_banner_img
    $('.ctrl').click(function(){
        var long = $('.ctrl').index(this);
        $(`.ctrl`).removeClass('long');
        $(`.ctrl:eq(` + long + `)`).addClass('long');
        
        $(`.mid_banner li`).removeClass('fix');
        $(`.mid_banner li:eq(` + long + `)`).addClass('fix');
        $('.text' + long-1).css('opacity','0');
        
        let mid_img = $('.mid_banner_img'+long).offset().top;
        scrollTop = mid_img;
        wheelNum = long + 2;
        $('.mid_banner_img'+long).attr('data-ok','ok');
        $('html, body').stop().animate({scrollTop:mid_img},1000);
    })
})

//mid_banner_img
