<?php
header("Access-Control-Allow-Origin: *");

$data = $_POST;
$link = mysqli_connect("localhost", "root", "Cherry900327", "web_project");
$userName = $data["userName"];
$userPwd = $data["userPwd"];

$sql = "SELECT * FROM `user` WHERE `user_name` = '{$userName}'";
$result = mysqli_query($link, $sql);

if(mysqli_num_rows($result) > 0){
    $row = mysqli_fetch_assoc($result);
    if(password_verify($userPwd, $row["user_password"])){
        echo "登入成功";
    }
    else{
        echo "密碼錯誤";
    }
}
else{
    echo "使用者名稱不存在";
}
?>