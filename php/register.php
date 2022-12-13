<?php
require_once "conn.php";

$data = $_POST;
$userName = $data["userName"];
$userPwd = $data["userPwd"];
$sql = "SELECT * FROM `user` WHERE `user_name` = '{$userName}'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) == 0){
    $passwordHash =  password_hash($userPwd, PASSWORD_DEFAULT);
    $sql = "INSERT INTO  `user` (`user_name`, `user_password`) VALUES('{$userName}', '{$passwordHash}')";
    $result = mysqli_query($conn, $sql);
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