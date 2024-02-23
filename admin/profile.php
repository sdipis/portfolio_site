<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header('Location: login_form.php');
    exit();
}

// Include your database connection file
require_once('../includes/admin_connect.php');

// Retrieve user information from the database
$username = $_SESSION['username'];

$selectQuery = 'SELECT bio, profile_picture, cell, email, linkedin, instagram, nickname FROM users WHERE username = ?';
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
    $nickname = $row['nickname']; // Add this line for nickname

} else {
    // Handle the case where the user is not found in the database
    // You may redirect to an error page or take appropriate action
    echo "Error: User not found in the database.";
    exit();
}

// Handle form submission for updating user information
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate and update user information in the database

    // Update the bio
    $newBio = $_POST['bio'];  // Validate and sanitize as needed
    $newNickname = $_POST['nickname'];

    // Update the profile picture (assuming you store the file path in the database)
    $newProfilePicture = $_POST['profile_picture'];  // Assuming profile_picture is a text field
    // You may want to add validation and handling for the profile picture URL

    // Update other fields
    $newCell = $_POST['cell'];
    $newEmail = $_POST['email'];
    $newLinkedIn = $_POST['linkedin'];
    $newInstagram = $_POST['instagram'];

// Perform the database update query
$updateQuery = 'UPDATE users SET bio = ?, profile_picture = ?, cell = ?, email = ?, linkedin = ?, instagram = ?, nickname = ? WHERE username = ?';
$updateStmt = $connection->prepare($updateQuery);
$updateStmt->bindParam(1, $newBio, PDO::PARAM_STR);
$updateStmt->bindParam(2, $newProfilePicture, PDO::PARAM_STR);
$updateStmt->bindParam(3, $newCell, PDO::PARAM_STR);
$updateStmt->bindParam(4, $newEmail, PDO::PARAM_STR);
$updateStmt->bindParam(5, $newLinkedIn, PDO::PARAM_STR);
$updateStmt->bindParam(6, $newInstagram, PDO::PARAM_STR);
$updateStmt->bindParam(7, $newNickname, PDO::PARAM_STR); // Add this line for nickname
$updateStmt->bindParam(8, $username, PDO::PARAM_STR);

    // Execute the update query
    if ($updateStmt->execute()) {
        // Check if there's a new username and password to update
        if (!empty($_POST['new_username']) && !empty($_POST['new_password'])) {
            // Update username and password
            $newUsername = $_POST['new_username'];
            $newPassword = password_hash($_POST['new_password'], PASSWORD_DEFAULT);
            $updateCredentialsQuery = 'UPDATE users SET username = ?, password = ? WHERE username = ?';
            $updateCredentialsStmt = $connection->prepare($updateCredentialsQuery);
            $updateCredentialsStmt->bindParam(1, $newUsername, PDO::PARAM_STR);
            $updateCredentialsStmt->bindParam(2, $newPassword, PDO::PARAM_STR);
            $updateCredentialsStmt->bindParam(3, $username, PDO::PARAM_STR);

            if ($updateCredentialsStmt->execute()) {
                // Redirect to the profile page
                header('Location: profile.php');
                exit();
            } else {
                // Handle the update failure (you may choose to display an error message)
                echo "Error updating username and password.";
            }
        } else {
            // Redirect to the profile page
            header('Location: profile.php');
            exit();
        }
    } else {
        // Handle the update failure (you may choose to display an error message)
        echo "Error updating user information.";
    }
}

// Display user profile information
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $nickname?>'s Profile</title>
    <link rel="stylesheet" href="../sass/main.css" type="text/css">
</head>
<body>
    <div class="adminWrapper profileWrapper">
        <div class="profilePage">
            <!-- Display current user information -->
            <img src="<?php echo $profilePicture; ?>" alt="Profile Picture" />
            <p>Name: <span><?php echo $nickname; ?></span></p>
            <p>Bio: <span><?php echo $bio; ?></span></p>
            <p>Cell: <span><?php echo $cell; ?></span></p>
            <p>Email: <span><?php echo $email; ?></span></p>
            <p>LinkedIn: <span><?php echo $linkedin; ?></span></p>
            <p>Instagram: <span><?php echo $instagram; ?></span></p>
        </div>

        <!-- Form for updating user information -->
        
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        
            <label for="nickname">Nickname:</label>
            <input type="text" name="nickname" value="<?php echo $nickname; ?>"><br>
           
            <label for="bio">Bio:</label>
            <textarea name="bio" id="bio" rows="4" cols="50"><?php echo $bio; ?></textarea><br>

            <label for="profile_picture">Profile Picture:</label>
            <input type="text" name="profile_picture" id="profile_picture" value="<?php echo $profilePicture; ?>"><br>

            <label for="cell">Phone:</label>
            <input type="text" name="cell" value="<?php echo $cell; ?>"><br>

            <label for="email">Email:</label>
            <input type="email" name="email" value="<?php echo $email; ?>"><br>

            <label for="linkedin">LinkedIn:</label>
            <input type="text" name="linkedin" value="<?php echo $linkedin; ?>"><br>

            <label for="instagram">Instagram:</label>
            <input type="text" name="instagram" value="<?php echo $instagram; ?>"><br>

            <!-- Additional fields for updating username and password -->
            <label for="new_username">Username:</label>
            <input type="text" name="new_username" value="<?php echo $username; ?>"><br>

            <label for="new_password">Password:</label>
            <input type="password" name="new_password" value=""><br>

            <input type="submit" value="Save Profile Info">
        </form>
    </div>
    <a href="../index.html"><img class="backButton" src="../svg/goback.svg" /></a>

</body>
</html>
