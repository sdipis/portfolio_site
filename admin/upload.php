<?php
session_start();

$target_file = '..dist/uploads/img' . time();
$imageFileType = strtolower(pathinfo($_FILES['uploaded']['name'], PATHINFO_EXTENSION));
$target_file .= '.' . $imageFileType;

if (move_uploaded_file($_FILES['uploaded']['tmp_name'], $target_file)) {
    $_SESSION['thumb'] = $target_file; // Set the thumb session variable
    header('Location: ../admin/project_list.php');
} else {
    echo 'Sorry, there was an error uploading your file.';
}
?>