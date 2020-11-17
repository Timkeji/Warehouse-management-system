var SERVER_PATH = 'http://bread.varsion.cn/'
var code = '123456'  //该js需要code
$(function () {
    $('#btn').on('click', function () {
        if ($('#incometime input').val() == '' || $('#incometime input').val() == null) {
            // alert('申请实验室名称不得为空');
            $('#incometime p').html('时间不得为空')
        } else {
            $('#site-name p').html('');
        }

        if ($('#incomefrom input').val() == '' || $('#incomefrom input').val() == null) {
            $('#incomefrom p').html('派发地点不得为空')
        } else {
            $('#site-num p').html('')
        }

        if ($('#incomemsman input').val() == '' || $('#incomemsman input').val() == null) {
            $('#incomemsman p').html('仓库管理员不得为空')
        } else {
            $('#incomemsman p').html('')
        }

        // if ($('#site-class select').val() == '' || $('#site-class select').val() == null) {
        //     // alert(11)
        //     $('#site-class p').html('学生班级不得为空')
        // } else {
        //     $('#site-class p').html('')
        // }

        if ($('#incomemsmannb input').val() == '' || $('#incomemsmannb input').val() == null) {
            $('#incomemsmannb p').html('管理员工号不得为空')
        } else {
            $('#incomemsmannb p').html('')
        }

        if ($('#incomemannb input').val() == ''  ) {
            $('#incomemannb p').html('工人工号不得为空')
        } else {
            $('#incomemannb p').html('')
        }
        if ($('#incomeitname input').val() == '' ) {
            $('#incomeitname p').html('产品名字不得为空')
        } else {
            $('#incomeitname p').html('')
        }
        if ($('#incomeitnb input').val() == '' ) {
            $('#incomeitnb p').html('数量不得为空')
        } else {
            $('#incomeitnb p').html('')
        }

        if ($('#incomevary input').val() == '' ) {
            $('#incomevary p').html('工人工号不得为空')
        } else {
            $('#incomevary p').html('')
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

/**
 * 方法作用 填报实验室借用申请实验室名称展示
 * 请求接口 api/fill/filllabnamedis
 * @author huweichen <github.com/nathaniel-kk>
 */
