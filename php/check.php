<?php
require_once "conn.php";
session_start();
$datas = $_POST;
$arr = array();
$arr = json_decode($_POST['data']);
$year = $_POST['year'];
$ans = array();
if($year == 200){
    $sql = "SELECT * FROM `your` WHERE `user_id` = '{$_SESSION['id']}'";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($ans, $row['in_english']);
        }
        $sql = "SELECT COUNT(*) FROM `your` WHERE `user_id` = '{$_SESSION['id']}'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $length = $row["COUNT(*)"];
        for($i = 0; $i < $length; $i++){
            if($arr[$i + 2] != $ans[$i]){
                echo $arr[$i+2];
                echo $ans[$i];
                $sql = "SELECT * FROM `error` WHERE `user_name` = '{$_SESSION['userName']}' AND `year` = '200' AND `in_english` = '{$ans[$i]}'";
                $result = mysqli_query($conn, $sql);
                if(mysqli_num_rows($result) == 0){
                    $sql = "INSERT INTO `error` (`user_name`, `year`, `in_english`, `num`)VALUES('{$_SESSION['userName']}', '200', '{$ans[$i]}', '1')";
                    $result = mysqli_query($conn, $sql);
                }
                else if(mysqli_num_rows($result) > 0){
                    $row = mysqli_fetch_assoc($result);
                    $num = $row["num"];
                    $num += 1;
                    $sql = "UPDATE `error` SET `num` = '{$num}' WHERE `user_name` = '{$_SESSION['userName']}' AND `year` = '200' AND `in_english` = '{$ans[$i]}'";
                    $result = mysqli_query($conn, $sql);
                }
                else{
                    echo "No";
                }
            }
        } 
    }
}
else{
    $sql = "SELECT * FROM `vocabulary` WHERE `year` = '{$year}'";
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_assoc($result)){
        array_push($ans, $row['in_english']);
    }
    for($i = 2; $i < 62; $i++){
        $arr[$i] = $arr[$i]." ";
    }
    for($i = 0; $i < 60; $i++){
        if($arr[$i + 2] != $ans[$i]){
            $sql = "SELECT * FROM `error` WHERE `user_name` = '{$_SESSION['userName']}' AND `year` = '{$year}' AND `in_english` = '{$ans[$i]}'";
            $result = mysqli_query($conn, $sql);
            if(mysqli_num_rows($result) == 0){
                $sql = "INSERT INTO `error` (`user_name`, `year`, `in_english`, `num`)VALUES('{$_SESSION['userName']}', '{$year}', '{$ans[$i]}', '1')";
                $result = mysqli_query($conn, $sql);
            }
            else if(mysqli_num_rows($result) > 0){
                $row = mysqli_fetch_assoc($result);
                $num = $row["num"];
                $num += 1;
                $sql = "UPDATE `error` SET `num` = '{$num}' WHERE `user_name` = '{$_SESSION['userName']}' AND `year` = '{$year}' AND `in_english` = '{$ans[$i]}'";
                $result = mysqli_query($conn, $sql);
            }
            else{
                echo "No";
            }
        }
    }
}
?>