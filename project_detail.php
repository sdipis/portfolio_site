<!DOCTYPE html>
<?php
require_once('includes/admin_connect.php');
$query = 'SELECT GROUP_CONCAT(image_filename) AS images, description, display, title, moreinfo FROM projects, media WHERE projects.id = project_id AND projects.id = :projectId';
$stmt = $connection->prepare($query);
$projectId = $_GET['id'];
$stmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$images = explode(",", $row['images']);
//explode function takes a string and cuts it up depending on the seperator you have set
//in this case, we are exploding the 'images' row. We declare a seperator of ','
//example: ['image1.jpg','image2.jpg,']
$stmt = null;
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $row['title']; ?></title>
    <link rel="stylesheet" href="sass/main.css" type="text/css">

</head>
<body>

    <div class="projectDetails">

    <a href="index.html#teamSection">
    <img id="backButton" src="svg/goback.svg" >
    </a>


<section class="project-gallery">
<?php echo '<img class="detailsImage" src="./dist/'.$row['display'].'" alt="Project Image">';?>

<?php 
for($i =0; $i < count($images); $i++) {

echo '<img class="portfolio-" src="./dist/'.$images[$i].'" alt="Project Image">';

}
?>
</section>
<div class="projectText bevel diag">
<h1><?php echo $row['title']; ?></h1>
<p><?php echo $row['description']; ?></p>
<br><br>
<p><?php echo $row['moreinfo']; ?></p>
</div>


</div>


</body>
</html>
