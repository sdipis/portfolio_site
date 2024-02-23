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
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="css/main.css" type="text/css">
</head>

<body>
    <div class="gridContainer bevel" id="app">
        
        <section class="gridHead bevel">

        <div class="diag topBar tbtwo">
            <div class="blurb">
        <a onclick="close_window();return true;">
        <svg height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499 l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933 l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333 S395.776,277.333,384,277.333z"/></g></g></svg>  
        </a></div>

            <h2><?php echo $row['title']; ?></h2>
        </div>


            <section class="project-gallery">



    <?php 
    if (!empty($images) && $images[0] !== '') {
        for ($i = 0; $i < count($images); $i++) {
            if ($images[$i] !== '') {
                echo '<img class="portfolio-" src="dist/'.$images[$i].'" alt="Project Image">';
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



        <!-- end grid container tag --> 
    </div>
    <script>
function close_window() {
    close();
}
</script>
</body>
</html>
