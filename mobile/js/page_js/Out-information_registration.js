var SERVER_PATH = 'http://bread.varsion.cn/'
var code = '123456'  //该js需要code
$(function () {
    $('#btn').on('click', function () {
        if ($('#outcometime input').val() == '' || $('#outcometime input').val() == null) {
            // alert('申请实验室名称不得为空');
            $('#outcometime p').html('时间不得为空')
        } else {
            $('#site-name p').html('');
        }

        if ($('#outcomefrom input').val() == '' || $('#outcomefrom input').val() == null) {
            $('#outcomefrom p').html('派发地点不得为空')
        } else {
            $('#site-num p').html('')
        }

        if ($('#outcomemsman input').val() == '' || $('#outcomemsman input').val() == null) {
            $('#outcomemsman p').html('仓库管理员不得为空')
        } else {
            $('#outcomemsman p').html('')
        }

        // if ($('#site-class select').val() == '' || $('#site-class select').val() == null) {
        //     // alert(11)
        //     $('#site-class p').html('学生班级不得为空')
        // } else {
        //     $('#site-class p').html('')
        // }

        if ($('#outcomemsmannb input').val() == '' || $('#outcomemsmannb input').val() == null) {
            $('#outcomemsmannb p').html('管理员工号不得为空')
        } else {
            $('#outcomemsmannb p').html('')
        }

        if ($('#outcomemannb input').val() == ''  ) {
            $('#outcomemannb p').html('工人工号不得为空')
        } else {
            $('#outcomemannb p').html('')
        }
        if ($('#outcomeitname input').val() == '' ) {
            $('#outcomeitname p').html('产品名字不得为空')
        } else {
            $('#outcomeitname p').html('')
        }
        if ($('#outcomeitnb input').val() == '' ) {
            $('#outcomeitnb p').html('数量不得为空')
        } else {
            $('#outcomeitnb p').html('')
        }

        if ($('#outcomevary input').val() == '' ) {
            $('#outcomevary p').html('工人工号不得为空')
        } else {
            $('#outcomevary p').html('')
        }



        if ($('input').val() != '' && $('input').val() != null) {
            $('.mask').show();
            $('.site').show();
        }

    })
    $('.cancel').on('click', function () {
        $('.mask').hide();
        $('.site').hide();
    })
    $('.nocancel').on('click', function () {
        $('.site').hide();

    })
    $(".determine").on('click', function () {
        $('.success-alert').hide();
        $('.failure-alert').hide();
        $('.mask').hide();
    })


})

