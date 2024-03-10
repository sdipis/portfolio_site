<?php
require_once('../includes/admin_connect.php');

// Insert data into the projects table
$query = "INSERT INTO media (project_id, image_filename, content_type) VALUES (?, ?, ?)";
$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['project_id'], PDO::PARAM_INT);
$stmt->bindParam(2, $_POST['image_filename'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['content_type'], PDO::PARAM_STR);




$stmt->execute();
$last_id = $connection->lastInsertId();

header('Location: project_list.php');
?>
