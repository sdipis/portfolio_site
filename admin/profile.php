<?php
session_start();

if(!$_SESSION['username']) {
    header( 'Location: login_form.php');
  }

// Include your database connection file
require_once('../includes/admin_connect.php');

// Retrieve user information from the database
$username = $_SESSION['username'];

$selectQuery = 'SELECT bio, profile_picture, cell, email, linkedin, instagram, github, firstname, lastname FROM users WHERE username = ?';
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
    $firstname = $row['firstname'];
    $lastname = $row['lastname'];



} else {
    // Handle the case where the user is not found in the database
    // You may redirect to an error page or take appropriate action
    echo "Error: User not found in the database.";
    exit();
}

// Handle form submission for updating user information
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Perform the database update query
$updateQuery = 'UPDATE users SET bio = ?, profile_picture = ?, cell = ?, email = ?, linkedin = ?, instagram = ?, github = ?, firstname = ?, lastname = ? WHERE username = ?';
$updateStmt = $connection->prepare($updateQuery);
$updateStmt->bindParam(1, $_POST['bio'], PDO::PARAM_STR);
$updateStmt->bindParam(2, $_POST['profile_picture'], PDO::PARAM_STR);
$updateStmt->bindParam(3, $_POST['cell'], PDO::PARAM_STR);
$updateStmt->bindParam(4, $_POST['email'], PDO::PARAM_STR);
$updateStmt->bindParam(5, $_POST['linkedin'], PDO::PARAM_STR);
$updateStmt->bindParam(6, $_POST['instagram'], PDO::PARAM_STR);
$updateStmt->bindParam(7, $_POST['github'], PDO::PARAM_STR);
$updateStmt->bindParam(8, $_POST['firstname'], PDO::PARAM_STR);
$updateStmt->bindParam(9, $_POST['lastname'], PDO::PARAM_STR);
$updateStmt->bindParam(10, $username, PDO::PARAM_STR);

    // Execute the update query
    if ($updateStmt->execute()) {
        // Check if there's a new username and password to update
        if (!empty($_POST['new_username']) && !empty($_POST['new_password'])) {
            // Update username and password
            $username = $_POST['new_username'];
            $password = password_hash($_POST['new_password'], PASSWORD_DEFAULT);
            $updateCredentialsQuery = 'UPDATE users SET username = ?, password = ? WHERE username = ?';
            $updateCredentialsStmt = $connection->prepare($updateCredentialsQuery);
            $updateCredentialsStmt->bindParam(1, $username, PDO::PARAM_STR);
            $updateCredentialsStmt->bindParam(2, $password, PDO::PARAM_STR);

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
    <title><?php echo $firstname?>'s Profile</title>
    <link rel="stylesheet" href="../css/main.css" type="text/css">
</head>
<body>
    <div class="adminWrapper profileWrapper">
        <div class="profilePage">
            <!-- Display current user information -->
            <img src="<?php echo $profilePicture; ?>" alt="Profile Picture" />
            <p>First Name: <span><?php echo $firstname; ?></span></p>
            <p>Last Name: <span><?php echo $lastname; ?></span></p>
            <p>Bio: <span><?php echo $bio; ?></span></p>
            <p>Cell: <span><?php echo $cell; ?></span></p>
            <p>Email: <span><?php echo $email; ?></span></p>
            <p>LinkedIn: <span><?php echo $linkedin; ?></span></p>
            <p>Instagram: <span><?php echo $instagram; ?></span></p>
            <p>GitHub: <span><?php echo $github; ?></span></p>

        </div>

        <!-- Form for updating user information -->
        
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        
            <label for="firstname">First Name:</label>
            <input type="text" name="firstname" value="<?php echo $firstname; ?>"><br>
           
                    
            <label for="lastname">Last Name:</label>
            <input type="text" name="lastname" value="<?php echo $lastname; ?>"><br>

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

            <label for="github">Github:</label>
            <input type="text" name="github" value="<?php echo $github; ?>"><br>

            <!-- Additional fields for updating username and password -->
            <label for="new_username">Username:</label>
            <input type="text" name="new_username" value="<?php echo $username; ?>"><br>

            <label for="new_password">Password:</label>
            <input type="password" name="new_password" value=""><br>

            <input type="submit" value="Save Profile Info">
        </form>
    </div>

</body>
</html>
