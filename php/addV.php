<?php
require_once "conn.php";
session_start();
$en = $_POST['en'];
$zh = $_POST['zh'];
$sql = "SELECT * FROM `your` WHERE `in_english` = '{$en}'";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0){
    echo "單字已存在";
}
else{
    $sql = "INSERT INTO `your` (`user_id`, `in_english`, `in_chinese`)VALUES('{$_SESSION['id']}', '{$en}', '{$zh}')";
    $result = mysqli_query($conn, $sql);
    echo "新增成功";
}
?>