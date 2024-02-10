<?php
session_start();
//this create the container. This creates the array $_SESSION
require_once('../includes/admin_connect.php');
$query='SELECT * FROM users WHERE username=? AND password=?';
$stmt=$connection->prepare($query);

$stmt->bindParam(1, $_POST['username'], PDO::PARAM_STR);
$stmt->bindParam(1, $_POST['password'], PDO::PARAM_STR);
$stmt->execute();

//what is the row count? What came back
//if the row count is 1, that means someone has logged in successfully
if($stmt->rowCount()==1){
    $row=$stmt->fetch(PDO::FETCH_ASSOC);
    //session is a global array. Any page on site and check the session and see inside
    $_SESSION['username']=$row['username'];
    header('Location: project_list.php');
}else{
    //otherwise, send them back to login page
    //this is refreshing it
    header('Location: login_form.php');
}

$stmt=null;
?>