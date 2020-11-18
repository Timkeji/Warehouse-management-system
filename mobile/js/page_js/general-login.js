var SERVER_PATH = 'http://project.phonbe.cn'
$(function() {
    $('#general-login').on('click', function() {
        if($('#gaccount').val() == '' || $('#gaccount').val() == null) {
            alert('工号不得为空！')
        }
        if($('#gpaw').val() == '' || $('#gpaw').val() == null) {
            alert('密码不得为空！')
        }
        if($('#gaccount').val() != '' || $('#gaccount').val() != null && $('#gpaw').val() != '' || $('#gpaw').val() != null) {

        }
    })
})

function hwc_generlogin(){
    var management_id = document.getElementById('gaccount').value
    var password = document.getElementById('gpaw').value
    $.ajax({
        async: false,
        type: "POST",
        url:SERVER_PATH+'/api/auth/login',
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
                location.href = "General-administrator-Center.html";
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