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
$images = explode(",", $row['images']);
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editing: <?php echo $row['title']?></title>
    <link rel="stylesheet" href="../css/main.css" type="text/css">
</head>

<body>
    <div class="editWrapper adminWrapper">
        <div class="editPage">
                <div class="editPageImages">
                    <?php echo '<div><img class="editPageImg" src="../dist/'.$row['display'].'" alt="Project Image"></div>'; ?>
                    <?php 
                    if (!empty($images) && $images[0] !== '') {
                        for ($i = 0; $i < count($images); $i++) {
                            if ($images[$i] !== '') {
                                echo '<div><img class="portfolio-" src="../dist/'.$images[$i].'" alt="Project Image"></div>';
                            }
                        }
                    }
                    ?>
                </div>
                
                
                <div class="listForms">
                <form action="edit_project" method="POST">
                    <input name="pk" type="hidden" value="<?php echo $row['id']; ?>">
                    <label for="title">project title: </label>
                    <input name="title" type="text" value="<?php echo $row['title']; ?>" required><br><br>

                    <label for="desc">project description: </label>
                    <textarea name="desc" ><?php echo $row['description']; ?></textarea><br><br>

                    <label for="thumb">project thumbnail: </label>
                    <input name="thumb" type="text"  value="<?php echo $row['display']; ?>"><br><br>

                    <label for="type">Type: (threedee, design, web +L) </label>
                    <input name="type" type="text" value="<?php echo $row['type']; ?>"></input><br><br>

                    <label for="moreinfo">More Info: </label>
                    <textarea name="moreinfo" ><?php echo $row['moreinfo']; ?></textarea><br><br>

                    <input name="submit" type="submit" value="Edit">
                </form>
                </div>
        </div>
        <?php
        $stmt = null;
        ?>
                    <a href="../admin/project_list"><img class="backButton" src="../svg/goback.svg" ></a>

    </div>
    
</body>
</html>
