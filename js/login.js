$(document).ready(function(){
    $("#loginSubmit").click(function(){
        login($("#loginName").val(), $("#loginPwd").val());
    });
});
function login(userName, userPwd){
    $.ajax({
        type : "POST",
        url : "http://localhost/WorkSpace/web_project/php/login.php",
        data : {"userName" : userName, "userPwd" : userPwd},
    })
    .done(function(data){
        if(data == "登入成功"){
            alert("登入成功");
            location.href = "http://localhost/workSpace/web_project/index.html";
        }
        else if(data == "密碼錯誤"){
            alert("密碼錯誤");
        }
        else{
            alert("使用者名稱不存在");
        }
    })
    .fail(function (jqXHR, textStatus, errorThrown){

    })
}