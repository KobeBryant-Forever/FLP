$("#zcbtn").on("mouseenter", () => {
    $("#zcbtn").css({
        "opacity": 0.7
    })
})
$("#zcbtn").on("mouseleave", () => {
    $("#zcbtn").css({
        "opacity": 1
    })
})

// 一、先做前端的表单验证
//功能：所有前端的验证；
function isTest() {
    return isUserName() && isPass() && isPassAgain() && isChecked();
}

//1、用户名的前端验证
function isUserName() {
    //1)、非空判断
    if ($("#username").val() == "") {
        return false;
    }
    //2)、格式判断
    // 用户名有数字，字母下划线组成，不能以数字开头，6-18位
    let reg = /^\D\w{5,17}$/;
    if (!reg.test($("#username").val())) {
        return false;
    }
    return true;
}


//2、密码的前端验证
function isPass() {
    //1)、非空判断
    if ($("#userpass").val() == "") {
        return false;
    }
    //2)、格式判断
    // 数字字母下划线，6-18位
    let reg = /^\w{6,18}$/;
    if (!reg.test($("#userpass").val())) {
        return false;
    }
    return true;
}

//3.密码二次输入验证
function isPassAgain() {
    if ($("#userpass").val() != $("#userpass2").val()) {
        return false;
    }
    return true;
}

// 复选框是否被选中验证
function isChecked() {
    if ($("#check").prop("checked") == false) {
        return false;
    }
    return true;
}



//二、后端验证
let flag = false; //该用户名不存在
function hasUserBack() {
    //后端验证用户名是否存在
    $.get("http://localhost/flpmall/php/checkUser.php", {
        "username": $("#username").val()
    }, function (data) {
        if (data == "0") {
            $("#showUser").html("该用户名已经存在");
            $("#showUser").css({
                "color": "red"
            });
            flag = true;
        } else if ($("#username").val() == "") {
            $("#showUser").html("");
        } else {
            $("#showUser").html("该用户名可以使用");
            $("#showUser").css({
                "color": "green"
            });
            flag = false;
        }
    })

}

$(function () {
    //用户名输入框失焦开始验证
    $("#username").blur(function () {
        //1、前端验证
        if (isUserName() == false) {
            $("#showUser").html("用户名格式不正确,长度为6~18");
            $("#showUser").css({
                "color": "red"
            });
            return;
        } else {
            $("#showUser").html("用户名格式正确");
            $("#showUser").css({
                "color": "green"
            });
        }
    });
    //2、后端的验证
    hasUserBack();
});

$("#userpass").blur(function () {
    //1、前端验证
    if (isPass() == false) {
        $("#showPass").html("密码格式不正确,长度为6~18位");
        $("#showPass").css({
            "color": "red"
        });
        return;
    } else {
        $("#showPass").html("密码格式正确");
        $("#showPass").css({
            "color": "green"
        });
    }
});

$("#userpass2").blur(function () {
    //1、前端验证
    if (isPassAgain() == false) {
        $("#showPassAgain").html("两次密码输入不一致！");
        $("#showPassAgain").css({
            "color": "red"
        });
        return;
    } else {
        $("#showPassAgain").html("两次密码输入一致！");
        $("#showPassAgain").css({
            "color": "green"
        });
    }
});

//1、前端验证

// });
$("#zcbtn").click(function () {
    if (isChecked() == false) {
        $("#showcheck").html("请阅读并勾选相关服务协议和隐私政策！");
        $("#showcheck").css({
            "color": "red"
        });
        return;
    } else {
        $("#showcheck").html("");
    }
})

$("#zcbtn").click(function () {
    //1、前端验证
    console.log("1233");
    if (isTest() == false) {
        $("#messageBox").html("输入信息不全，请重新输入！");
        $("#messageBox").css({
            "color": "red"
        });
        return;
    } else {
        $("#messageBox").html("");
    }

    //2、用户名是否存在(后端验证)
    if (flag) {
        return;
    }

    $.post(
        "http://localhost/flpmall/php/addUser.php", {
        "username": $("#username").val(),
        "userpass": $("#userpass").val()
    },
        function (data) {
            if (data.trim() == "success") {
                $("#messageBox").css({
                    "color": "green"
                });
                $("#messageBox").html("恭喜您，注册成功！点击<a href='login.html'>登录</a>");

            } else if (data.trim() == "fail") {
                $("#messageBox").css({
                    "color": "red"
                });
                $("#messageBox").html("用户已存在，请直接<a href='login.html'>登录</a>");
            } else {
                $("#messageBox").css({
                    "color": "red"
                });
                $("#messageBox").html("服务器出问题了，请稍后尝试！");
            }
        }
    );
});