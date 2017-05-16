<html>
<head>
<title>Please wait...</title>
</head>
<body>
<!--?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "enquiries@olat.ml";
$subject = "New Enquiry";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error");
echo "Enquiry sent.";
?-->
</body>
</html>