if (sessionStorage.getItem("goodsId") != null) {
    $(".empty-cart").hide()
    $(".cartlist-box").show()

}

$("#goodsnum-box #min").on("mouseenter", () => {
    $("#min").css({
        "color": "#2b86b2"
    })
    $("#goodsnum-box").css({
        "border-color": "#2b86b2"
    })
}).on("mouseleave", () => {
    $("#min").css({
        "color": ""
    })
    $("#goodsnum-box").css({
        "border-color": ""
    })
})
$("#goodsnum-box #add").on("mouseenter", () => {
    $("#add").css({
        "color": "#2b86b2"
    })
    $("#goodsnum-box").css({
        "border-color": "#2b86b2"
    })
}).on("mouseleave", () => {
    $("#add").css({
        "color": ""
    })
    $("#goodsnum-box").css({
        "border-color": ""
    })
})


$(function () {
    $("#choiceAll").click(function () {
        if ($("#choice").is(":checked")) {
            $(":checkbox").prop("checked", false);
        } else {
            $(":checkbox").prop("checked", true);
        }
    })

    $("#selectAll").click(function () {
        if ($(":checkbox").is(":checked")) {
            $(":checkbox").prop("checked", false);
        } else {
            $(":checkbox").prop("checked", true);
        }
    });
    flag = false;
    for (let i = 0; i < $("#choice").length; i++) {
        $("#choice").eq(i).click(function () {
            for (let i = 0; i < $("#choice").length; i++) {
                if ($("#choice").eq(i).prop("checked", true)) {
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
                $("#choiceAll").prop("checked", flag);
            }
            // $("#choiceAll").checked = flag;

        })
    }
})




$(function () {
    getCart()
})

function getCart() {
    $.get("http://localhost/php/getShoppingCart.php", {
        vipName: sessionStorage.getItem('username')
    },
        function (data) {
            let str = "";
            let subprice = 0;
            let subnum = 0;
            data.forEach(goods => {
                let singlesub = goods.goodsPrice * goods.goodsCount;
                subprice += singlesub;
                subnum += goods.goodsCount / 1;
                str += `
                 <li id="lis">
                      <input type="checkbox" id="choice" checked>
                      <span id="goods-img">
                          <img src="${goods.goodsImg}" alt="">
                      </span>
                      <span id="goodsnameAndstyle">
                          <div id="goods-name">${goods.goodsName}</div>
                          <div id="goods-style">${goods.beiyong5}</div>
                      </span>
                      <span id="goodsprice-box">￥${goods.goodsPrice}</span>
                      <span id="goodsnum-box">
                          <span id="min" onclick = "rednum(this,${goods.goodsId})"> - </span>
                          <span id="goodsnum">${goods.goodsCount}</span>
                          <span id="add" onclick = "addnum(this,${goods.goodsId})"> + </span>
                      </span>
                      <span id="Symbol">￥</span>
                      <span id="single-subtotal-box">${singlesub}</span>
                       <span id="del-box">
                           <img src="img/del.png" alt="" onclick = "delGoods(this,${goods.goodsId})">
                     </span>
                 </li>
                 `
                $(".cartgoodslist").html(str)
                $("#sub-price").html(`${subprice}`)
                $("#sub_price").html(`${subprice}`)
                $("#sub_num").html(`${subnum}`)
                console.log()
            })
        }, "json")
}

function rednum(btn, goodsId) {
    let count = parseInt(btn.nextElementSibling.innerHTML)
    count--;
    if (count <= 1) {
        count = 1
    }
    console.log("count", count);

    $.get("/php/updateGoodsCount.php", {
        vipName: sessionStorage.getItem('username'),
        goodsId: goodsId,
        goodsCount: count
    }, function (data) {
        if (data == 1) {
            btn.nextElementSibling.innerHTML = count;

            let singleprice = parseInt(btn.parentNode.previousElementSibling.innerHTML.substring(1));

            let singlesub = singleprice * count;

            btn.parentNode.nextElementSibling.nextElementSibling.innerHTML = singlesub;

            totalPriceAndNum();
        }
    })

}

function totalPriceAndNum() {
    let totalPrice = 0;
    let totalnum = 0;
    let singlenum = $("#goodsnum");
    console.log($("#goodsnum"))
    let osinglesub = $("#single-subtotal-box");
    let olis = $("#lis")
    // for (let i = 0; i <= olis.length; i++) {
    //     totalPrice += parseInt(osinglesub[i].innerHTML)
    //     totalnum += parseInt(singlenum[i].innerHTML)
    // console.log("osinglesub", osinglesub);
    // }
    console.log("osinglesub.innerHTML", osinglesub.innerHTML);
    console.log("singlenum.innerHTML", singlenum.innerHTML);
    console.log("osinglesub.length", osinglesub.length);

    $("#sub-price").html(totalPrice);
    $("#sub_price").html(totalPrice);
    $("#sub_num").html(totalnum)
}


function addnum(btn, goodsId) {
    let count = parseInt(btn.previousElementSibling.innerHTML)
    count++;
    $.get("/php/updateGoodsCount.php", {
        vipName: sessionStorage.getItem('username'),
        goodsId: goodsId,
        goodsCount: count
    }, function (data) {
        if (data == 1) {
            btn.previousElementSibling.innerHTML = count;
            let singleprice = parseInt(btn.parentNode.previousElementSibling.innerHTML.substring(1));
            let singlesub = singleprice * count;
            btn.parentNode.nextElementSibling.nextElementSibling.innerHTML = singlesub;

            totalPriceAndNum();
        }
    })

}

function delGoods(btn, goodsId) {
    $.get("/php/deleteGoods.php", {
        vipName: sessionStorage.getItem('username'),
        goodsId: goodsId,
    }, function (data) {
        if (data == 1) {
            btn.parentNode.parentNode.remove()
            // totalPriceAndNum();
        }
    })
}