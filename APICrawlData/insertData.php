<?php
require_once ("simple_html_dom.php");
require_once ("connectionDB.php");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
if(!empty($_POST['link'])){
    $url = $_POST['link'];
    $category = $_POST['category'];
    $api_endpoint = 'https://api.rss2json.com/v1/api.json?rss_url=';
    $data = json_decode( file_get_contents($api_endpoint . urlencode($url)) , true );

    if($data['status'] == 'ok'){
        foreach ($data['items'] as $item) {
            if(!checkFeed($item['link'], $category)){
                insertFeed($item['title'], $category,  $item['pubDate'], $item['link'], $item['thumbnail']);
            }
        }
    }
    echo json_encode("Insert thanh cong");

}

?>

