var SERVER_PATH = 'http://project.phonbe.cn/'
// var userToken = window.localStorage.getItem("yq_token");
var userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wcm9qZWN0LnBob25iZS5jblwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwNTYwNzgzOCwiZXhwIjoxNjA1NjExNDM4LCJuYmYiOjE2MDU2MDc4MzgsImp0aSI6IlNxWHJPZjNMZU44U1BXd2oiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ktX5ZcMBV4jnYfr0VIMrYX7uIGHKTvAjW2MBb5oABAI'
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



        // if ($('input').val() != '' && $('input').val() != null) {
        //     $('.mask').show();
        //     $('.site').show();
        // }

    })



})


$(document).ready(function (){
    $.get(SERVER_PATH+'api/superadmin/wareinformationdrop',function (data){
        console.log(data)
        let Str = ''
        if (data.code == 200){
            Str = `<select id="warehouse_name" name="warehouse_name" >`
            for (var i = 0;i < data.data.length;i++){
                Str += `
                              <option value="${data.data[i].name}">${data.data[i].name}</option>
                         
                  `
            }
            Str +=`</select>`
            $('#site-class').empty().append(Str)
        }
    })

})

function tijiao1() {
    var a = document.getElementById('product_name').value;
    var b = document.getElementById('warehouse_name').value;
    var c = document.getElementById('worker_id').value;
    var d = document.getElementById('product_id').value;
    var e = document.getElementById('product_num').value;
    var f = document.getElementById('send_place').value;
    $.ajax({
        async: false,
        type: 'POST',
        url: SERVER_PATH+'api/lowadmin/writeshipment',
        data: {
            warehouse_name:b,
            worker_id:c,
            product_name:a,
            product_id:d,
            product_num:e,
            send_place:f,
            token:userToken
        },
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        datatype: 'json',
        success:function (data){
            console.log(data)
            if (data.code == 200){
                console.log('success')
                alert("提交成功")
            }
            if (data.code == 100){
                console.log("fail")
            }
        },
        error:function (data){
            alert('错误')
            console.log('错误')
        }
    })
}