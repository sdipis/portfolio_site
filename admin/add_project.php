<?php
require_once('../includes/admin_connect.php');

// Insert data into the projects table
$query = "INSERT INTO projects (forward, for_id, title, description, moreinfo, display, type, content, created_by, created_on, extra, extra_content, extra_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['forward'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['for_id'], PDO::PARAM_INT);
$stmt->bindParam(3, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['description'], PDO::PARAM_STR);
$stmt->bindParam(5, $_POST['moreinfo'], PDO::PARAM_STR);
$stmt->bindParam(6, $_POST['display'], PDO::PARAM_STR);
$stmt->bindParam(7, $_POST['type'], PDO::PARAM_STR);
$stmt->bindParam(8, $_POST['content'], PDO::PARAM_STR);
$stmt->bindParam(9, $_POST['created_by'], PDO::PARAM_STR);
$stmt->bindParam(10, $_POST['created_on'], PDO::PARAM_INT);
$stmt->bindParam(11, $_POST['extra'], PDO::PARAM_STR);
$stmt->bindParam(12, $_POST['extra_content'], PDO::PARAM_STR);
$stmt->bindParam(13, $_POST['extra_url'], PDO::PARAM_STR);





$stmt->execute();
$last_id = $connection->lastInsertId();
$stmt = null;


//broken
// // Insert data into the media table
// $mediaQuery = "INSERT INTO media (image_filename, project_id, content_type) VALUES (?, ?, ?)";
// $mediaStmt = $connection->prepare($mediaQuery);
// $mediaStmt->bindParam(1, $_POST['thumb'], PDO::PARAM_STR);
// $mediaStmt->bindParam(2, $last_id, PDO::PARAM_INT);
// $mediaStmt->bindParam(3, $last_id, PDO::PARAM_STR);


// $mediaStmt->execute();
// $mediaStmt = null;



header('Location: project_list.php');
?>
