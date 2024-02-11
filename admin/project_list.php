<!DOCTYPE html>
<html lang="en">

<?php
session_start();

require_once('../includes/admin_connect.php');
$stmt = $connection->prepare('SELECT id,title,display FROM projects ORDER BY title ASC');
$stmt->execute();
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add/ Edit Projects</title>
    <link rel="stylesheet" href="../sass/main.css" type="text/css">

</head>
<body>
  <div class="adminWrapper">
<div class="projectListCont">
<?php

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
  echo '<div id="'.$row['title'].'" class="project-list"><img class="detailsImage" src="../dist/'.$row['display'].'" alt="Project Image">'.
  '<p>'.
  $row['title'].
  '<br><a href="edit_project_form.php?id='.$row['id'].'">edit</a>'.

  '<br><a href="delete_project.php?id='.$row['id'].'">delete</a></p></div>';
}

$stmt = null;

?></div>



<div class="listForms">
  <br>
<h2>Upload an Image:</h2>

<form action="upload.php" method="post" enctype="multipart/form-data">
<label for="uploaded">Select an Image</label>
<input type="file" name="uploaded" id="uploaded"><br>
<input type="submit" value="upload">
</form>
<br>
<h2>Add a new project:</h2>

<form action="../admin/add_project.php" method="post">

    <label for="title">project title: </label>
    <input name="title" type="text" required><br><br>
    <label for="thumb">project thumbnail: </label>
    <input name="thumb" type="text" value="<?php echo isset($_SESSION['thumb']) ? $_SESSION['thumb'] : ''; ?>" required><br><br>
<!-- 
    <label for="uploaded">Select an Image</label>
    <input type="file" name="uploaded" id="uploaded"> -->

    <label for="desc">project description: </label>
    <textarea name="desc"></textarea><br><br>

    <label for="type">Project Type: </label>
<select name="type">
    <option value="design">Design</option>
    <option value="design-mid">Design Mid</option>
    <option value="design-wide">Design Wide</option>
    <option value="design-large">Design Large</option>
</select><br><br>

<label for="moreinfo">More Information: </label>
    <textarea name="moreinfo"></textarea><br><br>

    <input name="submit" type="submit" value="Add Project">
</form>
</div>

</div>
</body>
</html>
