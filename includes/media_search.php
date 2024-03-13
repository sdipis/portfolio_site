<?php
// search_script.php

// Assuming you have a database connection established
require_once('../includes/admin_connect.php');

$searchTerm = isset($_GET['search']) ? '%' . $_GET['search'] . '%' : '%';
$stmt = $connection->prepare('SELECT project_id, image_filename, content_type FROM media WHERE project_id LIKE :searchTerm ORDER BY project_id ASC');
$stmt->bindParam(':searchTerm', $searchTerm, PDO::PARAM_STR);
$stmt->execute();

// Fetch the results and generate HTML output
$output = '';
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $output .= '<div id="' . $row['project_id'] . '" class="project-list">';
    
    if ($row['content'] === 'video') {
        $output .= '<video class="detailsImage" src="../dist/video_default.jpg" alt="Project Image">';
    } else {
        $output .= '<img class="detailsImage" src="../dist/' . $row['image_filename'] . '" alt="Project Image">';
    }

    $output .= '<p>' .
        $row['id'] .'</p>'.
        '<br><a href="edit_project_form.php?id=' . $row['id'] . '">edit</a>' .
        '<br><a href="javascript:void(0);" onclick="confirmDelete(' . $row['id'] . ')">delete</a></p>' .
        '</div>';
}

echo $output;

// Close the database connection
$stmt = null;
$connection = null;
?>
