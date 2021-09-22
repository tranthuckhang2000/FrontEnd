<?php
require_once ("simple_html_dom.php");
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
if(!empty($_POST['name'])){
    $url = $_POST['name'];
    $html = file_get_html("$url");
    $conntent = $html->find('div[class=contentbody]', 0);
    $image = $html->find('.contentbody',0)->find('.VCSortableInPreviewMode[type=Photo]');
    $title = $html->find('h1[class=title-content]', 0)->plaintext;
    $titleCover = $html->find('h2[class=sapo-detail]', 0)->plaintext;

    $p = $conntent->find('p');
    $arrayP = array();
    foreach ($p as $item){
        $arrayP[] = $item->plaintext;
    }

    $arraySrc = array();
    $arrayAlt = array();
    foreach ($image as $item){
        $arraySrc[] = $item->find('img',0)->src;
        $arrayAlt[] = $item->find('img',0)->alt;
    }

    $detailHTML = array(
        "title"=>$title,
        "cover"=>$titleCover,
        "content" => $arrayP,
        "imageSrc"=>$arraySrc,
        "imageAlt"=>$arrayAlt
    );
    echo json_encode($detailHTML);

}


//if($_POST['name']){
//    $res = "Hi ". $_POST['name'];
//}
//$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);

//$arr = array();
//$arr[] = "Khanbg";
//$arr[] = "My heo";
//echo json_encode($arr);


?>

