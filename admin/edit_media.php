<?php
require_once('../includes/admin_connect.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);
$query = "UPDATE media SET project_id = ?, image_filename = ?, content_type = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['project_id'], PDO::PARAM_INT);
$stmt->bindParam(2, $_POST['image_filename'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['content_type'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: media_list.php');
?>
