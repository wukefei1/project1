function changeCity(x) {
    //点击侧边栏时城市发生变化（写法比较糟糕，之后改进）
    var c1 = document.getElementById("city1");
    var c2 = document.getElementById("city2");
    var c3 = document.getElementById("city3");
    var c4 = document.getElementById("city4");
    if (x == 1) {
        c1.innerHTML = "上海";
        c2.innerHTML = "昆明";
        c3.innerHTML = "北京";
        c4.innerHTML = "烟台";
    }
    if (x == 2) {
        c1.innerHTML = "罗马";
        c2.innerHTML = "米兰";
        c3.innerHTML = "威尼斯";
        c4.innerHTML = "佛罗伦萨";
    }
    if (x == 3) {
        c1.innerHTML = "东京";
        c2.innerHTML = "大阪";
        c3.innerHTML = "千叶";
        c4.innerHTML = "秋叶原";
    }
    if (x == 4) {
        c1.innerHTML = "纽约";
        c2.innerHTML = "旧金山";
        c3.innerHTML = "华盛顿";
        c4.innerHTML = "";
    }
}


var arr_country = ["请选择国家", "中国", "意大利", "日本", "美国"];
var arr_city = [
    ["请选择城市"],
    ["上海", "昆明", "北京", "烟台"],
    ["罗马", "米兰", "威尼斯", "佛罗伦萨"],
    ["东京", "大阪", "千叶", "秋叶原"],
    ["纽约", "旧金山", "华盛顿"]
];
//网页加载完成，初始化菜单
window.onload = init; //传入函数地址
function init() {
    //首先获取对象
    var country = document.form1.country;
    var city = document.form1.city;

    //指定省份中<option>标记的个数
    country.length = arr_country.length;

    //循环将数组中的数据写入<option>标记中
    for (var i = 0; i < arr_country.length; i++) {
        country.options[i].text = arr_country[i];
        country.options[i].value = arr_country[i];
    }

    //修改省份列表的默认选择项
    var index = 0;
    country.selectedIndex = index;

    //指定城市中<option>标记的个数
    city.length = arr_city[index].length;

    //循环将数组中的数据写入<option>标记中
    for (var j = 0; j < arr_city[index].length; j++) {
        city.options[j].text = arr_city[index][j];
        city.options[j].value = arr_city[index][j];
    }

}

function changeSelect(index) {
    //选择对象
    var city = document.form1.city;
    //修改省份列表的选择项
    country.selectedIndex = index;

    //指定城市中<option>标记的个数
    city.length = arr_city[index].length;

    //循环将数组中的数据写入<option>标记中
    for (var j = 0; j < arr_city[index].length; j++) {
        city.options[j].text = arr_city[index][j];
        city.options[j].value = arr_city[index][j];
    }
}

function resize() {
    //响应式布局
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var filter = document.getElementById("filter");
    var row1 = document.getElementsByName("row1");
    var row2 = document.getElementsByName("row2");
    var row3 = document.getElementsByName("row3");
    var row4 = document.getElementsByName("row4");
    var nav = document.getElementById("nav");
    if (w < 600) {
        nav.style.width = "600px";
    } else {
        nav.style.width = "100%";
    }
    if (w < 1510) {
        for (var i = 0; i < row4.length; i++) {
            row4[i].hidden = "hidden";
        }
    } else {
        for (var i = 0; i < row4.length; i++) {
            row4[i].removeAttribute("hidden");
        }
    }
    if (w < 1250) {
        for (var i = 0; i < row4.length; i++) {
            row3[i].hidden = "hidden";
        }
    } else {
        for (var i = 0; i < row4.length; i++) {
            row3[i].removeAttribute("hidden");
        }
    }
    if (w < 990) {
        for (var i = 0; i < row4.length; i++) {
            row2[i].hidden = "hidden";
        }
    } else {
        for (var i = 0; i < row4.length; i++) {
            row2[i].removeAttribute("hidden");
        }
    }
    if (w < 730) {
        filter.style.width = "320px";
    } else {
        filter.style.width = "calc(100% - 410px)";
    }
}

window.addEventListener("resize", resize);