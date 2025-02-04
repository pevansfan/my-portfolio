<?php

use PHPMailer\PHPMailer\PHPMailer;

$message = filter_input(INPUT_POST, "message", FILTER_SANITIZE_FULL_SPECIAL_CHARS); 
$mailToSend = filter_input(INPUT_POST, "email", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$btn = filter_input(INPUT_POST, "envoyer", FILTER_SANITIZE_FULL_SPECIAL_CHARS);

require_once '../Portfolio/SendMailFunction.php';

if (isset($btn) && $btn == "envoyer") {
    $mail = new PHPMailer(true);
    EnvoieMail($mail, $mailToSend, $message);
}

header('Location: index.html');