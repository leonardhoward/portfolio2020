<?php
if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "lenhoward87@gmail.com"
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
    echo "<p>Thank you for contacting me, $name. You will get a reply within 24 hours.</p>";
}else {
    echo '<p>Uh-oh! Something went wrong. Please make sure all the boxes are filled out, or e-mail me at lenhoward87@gmail.com</p>';
}
?>

