<?php
require_once('./config.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="charge.php" method="POST">
<script
    src="https://checkout.razorpay.com/v1/checkout.js"
    data-key=<?php echo $api_key_id ?> 
    data-amount="50000" 
    data-currency="INR"
    data-buttontext="Pay with Razorpay"
    data-name="AV DOJO"
    data-description="AVDOJO"
    data-image="https://example.com/your_logo.jpg"
    data-prefill.name="Gaurav Kumar"
    data-prefill.email="gaurav.kumar@example.com"
    data-prefill.contact="9999999999"
    data-theme.color="#F37254"
></script>
<input type="hidden" custom="Hidden Element" name="hidden">
</form>  
</body>
</html>