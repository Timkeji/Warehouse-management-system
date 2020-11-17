$(function() {
    $('#super-button').on('click', function() {
        if($('#account').val() == '' || $('#paw').val() == null) {
            alert('账号不得为空！')
        }
        if($('#paw').val() == '' || $('#paw').val() == null) {
            alert('密码不得为空！')
        }
        if($('#account').val() != '' || $('#paw').val() != null && $('#paw').val() != '' || $('#paw').val() != null) {
            alert('登录成功！')
            window.location.href = "Super-administrator-Center.html";
        }

        
    })
})