function checkpwd() {
    //检查密码
    var p1 = document.getElementById("pw1").value;
    var p2 = document.getElementById("pw2").value;

    if (p1 != p2) {
        alert("两次输入密码不一致！");
        return false;
    } else {
        alert("注册成功！即将跳往登录界面！");
        return true;
    }
}