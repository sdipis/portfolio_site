<?php
// search_script.php

// Assuming you have a database connection established
require_once('../includes/admin_connect.php');

$mediaSearch = isset($_GET['mediaSearch']) ? '%' . $_GET['mediaSearch'] . '%' : '%';
$mediaStmt = $connection->prepare('SELECT id, project_id, image_filename, content_type FROM media WHERE project_id LIKE :mediaSearch ORDER BY id ASC');
$mediaStmt->bindParam(':mediaSearch', $mediaSearch, PDO::PARAM_STR);
$mediaStmt->execute();

// Fetch the results and generate HTML output
$output = '';
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $output .= '<div id="' . $row['project_id'] . '" class="project-list">';
    
    if ($row['content'] === 'video') {
        $output .= '<video class="detailsImage" src="../video_default.jpg" alt="Project Image">';
    } else {
        $output .= '<img class="detailsImage" src="../' . $row['image_filename'] . '" alt="Project Image">';
    }

    $output .= '<p>' .
        $row['id'] .'</p>'.
        '<br><a href="edit_project_form.php?id=' . $row['id'] . '">edit</a>' .
        '<br><a href="javascript:void(0);" onclick="confirmDelete(' . $row['id'] . ')">delete</a></p>' .
        '</div>';
}

echo $output;

// Close the database connection
$mediaStmt = null;
$connection = null;
?>
