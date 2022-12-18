<?php
require_once "conn.php";
session_start();
$en = $_POST['en'];
$sql = "DELETE FROM `your` WHERE `user_id` = '{$_SESSION['id']}' AND `in_english` = '{$en}'";
$result = mysqli_query($conn, $sql);
if(mysqli_affected_rows($conn) != 0){
    echo "1";
}
?>