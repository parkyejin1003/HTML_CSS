
$(function() {
    var $slides = $('.mainSlide li');
    var current = 0;
    var total = $slides.length;

    $slides.eq(current).addClass('active').show();

    function showNextSlide() {
        var next = (current + 1) % total;

        // 현재 슬라이드 왼쪽으로 이동
        $slides.eq(current).animate({ left: '-100%' }, 800, function() {
            $(this).removeClass('active').hide().css({ left: 0 });
        });

        // 다음 슬라이드 오른쪽에서 들어오게 설정
        $slides.eq(next).css({ left: '100%', display: 'block' }).addClass('active')
            .animate({ left: '0' }, 800);

        current = next;
    }

    // 3초마다 자동 슬라이드
    setInterval(showNextSlide, 3000);

    // 초기에 첫 번째 탭 활성화
    $('.tab li a').eq(0).addClass('active');
    $('.noticeContent > div').eq(0).show();

    $('.tab li a').click(function(e) {
        e.preventDefault();

        var index = $(this).parent().index();

        // 탭 활성화 스타일 변경
        $('.tab li a').removeClass('active');
        $(this).addClass('active');

        // 내용 변경
        $('.noticeContent > div').hide();
        $('.noticeContent > div').eq(index).show();
    });
});