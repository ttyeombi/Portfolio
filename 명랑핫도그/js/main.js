$(document).ready(function(){

    // 햄버거 버튼 클릭
    $btnMenu.on('click',function(){
        openSideMenu();
        scrollDisable();
    });

    // 이전버튼 클릭
    $btnBack.on('click',goBack());

    // 핫도그 수량 조절
    orderCount();

});

// ■■■■■■■■■■■■ 1. 변수 선언
const $btnMenu = $('button.btn_menu');
const $navRnb = $('nav#rnb');
const $btnBack = $('.btn_back');

// ■■■■■■■■■■■■ 2. 함수 선언
function openSideMenu(){
    $btnMenu.toggleClass('open');
    $navRnb.toggleClass('open');
}

function scrollDisable(){
    $('html, body').toggleClass('hidden');
}

function goBack(){
    window.history.back();
}

function checkRadio(){ // radio 버튼 선택 시 다른 아이콘이 뜨도록
    const $btnRadio = $('input:radio[name=sugar_option]')
    const radio_checked = $('input:radio[name=sugar_option]').is(':checked'); // 체크여부 확인

    if()
    // 만약 체크되면
    // 전체 .ico_radio 버튼의 background를 선택안됨으로 표시해두고
    // 체크된 radio 버튼의 형제 선택자인 .ico_radio의 class .checked 추가
}

function addComma(num){
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp,',');
}


function orderCount(){ // 핫도그 수량 선택 함수
    var stat = $('.order_count span').text();
    var num = parseInt(stat,10);
    var cost = $('.order_cost strong').text().replace(',','');

    $('.order_result_price').text(addComma(cost));

    // console.log(cost + '원');

    const $increaseOrderCount = $('button.plus');
    const $decreaseOrderCount = $('button.minus');
    
    
    // 수량증가
    $increaseOrderCount.click(function(){
        num++;
        var orderCost = cost * num;

        $('.order_count span').text(num);
        $('.order_result_count').text(num);

        $('.order_result_price').text(addComma(orderCost));
    });
    
    // 수량감소
    $decreaseOrderCount.click(function(){
        num--;
        if(num <= 0) num = 1;
        var orderCost = cost * num;

        $('.order_count span').text(num);
        $('.order_result_count').text(num);
        
        $('.order_result_price').text(addComma(orderCost));
    });

}

