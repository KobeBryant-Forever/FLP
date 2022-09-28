//鼠标进入和离开显示上下箭头
$(".banner").on("mouseenter", () => {
    $(".prev,.next").show()
}).on("mouseleave", () => {
    $(".prev,.next").hide()
})


//轮播图
class Banner {
    constructor(box, prev, next, lis, resT) {
        this.index = 0;
        this.oBox = box;
        this.oPrev = prev;
        this.oNext = next;
        this.oLis = lis;
        this.res = resT;
        this.oBox.style.backgroundImage = `url(${this.res[this.index].img})`;
        this.oLis[this.index].style.backgroundColor = `white`;
        this.eventBind();
        this.auto()
    }
    //获取图片
    setBgcImg() {
        this.oBox.style.backgroundImage = `url(${this.res[this.index].img})`;
        this.oBox.style.backgroundSize = "cover"
    }

    setBgcLi() {
        for (let i = 0; i < this.oLis.length; i++) {
            if (i == this.index) {
                this.oLis[i].style.backgroundColor = 'white';
            } else {
                this.oLis[i].style.backgroundColor = '';
            }
        }
    }
    //下一张
    next() {
        this.index++;

        if (this.index == this.oLis.length) {
            this.index = 0;
        }

        this.setBgcImg();
        this.setBgcLi();
    }
    //上一张
    prev() {
        this.index--;

        if (this.index == -1) {
            this.index = this.oLis.length - 1;
        }

        this.setBgcImg();
        this.setBgcLi();
    }
    //生成轮播图对应的小长标
    clickLi() {
        let that = this;
        for (let i = 0; i < this.oLis.length; i++) {
            this.oLis[i].onclick = function () {
                that.index = i;
                that.setBgcImg();
                that.setBgcLi();
            }
        }
    }
    //自动播放
    auto() {
        let that = this;
        let time = null;
        time = setInterval(() => {
            that.index++;
            if (that.index == that.oLis.length) {
                that.index = 0;
            }
            that.setBgcImg();
            that.setBgcLi();
        }, 2000)
        this.oBox.onmouseover = function () {
            clearInterval(time);
        }
    }
    eventBind() {
        let that = this;
        this.oNext.onclick = function () {
            that.next();
        }
        this.oPrev.onclick = function () {
            that.prev();
            this.clickLi();
            this.auto();
        }
        this.clickLi()
        this.auto()
    }

}

$(function () {
    updata();
})

function updata() {
    $.get("./php/getGoodsList.php", function (resText) {
        let resT = JSON.parse(resText);
        for (let i = 0; i < $(".like li").length; i++) {
            $(".like li img").eq(i).attr("src", `${resT[i]["goodsImg"]}`);
            $(".like .spjg").eq(i).html(`${resT[i]["goodsPrice"]}`);
            $(".like .spmc").eq(i).html(`${resT[i]["goodsName"]}`);
            $(".like li").eq(i).on("click", () => {
                location.href = `./details.html?goodsId=${resT[i].goodsId}`;
                sessionStorage.setItem('goodsId', `${resT[i].goodsId}`)
            })

        }
    })


}

// })