<?php
require_once ("simple_html_dom.php");
require_once ("connectionDB.php");
require_once ("feed.php");


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

if(!empty($_POST['category'])){
    $category = $_POST['category'];
    $connect = connect();
    $query = "SELECT * FROM NEWS WHERE CATEGORY = '".$category."'";
    $result = mysqli_query($connect, $query);

    $category = [];
    $title = [];
    $pubDate = [];
    $link = [];
    $thumbnail = [];
    while ($row = mysqli_fetch_array($result)){
        array_push($category, $row[1]);
        array_push($title, $row[2]);
        array_push($pubDate, $row[3]);
        array_push($link, $row[4]);
        array_push($thumbnail, $row[5]);
    }
    $connect->close();
    $data = array(
        "category"=>$category,
        "title"=>$title,
        "pubDate"=>$pubDate,
        "link" => $link,
        "thumbnail"=>$thumbnail,
    );
    echo json_encode($data);


//    echo json_encode("inserted");


}

?>

