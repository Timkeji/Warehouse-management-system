$(function () {
    $('.iconfont').on('click', function () {
        if ($('.Pop-up-Navigation').css('display', 'none')) {
            $('.mask').show();
            $('.Pop-up-Navigation').show();
        }
    })
    $('.close').on('click', function () {
        if ($('.Pop-up-Navigation').css('display', 'block')) {
            $('.mask').hide();
            $('.Pop-up-Navigation').hide();
        }
    })
    $('.nav-middle ul li').on('click', function () {
        $('.nav-middle ul li').removeClass('current');
        $(this).addClass('current');
    })
})