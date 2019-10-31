<?php 
require 'vendor/autoload.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
    <form method="post" action="">
        <input name="text" type="text" placeholder="enter some text" />
        <input type="submit" value="Save" name="submit">
    </form>
    </div>
    <br/>
    <div>
    <form method="post" action="">
    <input name="show" type="submit" value="Show">
    </form>
    </div>
</body>
</html>



<?php
$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->mongophp->details;
if(isset($_POST['submit'])){
        $text = $_POST['text'];
       
        $result = $collection->insertOne(['newText'=> $text]);
        echo "inserted with object id ".$result->getInsertedId();
    }
if($_POST['show'])
{
   $result = $collection->find()->toArray();
   foreach($result as $temp)
   {
       echo $temp['newText']."<br/>";
   }
}
 
?>
