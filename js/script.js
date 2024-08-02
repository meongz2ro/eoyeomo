$(function () {
    // ♡ -- 개별 메뉴

    // <메뉴에 마우스 올렸을 때>
    $('.menu > li').on('mouseenter', function () {
        // 모든 서브 메뉴 숨김
        $('.menu > li > .sub').hide();
        // 현재 메뉴의 서브 메뉴 선택
        var $subMenu = $(this).find('.sub');
        // 서브 메뉴가 존재하는 경우에만 표시
        if ($subMenu.length) {
            $subMenu.show();
        }
    });

    // <메뉴에서 마우스 뗐을 때>
    $('.menu > li').on('mouseleave', function () {
        $(this).find('.sub').hide();
    });


    // ♡ -- 토글 메뉴

    // <토글 버튼 누르면 사이드 메뉴 보이기>
    $("#m_toggle").click(function (){
        $("#m_menu").show(300);
    });

    // <닫기 버튼 누르면 사이드 메뉴 숨기기>
    $("#close").click(function (){
        $("#m_menu").hide(300);
    });
});