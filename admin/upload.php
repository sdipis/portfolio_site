<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

$target_file = '../uploads/img' . time();
$imageFileType = strtolower(pathinfo($_FILES['uploaded']['name'], PATHINFO_EXTENSION));
$target_file .= '.' . $imageFileType;

if (move_uploaded_file($_FILES['uploaded']['tmp_name'], $target_file)) {
    $_SESSION['thumb'] = $target_file; // Set the thumb session variable so it auto updates the picture field in add project
    header('Location: ../admin/project_list.php');
} else {
    echo 'Sorry, there was an error uploading your file.';
}

?>

