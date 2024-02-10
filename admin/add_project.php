<?php
require_once('../includes/admin_connect.php');
// move uploaded file first, as we need the new name/ path
//save the name in $filename variable

$query = "INSERT INTO projects (title, display, description, type) VALUES (?, ?, ?, ?)";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['thumb'], PDO::PARAM_STR);
// $stmt->bindParam(2, $filename, PDO::PARAM_STR);

$stmt->bindParam(3, $_POST['desc'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['type'], PDO::PARAM_STR);

$stmt->execute();
$last_id=$connection->lastInsertId();
echo $last_id;

// try {
//     $stmt->execute();
//     $last_id = $connection->lastInsertId();
//     //pulls last inserted ID
//     //can use this to link our media images to a project_id after it exists
//     //can insert to media table using $last_id which will be set to latest upload
//     $stmt = null;
//     header('Location: project_list.php');
//     exit();  // Ensure that no further code is executed after redirection
// } catch (PDOException $e) {
//     echo "Error: " . $e->getMessage();
//     die();  // Stop execution to prevent further issues
// }

//insert into media table
$stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(2, $last_id, PDO::PARAM_INT);

header('Location: project_list.php');

?>