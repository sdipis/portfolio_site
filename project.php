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
$stmt = null;
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $row['title']; ?></title>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="css/main.css" type="text/css">
</head>

<body>
    <div class="gridContainer bevel" id="app">
        
        <section class="gridHead bevel">
        <div class="diag pageTitle"><h2><?php echo $row['title']; ?></h2></div>


            <section class="project-gallery">

    <?php echo '<img class="detailsImage" src="./dist/'.$row['display'].'" alt="Project Image">';?>


    <?php 
    if (!empty($images) && $images[0] !== '') {
        for ($i = 0; $i < count($images); $i++) {
            if ($images[$i] !== '') {
                echo '<img class="portfolio-" src="./dist/'.$images[$i].'" alt="Project Image">';
            }
        }
    }
    ?>
    
</section>

        </section>

        <section class="gridMain">

            <main>

                <div class="projectDetails">
                    <div class="projectText bevel diag">
                        <h1><?php echo $row['title']; ?></h1>
                        <p><?php echo $row['moreinfo']; ?></p>
                        <br>
                        <p2><?php echo $row['description']; ?></p2>
                    </div>
                </div>

                <section class="gridFooter bevel diag">
        <nav>
        <ul class="menus footerLinks">
            <li><a href="admin/login_form.php">Login</a></li>
            <li><a href="admin/profile.php">Profile</a></li>
        </ul></nav>
    </section>

        <a onclick="close_window();return true;">
            <img class="backButton" src="svg/goback.svg" >
        </a>

        <!-- end grid container tag --> 
    </div>
    <script>
function close_window() {
    close();
}
        </script>
</body>
</html>
