<?php
session_start();

if(!$_SESSION['username']) {
    header( 'Location: login_form.php');
  }

// Include your database connection file
require_once('../includes/admin_connect.php');

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

// Handle form submission for updating user information
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Perform the database update query
$updateQuery = 'UPDATE users SET bio = ?, profile_picture = ?, cell = ?, email = ?, linkedin = ?, instagram = ?, github = ?, artstation =?, codepen =?, firstname = ?, lastname = ? WHERE username = ?';
$updateStmt = $connection->prepare($updateQuery);
$updateStmt->bindParam(1, $_POST['bio'], PDO::PARAM_STR);
$updateStmt->bindParam(2, $_POST['profile_picture'], PDO::PARAM_STR);
$updateStmt->bindParam(3, $_POST['cell'], PDO::PARAM_STR);
$updateStmt->bindParam(4, $_POST['email'], PDO::PARAM_STR);
$updateStmt->bindParam(5, $_POST['linkedin'], PDO::PARAM_STR);
$updateStmt->bindParam(6, $_POST['instagram'], PDO::PARAM_STR);
$updateStmt->bindParam(7, $_POST['github'], PDO::PARAM_STR);
$updateStmt->bindParam(8, $_POST['artstation'], PDO::PARAM_STR);
$updateStmt->bindParam(9, $_POST['codepen'], PDO::PARAM_STR);
$updateStmt->bindParam(10, $_POST['firstname'], PDO::PARAM_STR);
$updateStmt->bindParam(11, $_POST['lastname'], PDO::PARAM_STR);
$updateStmt->bindParam(12, $username, PDO::PARAM_STR);

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
                header('Location: project_list.php');
                exit();
            } else {
                // Handle the update failure (you may choose to display an error message)
                echo "Error updating username and password.";
            }
        } else {
            // Redirect to the profile page
            header('Location: project_list.php');
            exit();
        }
    } else {
        // Handle the update failure (you may choose to display an error message)
        echo "Error updating user information.";
    }
}
?>
