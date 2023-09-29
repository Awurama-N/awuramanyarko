<?php
if (isset($_POST['submit-feedback'])) {
  $feedback = $_POST['suggestion-box'];
  $to = 'aknyarko8@gmail.com';
  $subject = 'Feedback from your website';
  $headers = 'From: ' . $_POST['email'];

  if (mail($to, $subject, $feedback, $headers)) {
    echo 'Feedback submitted successfully.';
  } else {
    echo 'An error occurred while submitting your feedback.';
  }
}
?>