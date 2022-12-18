<?php
require_once "conn.php";
session_start();
$outputEng = array();
$outputChi = array();
$outputErr = array();
$outputArr = array();
$ans = array();
$sql = "SELECT COUNT(*) FROM `your` WHERE `user_id` = '{$_SESSION['id']}'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$length = $row["COUNT(*)"];
$sql = "SELECT * FROM `your` WHERE `user_id` = '{$_SESSION['id']}'";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_assoc($result)){
    array_push($ans, $row['in_english']);
    array_push($outputEng, $row['in_english']);
    array_push($outputChi, $row['in_chinese']);
}
for($i = 0; $i < $length; $i++){
    $sql2 = "SELECT * FROM `error` WHERE `user_name` = '{$_SESSION['userName']}' AND `year` = '200' AND `in_english` = '{$ans[$i]}'";
    $result2 = mysqli_query($conn, $sql2);
    if(mysqli_num_rows($result2) == 0){
        array_push($outputErr, 0);
    }
    else if(mysqli_num_rows($result2) > 0){
        $row = mysqli_fetch_assoc($result2);
        array_push($outputErr, $row['num']);
    }
}
array_push($outputArr, $outputEng);
array_push($outputArr, $outputChi);
array_push($outputArr, $outputErr);
array_push($outputArr, $length);
$outputJSON = json_encode($outputArr);
echo $outputJSON;
?>