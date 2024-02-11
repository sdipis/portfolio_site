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

<div class="gridContainer bevel" id="app">

    <section class="gridHead bevel">
    <section class="project-gallery">
<?php echo '<img class="detailsImage" src="./dist/'.$row['display'].'" alt="Project Image">';?>

<?php 
for($i =0; $i < count($images); $i++) {

echo '<img class="portfolio-" src="./dist/'.$images[$i].'" alt="Project Image">';

}
?>

</section>
    </section>

<section class="gridMain"><main>


<div class="projectDetails">

<div class="diag pageTitle">
                <h2><?php echo $row['title']; ?></h2>
            </div>

            <div class="projectText bevel diag">
<h1><?php echo $row['title']; ?></h1>

<p><?php echo $row['moreinfo']; ?></p>
<br>
<p2><?php echo $row['description']; ?></p2>
</div>




</div>

<section class="gridFooter spaceBt bevel">
        <nav>
        <ul class="menus spaceBt footerLinks">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Copyright Information</a></li>
        </ul></nav>
    </section>


        </main><!-- end gridMain -->
    </section>




    <a href="./#teamSection">
    <img class="backButton" src="svg/goback.svg" >
    </a>

 <!-- end grid container tag --> </div>



</body>
</html>
