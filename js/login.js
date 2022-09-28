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