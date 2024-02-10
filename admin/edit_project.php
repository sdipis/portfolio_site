<?php
require_once('../includes/admin_connect.php');
$query = "UPDATE projects SET title = ?,display = ?,description=?,type=? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['thumb'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['desc'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['type'], PDO::PARAM_STR);
$stmt->bindParam(5, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: project_list.php');
?>
