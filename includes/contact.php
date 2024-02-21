<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');

// Assuming you are sending POST data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the data sent from the client
    $postData = json_decode(file_get_contents('php://input'), true);

    // Extracting values from the received JSON data
    $name = $postData['name'];
    $email = $postData['email'];
    $message = $postData['message'];

    // Your email address where you want to receive the message
    $to = 'spencer@dipidomain.com';

    // Subject and message body
    $subject = 'Contact Form Submission';
    $messageBody = "Name: $name\nEmail: $email\nMessage: $message";

    // Additional headers
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send the email
    $success = mail($to, $subject, $messageBody, $headers);

    // Check if the email was sent successfully
    if ($success) {
        $results = ['success' => true];
        header('Location: ../');

    } else {
        $results = ['success' => false, 'error' => 'Failed to send email'];
    }

    // Return the results as JSON
    echo json_encode($results);
} else {
    // If the request method is not POST, return an error
    echo json_encode(['error' => 'Invalid request method']);
}
?>
