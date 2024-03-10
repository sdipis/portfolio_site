<!DOCTYPE html>
<html lang="en">
<?php
require_once('../includes/admin_connect.php');
$query = 'SELECT * FROM media WHERE media.id = :projectId';
$stmt = $connection->prepare($query);
$projectId = $_GET['id'];
$stmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);
?>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parent Project: <?php echo $row['project_id']?></title>
    <link rel="stylesheet" href="../css/main.css" type="text/css">
</head>

<body>
    <div class="editWrapper adminWrapper">
        <div class="editPage">
                <div class="editPageImages">
                    <?php echo '<div><img class="editPageImg" src="../dist/'.$row['image_filename'].'" alt="Project Image"></div>'; ?>

<!-- foreach ($mediaEntries as $mediaEntry) {echo '<div><img class="editPageImg" src="../dist/' . $mediaEntry['image_filename'] . '" alt="Media Image"></div> -->
                </div>


                
                
                <div class="listForms">
                <form action="edit_media.php" method="POST">
                    <input name="pk" type="hidden" value="<?php echo $row['id']; ?>">

                    <label for="project_id">Parent Project ID: </label>
                    <input name="project_id" type="text" value="<?php echo $row['project_id']; ?>">

                    <label for="image_filename">Image URL: </label>
                    <input name="image_filename" type="text" value="<?php echo $row['image_filename']; ?>"><br><br>

                    <label for="content_type">Content Type: </label>
                    <input name="content_type" type="text" value="<?php echo $row['content_type']; ?>"><br><br>

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
