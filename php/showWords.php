<?php
header("Access-Control-Allow-Origin: *");
require_once "conn.php";
$data = $_POST;
$sql = "SELECT * FROM `vocabulary` WHERE `year` = {$data['year']}";
$result = mysqli_query($conn, $sql);
$outputArray = array();
$outputEngArray = array();
$outputChiArray = array();
while($row = mysqli_fetch_assoc($result)){
    array_push($outputEngArray, $row['in_english']);
    array_push($outputChiArray, $row['in_chinese']);
}
array_push($outputArray, $outputEngArray);
array_push($outputArray, $outputChiArray);
$outputJSON = json_encode($outputArray);
echo $outputJSON;
?>