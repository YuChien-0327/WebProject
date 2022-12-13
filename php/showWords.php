<?php
require_once "conn.php";
session_start();
$data = $_POST;
$sql = "SELECT * FROM `vocabulary` WHERE `year` = {$data['year']}";
$result = mysqli_query($conn, $sql);
$ans = array();
$outputArray = array();
$outputEngArray = array();
$outputChiArray = array();
$outputErrorArray = array();
while($row = mysqli_fetch_assoc($result)){
    array_push($ans, $row['in_english']);
    array_push($outputEngArray, $row['in_english']);
    array_push($outputChiArray, $row['in_chinese']);
}
for($i = 0; $i < 60; $i++){
    $sql2 = "SELECT * FROM `error` WHERE `user_name` = '{$_SESSION['userName']}' AND `year` = '{$data['year']}' AND `in_english` = '{$ans[$i]}'";
    $result2 = mysqli_query($conn, $sql2);
    if(mysqli_num_rows($result2) == 0){
        array_push($outputErrorArray, 0);
    }
    else if(mysqli_num_rows($result2) > 0){
        $row = mysqli_fetch_assoc($result2);
        array_push($outputErrorArray, $row['num']);
    }
}
array_push($outputArray, $outputEngArray);
array_push($outputArray, $outputChiArray);
array_push($outputArray, $outputErrorArray);
$outputJSON = json_encode($outputArray);
echo $outputJSON;
?>