<?php
require_once('../includes/admin_connect.php');

// Get the project ID from the URL parameter
$projectId = $_GET['id'];

// Prepare and execute the DELETE query for the projects table
$projectQuery = 'DELETE FROM projects WHERE projects.id = :projectId';
$projectStmt = $connection->prepare($projectQuery);
$projectStmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
$projectStmt->execute();
$projectStmt = null;

// Prepare and execute the DELETE query for the media table
$mediaQuery = 'DELETE FROM media WHERE media.project_id = :projectId';
$mediaStmt = $connection->prepare($mediaQuery);
$mediaStmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
$mediaStmt->execute();
$mediaStmt = null;

// Redirect to the project list page
header('Location: project_list.php');
?>
