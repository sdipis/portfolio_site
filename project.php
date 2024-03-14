<!DOCTYPE html>
<?php
require_once('includes/admin_connect.php');

$query = 'SELECT image_filename, created_on, created_by, content_type, description, display, title, moreinfo, extra, extra_content, extra_url FROM projects, media WHERE projects.id = project_id AND projects.id = :projectId';
$stmt = $connection->prepare($query);
$projectId = $_GET['id'];
$stmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
$stmt->execute();

// Fetch all rows at once
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
$stmt = null;

$isVideo = ($rows[0]['extra'] && $rows[0]['extra_content'] === 'video');

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $row['title']; ?></title>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js" integrity="sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


</head>

<body>
<div class="loaderWrapper">
<div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
</div>
</div>
    <div class="gridContainer bevel" id="app">



    

    <section class="gridHead bevel">
            <section class="project-gallery">
 

            <?php
                foreach ($rows as $row) {
                    $images = explode(",", $row['image_filename']);
                    $contentType = trim(strtolower($row['content_type']));

                    // echo 'Content Type: ' . $contentType . '<br>';

                    if (!empty($images) && $images[0] !== '') {
                        foreach ($images as $image) {
                            if ($image !== '') {
                                if ($contentType === 'video') {
                                    echo '<video preload="meta" class="portfolio-" src="dist/' . $image . '"#t=0.1" controls playsInline></video>';
                                } elseif ($contentType === 'img') {
                                    echo '<img class="portfolio-" src="dist/' . $image . '" alt="Project Image">';
                                } else {
                                    echo 'Unsupported content type or content type is null.';
                                }
                            }
                        }
                    }
                }
                ?>
 

                <?php
                function renderExtraContent($row) {
                    switch ($row['extra_content']) {
                        case 'video':
                            echo '<div class="extraContent"><video src="'.$row['extra_url'].'" controls playsInline></video></div>';
                            break;

                        case 'pdf':
                            echo '<div class="extraContent"><embed src="' . $row['extra_url'] . '#view=fitH#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf"></div>';
                            break;

                        case 'image':
                            echo '<div class="extraContent"><img src="'.$row['extra_url'].'" alt="Extra Image"></div>';
                            break;

                        default:
                            echo '<div>Unsupported extra content type</div>';
                            break;
                    }
                }
                if($row['extra']){
                renderExtraContent($row);
                }

                ?>
            </section>
        </section>

        <section class="gridMain">

            <main>

            <div class="projectText bevel diag">
           


                <div class="projectDetails">


                    <div class="titleAndArrow">
                    <a onclick="close_window();return true;">
                    <svg height="40px" class="ib2" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499 l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933 l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333 S395.776,277.333,384,277.333z"/></g></g></svg>  
                    </a>
                        <h1><?php echo $row['title']; ?></h1>
      
            </div>
                        <p><?php echo $row['moreinfo']; ?></p>
                        <br>
                        <p2><?php echo $row['description']; ?></p2>
                        <br><br>
                        <ul class="jots">
                        <li><h2><?php echo $row['created_by']?></h2></li>
                        <li><h2><?php echo $row['created_on']?></h2></li>
                        </ul>


                    <div class="qrCont">
                    <div id="qrcode"></div>
                        </div>
                </div>


                </div>                        



        <!-- end grid container tag --> 
    </div>

    <script>

    function close_window() {
      window.scrollTo(0, 0);
      close();
    };

    function makeCode() {
        let qrcode = new QRCode("qrcode");

      let urlLink = "<?php echo 'https://dipidomain.com/project.php?id='.$projectId; ?>";
      qrcode.makeCode(urlLink);
    }

    makeCode();

        // Show the loader when the page starts loading
        document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.loaderWrapper').style.display = 'flex';
    });

    // Hide the loader when the page is fully loaded
    window.addEventListener("load", function() {
        document.querySelector('.loaderWrapper').style.display = 'none';
    });

</script>

</body>
</html>


