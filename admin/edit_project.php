<?php
require_once('../includes/admin_connect.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);
$query = "UPDATE projects SET title = ?,description = ?,moreinfo=?,display=?,type=?,content=?,created_by=?,created_on=?,extra=?,extra_content=?,extra_url=?,forward=?,for_id=? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['description'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['moreinfo'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['display'], PDO::PARAM_STR);
$stmt->bindParam(5, $_POST['type'], PDO::PARAM_STR);
$stmt->bindParam(6, $_POST['content'], PDO::PARAM_STR);
$stmt->bindParam(7, $_POST['created_by'], PDO::PARAM_STR);
$stmt->bindParam(8, $_POST['created_on'], PDO::PARAM_INT);
$stmt->bindParam(9, $_POST['extra'], PDO::PARAM_STR);
$stmt->bindParam(10, $_POST['extra_content'], PDO::PARAM_STR);
$stmt->bindParam(11, $_POST['extra_url'], PDO::PARAM_STR);
$stmt->bindParam(12, $_POST['forward'], PDO::PARAM_STR);
$stmt->bindParam(13, $_POST['for_id'], PDO::PARAM_INT);
$stmt->bindParam(14, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: project_list.php');
?>
