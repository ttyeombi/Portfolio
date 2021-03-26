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

    // orderPrice();
    orderlistDelete();

    // 준비중인 페이지
    print_alert($('#pickUp>ul>li:last-of-type')); // pickup.html > 지역/매장명 찾기
    print_alert($('#pickUp section li')); // pickup.html > 검색결과 매장 리스트 클릭

    // cartTab();
    printCountList($('#pickUp>.section>section>ul'),$('#result_cnt'));

    // 근처 매장 번호, href 조정
    storeTel('#pickUp .info .t_desc:last-of-type');

    ttt();
});

// ■■■■■■■■■■■■ 1. 변수 선언
const $btnMenu = $('button.btn_menu');
const $navRnb = $('nav#rnb');
const $btnBack = $('.btn_back');
const $logo = $('.logo');
const $loginCheck = $('.auto_login_chk label');
const $loginCheckBox = $('.auto_login_chk .chk');

// ■■■■■■■■■■■■ 2. 함수 선언
function ttt(){
    $loginCheck.on('click',function(){
        $loginCheckBox.toggleClass('checked');
    });
    $loginCheckBox.on('click',function(){
        $loginCheckBox.toggleClass('checked');
    })
}

function print_alert(e){ // 준비중 alert();
    e.on('click',function(){
        alert('준비중입니다.');
    });
}

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

function checkRadio(){ // radio 버튼 선택 시 다른 아이콘이 뜨도록 (작성중)
    const $btnRadio = $('input:radio[name=sugar_option]')
    const radio_checked = $('input:radio[name=sugar_option]').is(':checked'); // 체크여부 확인

    // if()
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
    $increaseOrderCount.on('click',function(){
        num++;
        var orderCost = cost * num;

        $('.order_count span').text(num);
        $('.order_result_count').text(num);

        $('.order_result_price').text(addComma(orderCost));
    });
    
    // 수량감소
    $decreaseOrderCount.on('click',function(){
        num--;
        if(num <= 0) num = 1;
        var orderCost = cost * num;

        $('.order_count span').text(num);
        $('.order_result_count').text(num);
        
        $('.order_result_price').text(addComma(orderCost));
    });
}

// function cartTab(){
//     const   $ordertypeTabMenu = $('.order_type').children('li'),
//             $ordertypeCart = $('.cart');

//     $ordertypeTabMenu.on('click',function(){
//         const tab_id = $(this).attr('data-tab');

//         $ordertypeTabMenu.removeClass('on');
//         $ordertypeCart.removeClass('on');

//         $(this).addClass('on');
//         $('#'+tab_id).addClass('on');
//     });
// }


// function orderPrice(){ // 핫도그 주문 금액(장바구니) 함수
//     const $li = $('.order_list').children('li');

//     $li.each(function(i,li){
//         var $order_price = $(li).find('.order_price .red').text().replace(',','');
//         var $order_price_num = parseInt($order_price,10);
//         var length_li = $(li).find('.order_price .red').length();
//         console.log($order_price_num);
//         console.log(length_li);

//     })
// }

function orderlistDelete(){ // 장바구니 리스트 목록 제거
    const $btnDelete = $('.btn_delete');
    $btnDelete.on('click',function(){
        if(confirm('장바구니에서 해당 상품을 삭제하시겠습니까?')){
            $(this).parent('li.flex').remove();
            alert('상품을 삭제하였습니다.');
        }
    });
}

function printCountList(list,printEl){ // 개수 카운트 후 자식li의 length값 표시 함수
    const list_num = list.find('li').length;
    printEl.html(list_num);
}

function storeTel(li,tel){
    

    // const $storeTel = $(tel).text();
    // $(tel).attr('href',$storeTel);
    // console.log($storeTel);
}