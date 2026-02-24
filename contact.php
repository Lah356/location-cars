<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $phone   = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "lhssnoali53@gmail.com"; // ✨ بدلها بإيميل ديالك
    $subject = "رسالة جديدة من موقع كراء السيارات";

    $body = "الاسم: $name\n";
    $body .= "الإيميل: $email\n";
    $body .= "الهاتف: $phone\n\n";
    $body .= "الرسالة:\n$message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ تم إرسال رسالتك بنجاح!";
    } else {
        echo "❌ حدث خطأ، حاول مرة أخرى.";
    }
}
?>
