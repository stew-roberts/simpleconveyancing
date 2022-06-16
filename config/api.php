<?php
    if ($_GET['location']) {
        $locality = str_replace("-", " ", $_GET['location']);
    }
    $pageData = json_decode(file_get_contents('http://www.simple-conveyancing.co.uk/content/index.php/api/format/json/apikey/76261671-11f4-47e1-be77-3e5d461886b'));
?>