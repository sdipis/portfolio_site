<!DOCTYPE html>
<html lang="en">

<?php
session_start();

if(!$_SESSION['username']) {
    header( 'Location: login_form.php');
  }

require_once('../includes/admin_connect.php');
$searchTerm = isset($_GET['search']) ? '%' . $_GET['search'] . '%' : '%';
$stmt = $connection->prepare('SELECT id, title, display, content,type FROM projects WHERE title LIKE :searchTerm ORDER BY title ASC');
$stmt->bindParam(':searchTerm', $searchTerm, PDO::PARAM_STR);
$stmt->execute();

// Retrieve user information from the database
$username = $_SESSION['username'];

$selectQuery = 'SELECT bio, profile_picture, cell, email, linkedin, instagram, github, artstation, codepen, firstname, lastname FROM users WHERE username = ?';
$selectStmt = $connection->prepare($selectQuery);
$selectStmt->bindParam(1, $username, PDO::PARAM_STR);
$selectStmt->execute();

// Fetch user information from the database
if ($selectStmt->rowCount() == 1) {

    $row = $selectStmt->fetch(PDO::FETCH_ASSOC);
    $bio = $row['bio'];
    $profilePicture = $row['profile_picture'];
    $cell = $row['cell'];
    $email = $row['email'];
    $linkedin = $row['linkedin'];
    $instagram = $row['instagram'];
    $github = $row['github'];
    $artstation = $row['artstation'];
    $codepen = $row['codepen'];

    $firstname = $row['firstname'];
    $lastname = $row['lastname'];



} else {
    // Handle the case where the user is not found in the database
    // You may redirect to an error page or take appropriate action
    echo "Error: User not found in the database.";
    exit();
}
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects List</title>
    <link rel="stylesheet" href="../css/main.css" type="text/css">

</head>
<body>
  <div class="adminWrapper">
<!-- FILTER PROJECTS -->


<form action="" method="get" id="filter_form">
    <div class="rowInput">
<h2>Filter Projects   -></h2>

<input type="text" id="search" name="search" placeholder="Project Title...">
</div>
</form>


  <div class="projectListCont">
  <!-- <div class="adminMenu">
<button id="toggleListForms" onclick="toggleListForms()">Toggle List Forms</button>
</div> -->





<?php

if ($stmt->rowCount() > 0) {
    // Move the while loop here
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo '<div class="project-list '.$row['type'].'">';
        
        // Check if the content is a video
        if ($row['content'] === 'video') {

          // echo '<img class="detailsImage" src="../dist/video_default.jpg" alt="Project Image">';

            echo '<video class="detailsImage" preload="meta" playsinline controls>';
            echo '<source class="detailsImage"  src="../'.$row['display'].'#t=0.1" type="video/mp4">';
            echo 'Your browser does not support the video tag.';
            echo '</video>';
        } else {
            // Render as an image by default
            echo '<img class="detailsImage" src="../'.$row['display'].'" alt="Project Image">';
        }

        echo '<div class="project-text">'.'<p>'.
            $row['title'].' '.$row['id'].'</p>'.
            '<ul><li><a href="edit_project_form.php?id='.$row['id'].'">edit</a></li>'.
            '<li><a href="javascript:void(0);" onclick="confirmDelete('.$row['id'].')">delete</a></li></ul></div>'.
            '</div>';
    }
} else {
    echo '<p>No projects found.</p>';
}

$stmt = null;

?></div>


  <div class="listForms">


<!-- ADD PROJECTS -->

<form action="../admin/add_project.php" method="post" id='project_add_form'>
<h2>Add to Projects</h2>

<div class="rowInputShort">
<label for="forward">Forward ID?</label>
<div class="checkbox-wrapper">
    <input type="hidden" name="forward" value="false"> <!-- Default value -->
    <input type="checkbox" name="forward" id="forwardCheckbox" onchange="toggleCheckboxValue(this)">
</div></div>

                    <div class="rowInput">
                    <label for="for_id">Forward to Project: </label>
                    #<input name="for_id" type="text" placeholder="0">
</div>

<div class="user-box">
    <label for="title">Title: </label>
    <input name="title" type="text" placeholder="Project Title" required>



<!-- 
    <label for="uploaded">Select an Image</label>
    <input type="file" name="uploaded" id="uploaded"> -->

    <label for="description">Description: </label>
    <textarea name="description" placeholder="This is my project's description..."></textarea>

<label for="moreinfo">More Information: </label>
    <textarea name="moreinfo" placeholder="Here is some secondary information..."></textarea>

    <label for="display">Tile Image: </label>
    <input placeholder="Upload media first..." name="display" type="text" value="<?php echo isset($_SESSION['thumb']) ? $_SESSION['thumb'] : ''; ?>" required>


<div class="rowInput">
    <label for="type">Tile Width: </label>
                    <select name="type">
    <option value="design">1</option>
    <option value="design-mid">2</option>
    <option value="design-wide">3</option>
    <option value="design-large">4</option>

</select></div>
        



            <div class="rowInput">
    <label for="content">Media Type: </label>
                    <select name="content">
    <option value="img">image</option>
    <option value="video">video</option>
    <option value="pdf">pdf</option>
</select></div>

<div class="rowInputShort">
        <label for="created_by">By: </label>
        <input name="created_by" type="text" placeholder="Spencer Dipi"></input></div>

        <div class="rowInput">
        <label for="created_on">Created: </label>
        <input name="created_on" type="text" placeholder="2024"></input>
        </div>

        <div class="rowInput">
        <label for="extra">Extra Content?</label>
            <input name="extra" type="checkbox">
            </input></div>
            
        

                <div class="rowInput">
    <label for="extra_content">Media Type: </label>
                    <select name="extra_content">
    <option value="img">image</option>
    <option value="video">video</option>
    <option value="pdf">pdf</option>
</select></div>

        <label for="extra_url">Extra Content URL: </label>
            <input placeholder="Upload media first..." name="extra_url" type="text"></input>
        
            <input name="submit" type="submit" value="Add Project">
            </div>
        </form>


</div>
    



<!-- RIGHT SIDE LIST -->


<div class=listForms>

<ul class="adminLinksBot">
<li><a href="./">
<svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5 3H16C15.7239 3 15.5 3.22386 15.5 3.5V3.55891L19 6.35891V3.5C19 3.22386 18.7762 3 18.5 3Z" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 10.9605L21.5315 11.5857C21.855 11.8444 22.3269 11.792 22.5857 11.4685C22.8444 11.1451 22.792 10.6731 22.4685 10.4143L14.3426 3.91362C12.9731 2.81796 11.027 2.81796 9.65742 3.91362L1.53151 10.4143C1.20806 10.6731 1.15562 11.1451 1.41438 11.4685C1.67313 11.792 2.1451 11.8444 2.46855 11.5857L3.25003 10.9605V21.25H2.00003C1.58581 21.25 1.25003 21.5858 1.25003 22C1.25003 22.4142 1.58581 22.75 2.00003 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V10.9605ZM9.25003 9.5C9.25003 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25003 11.0188 9.25003 9.5ZM12.0494 13.25C12.7143 13.25 13.2871 13.2499 13.7459 13.3116C14.2375 13.3777 14.7088 13.5268 15.091 13.909C15.4733 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827C15.75 16.8679 15.75 16.9091 15.75 16.9506L15.75 21.25H14.25V17C14.25 16.2717 14.2484 15.8009 14.2018 15.454C14.1581 15.1287 14.0875 15.0268 14.0304 14.9697C13.9733 14.9126 13.8713 14.842 13.546 14.7982C13.1991 14.7516 12.7283 14.75 12 14.75C11.2717 14.75 10.8009 14.7516 10.4541 14.7982C10.1288 14.842 10.0268 14.9126 9.9697 14.9697C9.9126 15.0268 9.84199 15.1287 9.79826 15.454C9.75162 15.8009 9.75003 16.2717 9.75003 17V21.25H8.25003L8.25003 16.9506C8.24999 16.2858 8.24996 15.7129 8.31163 15.2542C8.37773 14.7625 8.52679 14.2913 8.90904 13.909C9.29128 13.5268 9.76255 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9507 13.25H12.0494Z" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"></path> </g></svg>
</a></li>
<li><a href="../admin/media_list.php">
<svg fill="#000000" width="48px" height="48px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M746.667 1374.31V545.935l690.346 414.187-690.346 414.186ZM1879.04 321.615c-600.107-143.467-1238.4-143.467-1838.08 0L0 331.429v1257.494l40.96 9.813c300.053 71.68 609.28 108.053 919.04 108.053 309.867 0 619.2-36.373 919.04-108.053l40.96-9.813V331.429l-40.96-9.813Z" fill-rule="evenodd"></path> </g></svg>
</a></li>
<li><a href="../admin/message_central.php">
<svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.094 21.8795 10.2162 21.6537 9.38161C21.5684 9.06633 21.1987 8.94083 20.9028 9.0791C20.3248 9.34916 19.68 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 4.31996 14.6508 3.67516 14.9209 3.09722C15.0592 2.80131 14.9337 2.4316 14.6184 2.3463C13.7838 2.12048 12.906 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" ></path> <circle cx="19" cy="5" r="3" ></circle> </g></svg>
</a></li>

 <!-- <li><a href="../admin/logout.php">Logout</a></li> -->
</ul>


        <!-- UPLOAD MEDIA -->
        <form action="../admin/upload.php" method="POST" enctype="multipart/form-data" id="upload_form">
<h2>Upload Media</h2>

<!-- <label for="uploaded">Upload Media</label> -->
<div class="rowInput">
<input type="file" name="uploaded" id="uploaded">
<input type="submit" value="upload"></div>
<p>Upload media here. The media can be used with project form, or media form.</p><br>
</form>

<!-- MEDIA TABLE UPLOAD -->
<form action="../admin/add_media.php" method="post" id="media_add_form">
<h2>Add to Media Table</h2>

<div class="user-box">
    <div class="rowInput">
    <label for="project_id">Parent ID:</label>
    #<input name="project_id" type="text" placeholder="0"></div>

    <label for="image_filename">Media URL: </label>
    <input placeholder="Upload media first..." name="image_filename" type="text" value="<?php echo isset($_SESSION['thumb']) ? $_SESSION['thumb'] : ''; ?>" required>


<div class="rowInput">
    <label for="content_type">Media Type: </label>
                    <select name="content_type">
    <option value="img">image</option>
    <option value="video">video</option>
    <option value="pdf">pdf</option>
</select></div>
    
    <input name="submit" type="submit" value="Add Media">
</form>
</div>




</div>

<div class="listForms">
    <!-- user form -->

<form action="edit_profile.php" method="post" id="profile_form">
<h2>User Profile</h2><br>

            <label for="firstname">First Name:</label>
            <input type="text" name="firstname" value="<?php echo $firstname; ?>">
           
                    
            <label for="lastname">Last Name:</label>
            <input type="text" name="lastname" value="<?php echo $lastname; ?>">

            <label for="bio">Bio:</label>
            <textarea name="bio" id="bio" rows="4" cols="50"><?php echo $bio; ?></textarea>

            <label for="profile_picture">Profile Picture:</label>
            <input type="text" name="profile_picture" id="profile_picture" value="<?php echo $profilePicture; ?>">

            <label for="cell">Phone:</label>
            <input type="text" name="cell" value="<?php echo $cell; ?>">

            <label for="email">Email:</label>
            <input type="email" name="email" value="<?php echo $email; ?>">

            <label for="linkedin">LinkedIn:</label>
            <input type="text" name="linkedin" value="<?php echo $linkedin; ?>">

            <label for="instagram">Instagram:</label>
            <input type="text" name="instagram" value="<?php echo $instagram; ?>">

            <label for="github">Github:</label>
            <input type="text" name="github" value="<?php echo $github; ?>">

            <label for="artstation">ArtStation:</label>
            <input type="text" name="artstation" value="<?php echo $artstation; ?>">

            <label for="codepen">CodePen:</label>
            <input type="text" name="codepen" value="<?php echo $codepen; ?>">

            <!-- Additional fields for updating username and password -->
            <label for="new_username">Username:</label>
            <input type="text" name="new_username" value="<?php echo $username; ?>">

            <label for="new_password">Password:</label>
            <input type="password" name="new_password" value="">

            <input type="submit" value="Save Profile Info">
        </form></div>

        

</body>

<script>
        document.addEventListener('DOMContentLoaded', function () {
            // Attach input event to the search input
            document.getElementById('search').addEventListener('input', function () {
                performSearch();
            });
        });

        function toggleCheckboxValue(checkbox) {
    var hiddenInput = document.querySelector('input[name="forward"]');
    hiddenInput.value = checkbox.checked ? "true" : "false";
}
        // Function to perform the search
        function performSearch() {
            var searchTerm = document.getElementById('search').value;

            // Make an AJAX request to your server (replace with actual URL)
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '../includes/search.php?search=' + encodeURIComponent(searchTerm), true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Update the project list container with the new results
                    document.querySelector('.projectListCont').innerHTML = xhr.responseText;
                }
            };

            xhr.send();
        }

        // Your existing script for confirmDelete function
        function confirmDelete(projectId) {
            var confirmation = confirm("Are you sure you want to delete this project?");
            if (confirmation) {
                window.location.href = 'delete_project.php?id=' + projectId;
            }
        }

        function toggleListForms() {
        var listForms = document.getElementById('listForms');

        if (parseInt(listForms.style.right) < 0) {
            listForms.style.right = '0';
        } else {
            listForms.style.right = '-40vw'; // Adjust to the width of your listForms
        }
    }
    </script>
</html>