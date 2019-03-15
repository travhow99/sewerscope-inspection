<?php
/*
$to = 'trav.horn@gmail.com';
$subject = 'test';
$message = $_POST['data'];
*/

if($_POST){
    $name = 'test';
    $email = 'travis@travishowell.net';
    $message = 'test message';//$_POST['data'];

//send email
    mail("trav.horn@gmail.com", "This is an email from:" .$email, $message);
}

?>
