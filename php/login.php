<?php
require_once "conn.php";

$data = $_POST;
$userName = $data["userName"];
$userPwd = $data["userPwd"];

$sql = "SELECT * FROM `user` WHERE `user_name` = '{$userName}'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){
    $row = mysqli_fetch_assoc($result);
    if(password_verify($userPwd, $row["user_password"])){
        session_start();
        $_SESSION["userName"] = $userName;
        $_SESSION["id"] = $row["user_id"];
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