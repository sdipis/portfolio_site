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
<svg id="Layer_1" class="loaderLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.43 105.67">
  <path class="cls-2" d="M135.45,64.82v31.96c0,4.65-3.77,8.41-8.41,8.41-2.32,0-4.42-.94-5.94-2.46-1.53-1.52-2.47-3.62-2.47-5.95v-25.7c.25-4,2.08-6.1,5.48-6.27h11.34Z"/>
  <path class="cls-2" d="M91.55,8.41v88.85c0,4.64-3.77,8.41-8.41,8.41s-8.41-3.77-8.41-8.41V8.41C74.73,3.77,78.5,0,83.14,0s8.41,3.77,8.41,8.41Z"/>
  <path class="cls-2" d="M162.11,12.88c-2.88-4.21-6.69-7.41-11.41-9.6s-9.81-3.28-15.25-3.28h-30.34c-.14,0-.29,0-.43.01-.33.02-.66.05-.98.11t-.02.01c-3.96.67-6.98,4.13-6.98,8.28v88.85c0,4.65,3.77,8.41,8.41,8.41,3.39,0,6.31-2,7.64-4.89.57-1.02.85-2.14.85-3.36v-30.33c0-.35.01-.68.03-1,.25-4,2.08-6.1,5.48-6.27.16-.02.32-.02.49-.02h16.09c8.48,0,15.73-2.83,21.74-8.51,6-5.67,9-13.29,9-22.85,0-6.15-1.44-11.34-4.32-15.56ZM144.7,41.57c-3.77,2.43-7.65,3.64-11.65,3.64h-14.25c-3.52,0-5.28-2.18-5.28-6.56v-17.98c0-3.9,2-5.84,6-5.84h14.49c4,0,7.73,1.17,11.16,3.52,3.45,2.36,5.17,5.88,5.17,10.58,0,6-1.88,10.21-5.64,12.64Z"/>
  <path class="cls-2" d="M30.98,40.85V8.88c0-4.65,3.77-8.41,8.41-8.41,2.32,0,4.42.94,5.94,2.46,1.53,1.52,2.47,3.62,2.47,5.95v25.7c-.25,4-2.08,6.1-5.48,6.27h-11.34Z"/>

  <path class="cls-2" d="M4.32,92.79c2.88,4.21,6.69,7.41,11.41,9.6s9.81,3.28,15.25,3.28h30.34c.14,0,.29,0,.43-.01.33-.02.66-.05.98-.11t.02-.01c3.96-.67,6.98-4.13,6.98-8.28V8.41c0-4.65-3.77-8.41-8.41-8.41-3.39,0-6.31,2-7.64,4.89-.57,1.02-.85,2.14-.85,3.36v30.33c0,.35-.01.68-.03,1-.25,4-2.08,6.1-5.48,6.27-.16.02-.32.02-.49.02h-16.09c-8.48,0-15.73,2.83-21.74,8.51C3,60.05,0,67.67,0,77.23c0,6.15,1.44,11.34,4.32,15.56ZM21.73,64.1c3.77-2.43,7.65-3.64,11.65-3.64h14.25c3.52,0,5.28,2.18,5.28,6.56v17.98c0,3.9-2,5.84-6,5.84h-14.49c-4,0-7.73-1.17-11.16-3.52-3.45-2.36-5.17-5.88-5.17-10.58,0-6,1.88-10.21,5.64-12.64Z"/>


  <path class="cls-1 cls-orange" d="M135.45,64.82v31.96c0,4.65-3.77,8.41-8.41,8.41-2.32,0-4.42-.94-5.94-2.46-1.53-1.52-2.47-3.62-2.47-5.95v-25.7c.25-4,2.08-6.1,5.48-6.27h11.34Z"/>
  <path class="cls-1 cls-purple" d="M91.55,8.41v88.85c0,4.64-3.77,8.41-8.41,8.41s-8.41-3.77-8.41-8.41V8.41C74.73,3.77,78.5,0,83.14,0s8.41,3.77,8.41,8.41Z"/>
  <path class="cls-1 cls-blue" d="M162.11,12.88c-2.88-4.21-6.69-7.41-11.41-9.6s-9.81-3.28-15.25-3.28h-30.34c-.14,0-.29,0-.43.01-.33.02-.66.05-.98.11t-.02.01c-3.96.67-6.98,4.13-6.98,8.28v88.85c0,4.65,3.77,8.41,8.41,8.41,3.39,0,6.31-2,7.64-4.89.57-1.02.85-2.14.85-3.36v-30.33c0-.35.01-.68.03-1,.25-4,2.08-6.1,5.48-6.27.16-.02.32-.02.49-.02h16.09c8.48,0,15.73-2.83,21.74-8.51,6-5.67,9-13.29,9-22.85,0-6.15-1.44-11.34-4.32-15.56ZM144.7,41.57c-3.77,2.43-7.65,3.64-11.65,3.64h-14.25c-3.52,0-5.28-2.18-5.28-6.56v-17.98c0-3.9,2-5.84,6-5.84h14.49c4,0,7.73,1.17,11.16,3.52,3.45,2.36,5.17,5.88,5.17,10.58,0,6-1.88,10.21-5.64,12.64Z"/>
  <path class="cls-1 cls-green" d="M30.98,40.85V8.88c0-4.65,3.77-8.41,8.41-8.41,2.32,0,4.42.94,5.94,2.46,1.53,1.52,2.47,3.62,2.47,5.95v25.7c-.25,4-2.08,6.1-5.48,6.27h-11.34Z"/>

  <path class="cls-1 cls-blue" d="M4.32,92.79c2.88,4.21,6.69,7.41,11.41,9.6s9.81,3.28,15.25,3.28h30.34c.14,0,.29,0,.43-.01.33-.02.66-.05.98-.11t.02-.01c3.96-.67,6.98-4.13,6.98-8.28V8.41c0-4.65-3.77-8.41-8.41-8.41-3.39,0-6.31,2-7.64,4.89-.57,1.02-.85,2.14-.85,3.36v30.33c0,.35-.01.68-.03,1-.25,4-2.08,6.1-5.48,6.27-.16.02-.32.02-.49.02h-16.09c-8.48,0-15.73,2.83-21.74,8.51C3,60.05,0,67.67,0,77.23c0,6.15,1.44,11.34,4.32,15.56ZM21.73,64.1c3.77-2.43,7.65-3.64,11.65-3.64h14.25c3.52,0,5.28,2.18,5.28,6.56v17.98c0,3.9-2,5.84-6,5.84h-14.49c-4,0-7.73-1.17-11.16-3.52-3.45-2.36-5.17-5.88-5.17-10.58,0-6,1.88-10.21,5.64-12.64Z"/>

</svg>
    <!-- <h2 class="page-title">Loading...</h2> -->
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

    // // Hide the loader when the page is fully loaded
    window.addEventListener("load", function() {
        document.querySelector('.loaderWrapper').style.display = 'none';
    });

</script>

</body>
</html>


