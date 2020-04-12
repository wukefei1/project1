$(document).ready(function() {
    //回到顶部的动画效果
    //首先将#back-to-top隐藏
    $("#back-to-top").hide();
    //当滚动条的位置处于距顶部600像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                $("#back-to-top").fadeIn(500);
            } else {
                $("#back-to-top").fadeOut(500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});

function changePage(str) {
    //切换页面（暂时只有样式的变化）
    var now = document.getElementById("now");
    now.id = "page" + now.innerHTML;
    now.style.border = "1px solid #eaeaea;";
    var s = "page" + str;
    var after = document.getElementById(s);
    after.id = "now";
    after.style.border.style = "none";
}

function Zoom(obj, width, height) {
    //裁剪图片符合固定长宽
    var scale = Math.max(width / obj.width, height / obj.height);
    var newWidth = obj.width * scale;
    var newHeight = obj.height * scale;
    var div = obj.parentNode.parentNode;

    obj.width = newWidth;
    obj.height = newHeight;
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.overflow = "hidden";
    obj.style.marginLeft = (width - newWidth) / 2 + "px";
    obj.style.marginRight = (height - newHeight) / 2 + "px";
}

function showImage(src) {
    //查看原图
    var div = document.getElementById("others");
    div.hidden = "hidden";
    var img = document.getElementById("yuantu");
    img.src = src;
    var h = document.getElementById("hidden");
    h.removeAttribute("hidden");
}

function closeImage() {
    //关闭原图
    var div = document.getElementById("others");
    div.removeAttribute("hidden");
    var img = document.getElementById("yuantu");
    img.src = "";
    var h = document.getElementById("hidden");
    h.hidden = "hidden";
}