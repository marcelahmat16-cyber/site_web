<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

// Basic sanitization to avoid header injection and overly long fields
$name = preg_replace("/[\r\n]+/", " ", substr($name, 0, 150));
$email = preg_replace("/[^a-zA-Z0-9@.\-+_]/", "", substr($email, 0, 254));
$message = strip_tags(substr($message, 0, 5000));

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Tous les champs sont requis.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email invalide.']);
    exit;
}

$to = 'acb.equipro@gmail.com';
$subject = 'Nouveau message site - ' . $name;
$body = "Nom: $name\nEmail: $email\nMessage:\n$message\n";
// Use server-based from to improve deliverability; set Reply-To to user
$fromAddress = 'no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
$headers = "From: ABC ENTREPRISE <" . $fromAddress . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

$sent = false;
if (function_exists('mail')) {
    $sent = @mail($to, $subject, $body, $headers);
}

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message envoyé.']);
    exit;
} else {
    $log = __DIR__ . '/contacts.txt';
    $entry = "[" . date('Y-m-d H:i:s') . "] " . json_encode(['name' => $name, 'email' => $email, 'message' => $message]) . PHP_EOL;
    @file_put_contents($log, $entry, FILE_APPEND | LOCK_EX);
    echo json_encode(['success' => true, 'message' => 'Message sauvegardé localement (mail non disponible).']);
    exit;
}
