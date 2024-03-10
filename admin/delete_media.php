<?php
require_once('../includes/admin_connect.php');

// Get the project ID from the URL parameter
$projectId = $_GET['id'];

// Prepare and execute the DELETE query for the media table
$mediaQuery = 'DELETE FROM media WHERE media.id = :projectId';
$mediaStmt = $connection->prepare($mediaQuery);
$mediaStmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
$mediaStmt->execute();
$mediaStmt = null;

// Redirect to the project list page
header('Location: media_list.php');
?>
