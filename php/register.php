<?php
header("Access-Control-Allow-Origin: *");

$data = $_POST;
$link = mysqli_connect("localhost", "root", "Cherry900327", "web_project");
$userName = $data["userName"];
$userPwd = $data["userPwd"];
$sql = "SELECT * FROM `user` WHERE `user_name` = '{$userName}'";
$result = mysqli_query($link, $sql);

if(mysqli_num_rows($result) == 0){
    $passwordHash =  password_hash($userPwd, PASSWORD_DEFAULT);
    $sql = "INSERT INTO  `user` (`user_name`, `user_password`) VALUES('{$userName}', '{$passwordHash}')";
    $result = mysqli_query($link, $sql);
    if($result === true){
        echo "success";
    }
    else{
        echo "fail";
    }
}
else{
    echo "使用者名稱已註冊";
}
?>