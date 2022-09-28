for (let i = 0; i < $(".side div").length; i++) {
    $(".four div").eq(i).on("mouseover", function () {
        $(".four div a").eq(i).css({
            color: "#2B86B2"
        })
    }).on("mouseout", function () {
        $(".four div a").css({
            color: ""
        })
    })
}

$(".gwc").on("mouseover", function () {
    $(".gwc").css({
        color: "#2B86B2"
    })
}).on("mouseout", function () {
    $(".gwc").css({
        color: ""
    })
})

$(".backtop").on("mouseover", function () {
    $(".backtop a").css({
        color: "#2B86B2"
    })
}).on("mouseout", function () {
    $(".backtop a").css({
        color: ""
    })
})

$(".xcx").mouseenter(() => {
    $(".ewm").show()
}).mouseleave(() => {
    $(".ewm").hide()
})

$(".ewm").mouseenter(() => {
    $(".ewm").show()
}).mouseleave(() => {
    $(".ewm").hide()
})


// 回到顶部
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".backtop").show()
    } else {
        $(".backtop").hide()
    }
})

$(".backtop").click(() => {
    $("html,body").animate({
        scrollTop: "0px"
    })
})

$(".gwc img").click(() => {
    if (sessionStorage.getItem("username") == null) {
        alert("请先登录!")
        setTimeout(() => {
            location.href = "login.html"
        }, 50)
    } else {
        location.href = "cart.html"
    }
})

$(function () {
    $.get("http://localhost/flpmall/php/getShoppingCart.php", {
        vipName: sessionStorage.getItem('username')
    },
        function (resText) {
            let resT = JSON.parse(resText);
            console.log(resT.length)
            fun2(resT.length);
        })
})

function fun2(res) {
    if (sessionStorage.getItem('username') != null && res != 0) {
        $("#red_point").css({
            "display": "block"
        })
        $("#red_point").html(res)

    }
}