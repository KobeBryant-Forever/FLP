// for (let i = 0; i < 5; i++) {
//     let count = 0;
//     $("section ul a").eq(i + 1).click(function () {
//         if (count == 0) {
//             $(".second").eq(i).show();
//             count = count + 1;
//         } else if (count == 1) {
//             $(".second").eq(i).hide();
//             count = 0;
//         }
//     })
// }

$("section ul a").click(function () {
    console.log($(this).attr("index"))
    $(".second").eq($(this).attr("index") - 1).show().siblings(".second").hide();
})

$(".top-right #search").click(function () {
    $(this).hide();

    $(".top-right").css({
        right: -24
    })
    $("header section input").show();

    $("section #searpic").show();

    $("section #close").show();

    $(".nav").hide();
})

$("#close").click(function () {

    $(".top-right").css({
        right: 10
    })
    $("#search").show();
    $("header section input").hide();
    $("section #searpic").hide();
    $("section #close").hide();
    $(".nav").show();
})

$("header h1").mouseover(function () {
    $(".vip").stop().animate({
        top: 40
    })
})
$("header h1").mouseout(function () {
    $(".vip").stop().animate({
        top: 15
    })
})
$("header .vip").mouseover(function () {
    $(".vip").stop().animate({
        top: 40
    })
})
$("header .vip").mouseout(function () {
    $(".vip").stop().animate({
        top: 15
    })
})
$(".dlzc").on("mouseover", () => {
    $(".dlzc").show()
}).on("mouseleave", () => {
    $(".dlzc").hide()
})

$("#dlzc").on("mouseover", () => {
    $(".dlzc").show()
}).on("mouseleave", () => {
    $(".dlzc").hide()
})

$("#dlzc").on("mouseover", () => {
    $(".dlzc").show()
}).on("mouseleave", () => {
    $(".dlzc").hide()
})


$.get("http://localhost/flpmall/php/getGoodsType.php", function (data) {
    console.log(data)
    for (let i = 0; i < $(".second li a").length; i++) {
        $(".second li a").eq(i).html(`${data[i].goodsType}`)
    }
}, "json")

$("#cart-Img").click(() => {
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
            fun1(resT.length);
        })
})

function fun1(res) {
    if (sessionStorage.getItem('username') != null && res != 0) {
        $("#red-point").css({
            "display": "block"
        })
        $("#red-point").html(res)

    }
}