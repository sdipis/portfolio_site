<?php
require_once('../includes/admin_connect.php');

// Insert data into the projects table
$query = "INSERT INTO projects (title, display, description, type, moreinfo) VALUES (?, ?, ?, ?, ?)";
$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['thumb'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['desc'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['type'], PDO::PARAM_STR);
$stmt->bindParam(5, $_POST['moreinfo'], PDO::PARAM_STR);

$stmt->execute();
$last_id = $connection->lastInsertId();

// Insert data into the media table
$mediaQuery = "INSERT INTO media (image_filename, project_id) VALUES (?, ?)";
$mediaStmt = $connection->prepare($mediaQuery);
$mediaStmt->bindParam(1, $_POST['thumb'], PDO::PARAM_STR);
$mediaStmt->bindParam(2, $last_id, PDO::PARAM_INT);

$mediaStmt->execute();

header('Location: project_list.php');
?>
