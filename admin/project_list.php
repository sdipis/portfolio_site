<!DOCTYPE html>
<html lang="en">

<?php
session_start();

if(!$_SESSION['username']) {
    header( 'Location: login_form.php');
  }

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
  echo '<div id="'.$row['title'].'" class="project-list">'.
      '<img class="detailsImage" src="../dist/'.$row['display'].'" alt="Project Image">'.
      '<p>'.
      $row['title'].
      '<br><a href="edit_project_form.php?id='.$row['id'].'">edit</a>'.

      // Add a confirmation dialog for delete
      '<br><a href="javascript:void(0);" onclick="confirmDelete('.$row['id'].')">delete</a></p>'.
      '</div>';
}

$stmt = null;

?></div>



<div class="listForms">

  <br>
<!-- <h2>Upload an Image:</h2> -->
<br>

<form action="upload" method="post" enctype="multipart/form-data">
<label for="uploaded">Select an Image</label>
<input type="file" name="uploaded" id="uploaded"><br>
<input type="submit" value="upload">
</form>
<br>
<hr>
<h2>Add a new project:</h2>
<br>

<form action="../admin/add_project" method="post">
<div class="user-box">
    <label for="title">project title: </label>
    <input name="title" type="text" required><br><br>
    <label for="thumb">project thumbnail: </label>
    <input name="thumb" type="text" value="<?php echo isset($_SESSION['thumb']) ? $_SESSION['thumb'] : ''; ?>" required><br><br>
<!-- 
    <label for="uploaded">Select an Image</label>
    <input type="file" name="uploaded" id="uploaded"> -->

    <label for="desc">project description: </label>
    <textarea name="desc"></textarea><br><br>

    <label for="type">Tile Size: </label>
<select name="type">
    <option value="design">Small - 1 square wide</option>
    <option value="design-mid">Mid - 2 square wide</option>
    <option value="design-wide">Wide - 3 square wide</option>
    <option value="design-large">Large - 4 square wide</option>
</select><br><br>

<label for="moreinfo">More Information: </label>
    <textarea name="moreinfo"></textarea><br><br>

    <input name="submit" type="submit" value="Add Project">
</div>
</form>

<ul>
<li><a href="../admin/profile.php">Profile</a></li>
<li><a href="../admin/profile.php">Logout</a></li>
</ul>

</div>
</div>
<a href="../index.html"><img class="backButton" src="../svg/goback.svg" /></a>

</body>

<script>

  //enables a "are you sure?" dialoge for user when you click on "delete" for a project in project list
    function confirmDelete(projectId) {
        // Display a confirmation dialog
        var confirmation = confirm("Are you sure you want to delete this project?");

        // If the user clicks "OK" in the confirmation dialog
        if (confirmation) {
            // Redirect to the delete_project.php script with the project ID
            window.location.href = 'delete_project.php?id=' + projectId;
        }
    }
</script>
</html>