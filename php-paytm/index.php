
<?php
    header("Pragma: no-cache");
    header("Cache-Control: no-cache");
    header("Expires: 0");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>Document</title>
</head>
<body>
    <form method="POST" action="pgRedirect.php">
    <div class="form-control">
    <label for="">Order ID</label>
    <input id="ORDER_ID"  name="ORDER_ID" value="<?php echo "OD".rand(10000,500000) ?>" type="text"/>
    </div>
    <div class="form-control">
    <label for=""> Customer ID</label>
    <input type="text" id="CUST_ID" name="CUST_ID" value="CUST001"/>
    </div>
    <div class="form-control">
    <label for="">INDUSTRY TYPE ID</label>
    <input id="INDUSTRY_TYPE_ID" name="INDUSTRY_TYPE_ID" type="text" value="Film" />
    </div>
    <div class="form-control">
    <label for="">CHANNEL ID</label>
    <input id="CHANNEL_ID" name="CHANNEL_ID" type="text" value="WEB"/>
    </div>
    <div class="form-control">
    <label for="">Transaction Amount</label>
    <input type="text" id="TXN_AMOUNT" name="TXN_AMOUNT" value="1" />
    </div>
    <input type="submit" class="btn btn-primary"/>

    </div>
    </form>
</body>
</html>