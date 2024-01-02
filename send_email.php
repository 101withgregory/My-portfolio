<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $username = $_POST["username"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Email configuration
    $to = "101withgregoryonyando@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";

    // Compose the email message
    $email_message = "Username: $username\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone: $phone\n\n";
    $email_message .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $email_message, $headers);

    // Redirect to a thank you page or back to the contact page
    header("Location: index`.html");  // Create a thank_you.html page
    exit();
}
?>
