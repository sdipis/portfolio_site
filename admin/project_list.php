<!DOCTYPE html>
<html lang="en">

<?php
session_start();

require_once('../includes/admin_connect.php');
$stmt = $connection->prepare('SELECT id,title FROM projects ORDER BY title ASC');
$stmt->execute();
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMS Main Page</title>
    <link rel="stylesheet" href="../sass/main.css" type="text/css">

</head>
<body>
  <div class="adminWrapper">
<div>
<?php

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

  echo  '<p class="project-list">'.
  $row['title'].
  '<br><a href="edit_project_form.php?id='.$row['id'].'">edit</a>'.

  '<br><a href="delete_project.php?id='.$row['id'].'">delete</a></p>';
}

$stmt = null;

?></div>
<br><br><br>
<form action="../admin/add_project.php" method="post">
    <label for="title">project title: </label>
    <input name="title" type="text" required><br><br>
    <label for="thumb">project thumbnail: </label>
    <input name="thumb" type="text" required><br><br>
    <label for="desc">project description: </label>
    <textarea name="desc" required></textarea><br><br>

    <label for="type">Project Type: </label>
<select name="type" required>
    <option value="design">Design</option>
    <option value="design-large">Design L</option>
    <option value="threedee">3D</option>
    <option value="threedee-large">3D L</option>
    <option value="webs">Web</option>
    <option value="webs-large">Web L</option>
</select><br><br>

    <input name="submit" type="submit" value="Add Project">
</form>

</div>
</body>
</html>
