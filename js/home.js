function resize() {
    //响应式布局
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    var nav = document.getElementById("nav");
    if (w < 600) {
        nav.style.width = "600px";
    } else {
        nav.style.width = "100%";
    }
}

window.addEventListener("resize", resize);