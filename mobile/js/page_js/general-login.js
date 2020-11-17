$(function() {
    $('#general-login').on('click', function() {
        if($('#gaccount').val() == '' || $('#gaccount').val() == null) {
            alert('工号不得为空！')
        }
        if($('#gpaw').val() == '' || $('#gpaw').val() == null) {
            alert('密码不得为空！')
        }
        if($('#gaccount').val() != '' || $('#gaccount').val() != null && $('#gpaw').val() != '' || $('#gpaw').val() != null) {
            alert('登录成功！')
            window.location.href = "General-administrator-Center.html";
        }
    })
})