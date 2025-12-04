<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $fullName = strip_tags(trim($_POST["fullName"]));
    $email = filter_var(trim($_POST["emailAddress"]), FILTER_SANITIZE_EMAIL);
    $mobile = strip_tags(trim($_POST["mobileNumber"]));
    $subject = strip_tags(trim($_POST["emailSubject"]));
    $message = trim($_POST["message"]);
    
    
    if (empty($fullName) || empty($email) || empty($mobile) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Please fill in all fields."]);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid email format."]);
        exit;
    }
    
    
    $recipient = "your-email@example.com"; 
    
    
    $email_subject = "New Contact Form Submission: $subject";
    
    
    $email_content = "Name: $fullName\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Mobile: $mobile\n\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";
    
    
    $email_headers = "From: $fullName <$email>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "X-Mailer: PHP/" . phpversion();
    
    
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Thank you! Your message has been sent."]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Oops! Something went wrong. Please try again later."]);
    }
    
} else {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "There was a problem with your submission. Please try again."]);
}
?>