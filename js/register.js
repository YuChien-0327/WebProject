$(document).ready(function(){
    $("#regSubmit").click(function(){
        register($("#regName").val(), $("#regPwd").val(), $("#checkPwd").val());
    })
})
function register(userName, userPwd, userCkPwd){
    if(userPwd == userCkPwd){
        $.ajax({
            type : "POST",
            url : "http://localhost/WorkSpace/web_project/php/register.php",
            data : {"userName" : userName, "userPwd" : userPwd},
        })
        .done(function(data){
            if(data == "success"){
                alert("註冊成功");
                location.href = "http://localhost/workSpace/web_project/login.html"
            }
            else if(data == "使用者名稱已註冊"){
                alert("使用者名稱已註冊")
            }
            else{
                console.log(data);
                alert("註冊失敗");
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown){

        })
    }
    else{
        alert("密碼與確認密碼不同");
    }
}