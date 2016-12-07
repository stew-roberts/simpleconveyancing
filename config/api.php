<?php
    if ($_GET['location']) {
        $locality = str_replace("-", " ", $_GET['location']);
    }
	$apiKey = '76261671-11f4-47e1-be77-3e5d461886b';
    $pageData = json_decode(file_get_contents('http://contentmanagement.streamwiredigital.com/index.php/api/format/json/apikey/' . $apiKey ));
?>