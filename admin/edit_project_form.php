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

// $mediaQuery = 'SELECT * FROM media WHERE project_id = :projectId';
// $mediaStmt = $connection->prepare($mediaQuery);
// $mediaStmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
// $mediaStmt->execute();
// $mediaEntries = $mediaStmt->fetchAll(PDO::FETCH_ASSOC);
// 
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
                    <?php echo '<div><img class="editPageImg" src="../'.$row['display'].'" alt="Project Image"></div>'; ?>
                    <?php 
                    if (!empty($images) && $images[0] !== '') {
                        for ($i = 0; $i < count($images); $i++) {
                            if ($images[$i] !== '') {
                                echo '<div><img class="portfolio-" src="../'.$images[$i].'" alt="Project Image"></div>';
                            }
                        }
                    }
                    ?>

<!-- foreach ($mediaEntries as $mediaEntry) {echo '<div><img class="editPageImg" src="../dist/' . $mediaEntry['image_filename'] . '" alt="Media Image"></div> -->
                </div>


                
                
                <div class="listForms">
                <form action="edit_project.php" method="POST">
                    <input name="pk" type="hidden" value="<?php echo $row['id']; ?>">

                    <label for="forward">forward</label>
                    <input name="forward" type="checkbox" <?php echo $row['forward'] ? 'checked' : ''; ?>>

                    <label for="for_id">Forward ID: </label>
                    <input name="for_id" type="text" value="<?php echo $row['for_id']; ?>"><br><br>

                    <label for="title">project title: </label>
                    <input name="title" type="text" value="<?php echo $row['title']; ?>" required><br><br>

                    <label for="dscription">project description: </label>
                    <textarea name="description" ><?php echo $row['description']; ?></textarea><br><br>

                    <label for="moreinfo">More Info: </label>
                    <textarea name="moreinfo" ><?php echo $row['moreinfo']; ?></textarea><br><br>

                    <label for="display">project thumbnail: </label>
                    <input name="display" type="text"  value="<?php echo $row['display']; ?>"><br><br>

                    <label for="type">Type: (tile size) </label>
                    <input name="type" type="text" value="<?php echo $row['type']; ?>"></input><br><br>

                    <label for="content">Content Type (img, video, pdf): </label>
                    <input name="content" type="text" value="<?php echo $row['content']; ?>"></input><br><br>

                    <label for="created_by">By: </label>
                    <input name="created_by" type="text" value="<?php echo $row['created_by']; ?>"></input><br><br>

                    <label for="created_on">Created Date: </label>
                    <input name="created_on" type="text" value="<?php echo $row['created_on']; ?>"></input><br><br>
                    
                    <label for="extra">Extra</label>
                    <input name="extra" type="checkbox" <?php echo $row['extra'] ? 'checked' : ''; ?>>
                    </input><br><br>

                    <label for="extra_content">Extra Content Type (img, video, pdf): </label>
                    <input name="extra_content" type="text" value="<?php echo $row['extra_content']; ?>"></input><br><br>


                    <label for="extra_url">Extra Content URL: </label>
                    <input name="extra_url" type="text" value="<?php echo $row['extra_url']; ?>"></input><br><br>


                    <input name="submit" type="submit" value="Edit">
                    </br></br>
                </form>
                </div>
        </div>
        <?php
        $stmt = null;
        
        ?>
    
    <!-- <a href="../admin/project_list.php"></a> -->

    </div>
    
</body>
</html>
