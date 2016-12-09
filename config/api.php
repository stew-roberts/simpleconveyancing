<?php
    if ($_GET['location']) {
        $locality = str_replace("-", " ", $_GET['location']);
    }
    $pageData = json_decode(file_get_contents($config->contentApi . $config->apiKey));
?>