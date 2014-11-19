<?php
	$errors = '';
	if(empty($_POST['name'])  || 
	   empty($_POST['email']) || 
	   empty($_POST['message']))
	{
		$errors .= "\n Error: all fields are required";
	}
  	$name = filter_var($_POST['name'],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$message = filter_var($_POST['message'],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)&&empty($errors))
	{
		$to  = 'fredzyc@gmail.com';//arnold.lan@ptfproduction.net
	$subject = 'You have a new inquiry!';
	$message = $message . "\r\n" . $_POST['name'];
	$headers = 'From: ' . $_POST['email'] . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	//header('location: /thank');
	}else{
		$errors .= "\n Error: Invalid email address";
	}

}
?>
<!DOCTYPE HTML> 
<html>
<head>
	<title>Contact form handler</title>
</head>
<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>
</body>
</html>
	



