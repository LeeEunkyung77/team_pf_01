$(function(){

    //카테고리 인덱스
    $('#header .gnb li').each(function(index){
      let bgColor = ['#f00', '#f30', '#f60', '#f90', '#fc0', '#fff']

      $(this).mouseenter(function(){
      $('.sub_menu_inner>li').eq(index).css('display', 'flex').siblings().css('display', 'none')
      $('.sub_menu_wrap').stop().fadeIn().css('display', 'block')
      $('.sub_menu_right').eq(index).css('background-color', bgColor[index])
      })
      
      $('.sub_menu_wrap').mouseleave(function(){
        $('.sub_menu_wrap').stop().fadeOut(400)
        $('.sub_menu_detail>li').css('display', 'none')
      })
    })
    

    //서브메뉴 더보기
    $('.sub_menu_list li.sub_more').each(function(index){
      $(this).mouseenter(function(){
        $('.sub_menu_detail>li').eq(index).css('display', 'block').siblings().css('display', 'none')
      })
      $('.sub_menu_list li').not('li.sub_more').mouseenter(function(){
        $('.sub_menu_detail>li').css('display', 'none')
      })
    })

    $('.sub_menu_list>li').mouseenter(function(){
      $(this).css('background-color', '#FF9700').siblings().css('background-color', '#fff')
    })
})