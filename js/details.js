$("._color button").click(function () {
    $(this).css({
        color: "#2b86b2",
        border: "1px solid #2b86b2"
    }).siblings("button").css({
        border: 0,
        color: "black"
    });
});

$(".lis").click(function () {
    $(this).css({
        border: "1px solid #2b86b2"
    }).siblings("li").css({
        border: 0,
    });
});
//放大镜
class MF {
    constructor(smallBox, mask, bigBox, resText, Lis) {
        this.oSmallBox = smallBox;
        this.oMask = mask;
        this.oBigBox = bigBox;
        this.resText = resText;
        this.oLis = Lis;
        this.eventBind();
        this.oSmallBox.style.backgroundImage = `url(${this.resText.goodsImg})`;
        this.oBigBox.style.backgroundImage = `url(${this.resText.goodsImg})`;
    }



    mouseover() {
        let that = this;
        this.oSmallBox.onmouseover = function () {
            that.oMask.style.display = "block";
            that.oBigBox.style.display = "block";
        }
    }

    mouseout() {
        let that = this;
        this.oSmallBox.onmouseout = function () {
            that.oMask.style.display = "none";
            that.oBigBox.style.display = "none";
        }
    }
    //发大境
    mousemove() {
        let that = this;
        this.oSmallBox.onmousemove = function (evt) {
            let e = evt || event;
            let left = e.pageX - that.oMask.offsetWidth / 2 - this.offsetLeft;
            let top = e.pageY - that.oMask.offsetHeight / 2 - that.oSmallBox.offsetTop;
            //判断
            if (left < 0) {
                left = 0;
            }
            if (top < 0) {
                top = 0;
            }
            let maxLeft = this.offsetWidth - that.oMask.offsetWidth;

            if (left > maxLeft) {
                left = maxLeft;
            }
            let maxTop = this.offsetHeight - that.oMask.offsetHeight;

            if (top > maxTop) {
                top = maxTop;
            }

            let x = left * that.oBigBox.offsetWidth / that.oMask.offsetWidth;
            let y = top * that.oBigBox.offsetHeight / that.oMask.offsetHeight;

            that.oMask.style.left = left + "px";
            that.oMask.style.top = top + "px";

            that.oBigBox.style.backgroundPositionX = -x + "px";
            that.oBigBox.style.backgroundPositionY = -y + "px";
        }
    }


    Switch() {
        let that = this;
        // for (let i = 0; i < this.oLis.length; i++) {
        this.oLis[0].style.backgroundImage = `url(${this.resText.goodsImg})`;
        this.oLis[1].style.backgroundImage = `url(${this.resText.beiyong3})`;
        this.oLis[2].style.backgroundImage = `url(${this.resText.beiyong4})`;
        this.oLis[0].onclick = function () {
            that.oSmallBox.style.backgroundImage = `url(${that.resText.goodsImg})`;
            that.oBigBox.style.backgroundImage = `url(${that.resText.goodsImg})`;
        }
        this.oLis[1].onclick = function () {
            that.oSmallBox.style.backgroundImage = `url(${that.resText.beiyong3})`;
            that.oBigBox.style.backgroundImage = `url(${that.resText.beiyong3})`;
        }
        this.oLis[2].onclick = function () {
            that.oSmallBox.style.backgroundImage = `url(${that.resText.beiyong4})`;
            that.oBigBox.style.backgroundImage = `url(${that.resText.beiyong4})`;
        }
        // }
    }

    eventBind() {
        this.mouseover();
        this.mouseout();
        this.mousemove();
        this.Switch()
        // console.log(this.resText)
    }
}

//p判断加入购物车的时候是否登录
$("#car").click(() => {
    if (sessionStorage.getItem("username") == null) {
        alert("请先登录!")
        setTimeout(() => {
            location.href = "login.html"
        }, 50)
    } else if ($(".kucun").html() == "缺货") (
        alert("商品货量不足，去看看其他商品吧!")
    )
    else {
        location.href = "cart.html"
    }
})
$("#buy").click(() => {
    if (sessionStorage.getItem("username") == null) {
        alert("请先登录!")
        setTimeout(() => {
            location.href = "login.html"
        }, 50)
    } else if ($(".kucun").html() == "缺货") (
        alert("商品货量不足，去看看其他商品吧!")
    )
    else {
        location.href = "cart.html"
    }
})
let count = 1;

//数量减
function reduceNum(btn) {
    let count = parseInt(btn.nextElementSibling.innerHTML)
    count--;
    if (count <= 1) {
        count = 1
    }
    btn.nextElementSibling.innerHTML = count;
}
//数量加
function addNum(btn) {
    let count = parseInt(btn.previousElementSibling.innerHTML)
    count++;
    btn.previousElementSibling.innerHTML = count;
}
//加入购物车
function addCart(btn, num) {
    // btn.previousElementSibling.innerHTML = count;
    $.post("http://localhost/flpmall/php/addShoppingCart.php", {
        vipName: sessionStorage.getItem("username"),
        goodsId: sessionStorage.getItem("goodsId"),
        goodsCount: num.innerHTML
    }, function (data) {
        if (data == 1) {
            num.innerHTML = count;
            // location.href = "cart.html"
        }
    })
}

$("#redbtn").click(function () {
    let oredbtn = document.getElementById("redbtn")
    reduceNum(oredbtn)
})
$("#addbtn").click(function () {
    let oaddbtn = document.getElementById("addbtn")
    addNum(oaddbtn)
})

$("#car").click(function () {
    let ocarbtn = document.getElementById("car");
    let oNum = document.getElementById("num")
    if (sessionStorage.getItem("username") != null && $(".kucun").html() == "有货") {
        addCart(ocarbtn, oNum)
    }
})