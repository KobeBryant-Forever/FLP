$("#dlbtn").on("mouseenter", () => {
    $("#dlbtn").css({
        "opacity": 0.7
    })
})
$("#dlbtn").on("mouseleave", () => {
    $("#dlbtn").css({
        "opacity": 1
    })
})

// oBtnLogin.onclick = function() {
//     let xhr = new XMLHttpRequest();
//     xhr.open("post", "goodsAndShoppingCart/login.php", true);

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             if (xhr.responseText == "success") {
//                 document.getElementById("msg").innerHTML = "登录成功";
//                 $("#msg").css({
//                     "color": "green"
//                 });
//                 location.href = "shouye.html"
//             } else {
//                 document.getElementById("msg").innerHTML = "用户不存在或用户名/密码错误";
//                 $("#msg").css({
//                     "color": "red"
//                 })
//             }
//         }
//     }

//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//     let str = "username=" + oUserName.value + "&userpass=" + oUserPass.value;
//     xhr.send(str);

// }

$("#dlbtn").click(function () {
    console.log("data")
    $.post("http://localhost/flpmall/php/login.php", {
        "username": $("#username").val(),
        "userpass": $("#userpass").val()
    },
        function (data) {
            if (data.trim() == "success") {
                $("#massage").html("登录成功,正在跳转...");
                $("#massage").css({ "color": "green" });
                setTimeout(() => {
                    location.href = "shouye.html";
                }, 2000);
                sessionStorage.setItem('username', $("#username").val())
            } else {
                $("#massage").html("用户不存在或用户名/密码错误")
                $("#massage").css({ "color": "red" });
            }
        })
})