<!DOCTYPE html>
<html lang="en">
<?php
require_once('../includes/admin_connect.php');
$query = 'SELECT * FROM projects WHERE projects.id = :projectId';
$stmt = $connection->prepare($query);
$projectId = $_GET['id'];
$stmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editing: <?php echo $row['title']?></title>
    <link rel="stylesheet" href="../sass/main.css" type="text/css">

</head>
<body>
    <div class="adminWrapper">

<div class="editPage">
<div class="projectListCont editListCont">


 <?php   echo '<img class="editPageImg" src="../dist/'.$row['display'].'" alt="Project Image">'; ?>


 <form action="edit_project.php" method="POST">
<input name="pk" type="hidden" value="<?php echo $row['id']; ?>">
    <label for="title">project title: </label>
    <input name="title" type="text" value="<?php echo $row['title']; ?>" required><br><br>
    
    <label for="desc">project description: </label>
    <textarea name="desc" ><?php echo $row['description']; ?></textarea><br><br>


    <label for="thumb">project thumbnail: </label>
    <input name="thumb" type="text"  value="<?php echo $row['display']; ?>"><br><br>

    <label for="type">Type: (threedee, design, web +L) </label>
    <textarea name="type" ><?php echo $row['type']; ?></textarea><br><br>

    <label for="moreinfo">More Info: </label>
    <textarea name="moreinfo" ><?php echo $row['moreinfo']; ?></textarea><br><br>


    <input name="submit" type="submit" value="Edit">
</form></div>

</div>


<?php
$stmt = null;
?>
</div>
</body>
</html>
