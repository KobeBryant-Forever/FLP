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
//退出登录
$(function () {
    $('.settle1').click(function () {
        location.href = 'http://localhost/flpmall/shouye.html'
        // load('http://localhost/flpmall/shouye.html')
    })
})


//全选和反选
$(function () {
    $("#choiceAll").click(function () {
        if ($("#choice").is(":checked")) {
            $(":checkbox").prop("checked", false);
        } else {
            $(":checkbox").prop("checked", true);
        }
    })
    //全选
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
        })
    }
})

$(function () {
    getCart()
})

function getCart() {
    $.get("http://localhost/flpmall/php/getShoppingCart.php", {
        vipName: sessionStorage.getItem('username')
    },
        function (data) {
            console.log(data)
            let str = "";
            let subprice = 0;
            let subnum = 0;
            data.forEach(goods => {
                //总价
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
                          <span id="min" onclick = "reduce(this,${goods.goodsId})"> - </span>
                          <span class="goodsnum">${goods.goodsCount}</span>
                          <span id="add" onclick = "add(this,${goods.goodsId})"> + </span>
                      </span>
                      <span id="Symbol">￥</span>
                      <span class="single-subtotal-box">${singlesub}</span>
                       <span id="del-box">
                           <img src="img/del.png" alt="" onclick = "del(this,${goods.goodsId})">
                     </span>
                 </li>
                 `
                $(".cartgoodslist").html(str)
                $("#sub-price").html(`${subprice}`)
                $("#sub_price").html(`${subprice}`)
                $("#sub_num").html(`${subnum}`)
            })
        }, "json")
}
//减
function reduce(btn, goodsId) {
    let count = parseInt(btn.nextElementSibling.innerHTML)
    count--;
    if (count <= 1) {
        count = 1
    }

    $.get(
        "http://localhost/flpmall/php/updateGoodsCount.php", {
        vipName: sessionStorage.getItem('username'),
        goodsId: '00' + goodsId,
        goodsCount: count,
    },
        function (res) {
            if (res.trim() == 1) {
                //数量
                btn.nextElementSibling.innerHTML = count;
                //单价
                let price = parseInt(btn.parentNode.previousElementSibling.innerHTML.substring(1));
                //小计
                let xiao_ji = price * count;
                btn.parentNode.nextElementSibling.nextElementSibling.innerHTML = xiao_ji;
                //总价
                tomoney();
            }
        }

    )
}
//合计
function tomoney() {
    let totalmoney = 0;
    let totalnum = 0;
    //获取框里面的数字
    let oxiaoji = $(".single-subtotal-box");
    let olinum = $(".goodsnum");
    //遍历
    for (let i = 0; i < oxiaoji.length; i++) {
        console.log("oxiaoji.length", oxiaoji.length)
        totalmoney += parseInt(oxiaoji[i].innerHTML)
        totalnum += parseInt(olinum[i].innerHTML)
        console.log(totalmoney)
    }
    $("#sub-price").html(totalmoney);
    $("#sub_price").html(totalmoney);
    $("#sub_num").html(totalnum)

}


//加
function add(btn, goodsId) {
    let count = parseInt(btn.previousElementSibling.innerHTML)
    count++;

    $.get("http://localhost/flpmall/php/updateGoodsCount.php", {
        vipName: sessionStorage.getItem('username'),
        goodsId: '00' + goodsId,
        goodsCount: count,
    },
        //加的时候小计和总价都跟着变
        function (res) {
            if (res.trim() == 1) {
                //数量
                btn.previousElementSibling.innerHTML = count;
                //单价
                let price = parseInt(btn.parentNode.previousElementSibling.innerHTML.substring(1));
                //小计
                let xiao_ji = price * count;
                btn.parentNode.nextElementSibling.nextElementSibling.innerHTML = xiao_ji;
                console.log("vipName", sessionStorage.getItem('username'))
                console.log("goodsId", goodsId)
                console.log("goodsCount", count)
                //总价
                tomoney();
            }
        }
    )
}

//删除
function del(btn, goodsId) {
    $.get("http://localhost/flpmall/php/deleteGoods.php", {
        vipName: sessionStorage.getItem('username'),
        goodsId: '0' + goodsId,
        // goodsId: sessionStorage.getItem('goodsId')
    }, function (res) {
        if (res.trim() == 1) {
            btn.parentNode.parentNode.remove()
            tomoney();
        }
    })
}