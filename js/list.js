// for (let i = 1; i < $(".sort li").length; i++) {
//     $(".sort li").eq(i).on("click", () => {
//         $(".sort li").eq(i).css({
//             border: "1px solid #2b86b2"
//         })
//         $(".sort li").eq(i).siblings("li").css({
//             border:0
//         })
//     })
// }

$(".sort li").click(function () {
    $(this).css({
        color: "#2b86b2",
        border: "1px solid #2b86b2"
    }).siblings("li").css({
        border: 0,
        color: ""
    });
})



$(function () {
    upData();
})

function upData() {
    $.get("./php/getGoodsList.php", function (resText) {
        console.log("resText", resText)
        // console.log("resText", resText)
        let str = "";
        for (let i = 0; i < resText.length; i++) {
            str += `
            <a href="details.html?goodsId=${resText[i].goodsId}">
            <li onclick="Sess(${resText[i].goodsId})">
            <img src="${resText[i].goodsImg}" alt="">
            <div class="spmc">${resText[i].goodsName}</div>
            <div>官方建议零售价:￥<span class="spjg">${resText[i].goodsPrice}</span></div>
            <div>登录/注册会员即可享受会员价</div>
            </li>
            </a>    
            `
        }
        $(".lbpb").html(str);
        $("#spgj span").html(resText.length);

    }, "json")
}

function Sess(index) {
    sessionStorage.setItem('goodsId', index)
}