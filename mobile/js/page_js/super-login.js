var SERVER_PATH = 'http://project.phonbe.cn'
$(function() {
    $('#super-button').on('click', function() {
        if($('#account').val() == '' || $('#paw').val() == null) {
            alert('账号不得为空！')
        }
        if($('#paw').val() == '' || $('#paw').val() == null) {
            alert('密码不得为空！')
        }
        if($('#account').val() != '' || $('#paw').val() != null && $('#paw').val() != '' || $('#paw').val() != null) {
        }
    })
})

function hwc_login(){
    var management_id = document.getElementById('account').value
    var password = document.getElementById('paw').value
    $.ajax({
        async: false,
        type: "POST",
        url:SERVER_PATH+'/api/auth/adminlogin',
        data: {management_id:management_id,password:password},
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if(data.code == 200){
                alert("登陆成功！")
                console.log(data)
                const token = data.data.token
                window.localStorage.setItem('yq_token', token)
                var userToken = window.localStorage.getItem("yq_token");
                location.href = "Super-administrator-Center.html";
            }else{
                alert("账号密码错误！")
                location.reload();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('登录失败');
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
}