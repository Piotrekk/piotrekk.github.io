<?php
$name = $_GET['name'];
$email = $_GET['email'];
$message = $_GET['comment'];


$to = 'piiter.klupcia@gmail.com>';	
$from = $name . ' <' . $email . '>';
$subject = 'Email from ' . "'" . $name . "'";	
$message = " From: $name\n Email: $email\n Message: \n$message";

mail($to, $subject, $message);
?>