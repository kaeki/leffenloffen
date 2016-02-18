<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET");
?>
<?php $xml_string = file_get_contents($_GET['endpoint']); ?>

<?php

$xml = simplexml_load_string($xml_string);
$json = json_encode($xml);
echo $json;

?>