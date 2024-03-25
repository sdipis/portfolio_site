<?php
// search_script.php

// Assuming you have a database connection established
require_once('../includes/admin_connect.php');

$searchTerm = isset($_GET['search']) ? '%' . $_GET['search'] . '%' : '%';
$stmt = $connection->prepare('SELECT id, title, display, content FROM projects WHERE title LIKE :searchTerm ORDER BY title ASC');
$stmt->bindParam(':searchTerm', $searchTerm, PDO::PARAM_STR);
$stmt->execute();

// Fetch the results and generate HTML output
$output = '';
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $output .= '<div id="' . $row['title'] . '" class="project-list">';
    
    if ($row['content'] === 'video') {
        $output .= '<video class="detailsImage" src="../' . $row['display'] . '" alt="Project Image" autoplay muted playsinline></video>';
    } else {
        $output .= '<img class="detailsImage" src="../' . $row['display'] . '" alt="Project Image" />';
    }

    $output .= 
    '<div class="project-text">'.
    '<ul><li><p>'.
    $row['title'].'</p></li><li><p>'.$row['id'].'</p></li>'.
    '</ul>'.
    '<ul><li><a href="edit_project_form.php?id='.$row['id'].'">edit</a></li>'.
    '<li><a href="javascript:void(0);" onclick="confirmDelete('.$row['id'].')">delete</a></li></ul></div>'.
    '</div>';


}

echo $output;

// Close the database connection
$stmt = null;
$connection = null;
?>
