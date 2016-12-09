<?php
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: YourWebsite.com'; 
    $to = 'qboto@hotmail.fr'; 
    $subject = 'Email Inquiry';

    $body = "From: $nom\n E-Mail: $email\n Message:\n $message";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Thank you for your email!</p>';
    } else { 
        echo '<p>Oops! An error occurred. Try sending your message again.</p>'; 
    }
}
?>