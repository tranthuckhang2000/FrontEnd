<?php
function connect(){
    $connect = new mysqli("localhost", "root", "", "PHO247");
//        mysql_set_charset($connect, "utf8");
    if($connect->connect_error){
        var_dump($connect->connect_error);
        die();
    }
    return $connect;
}

function login(){
    if(!empty($_POST)) {
        $username = $_POST['user_name'];
        $password = $_POST['password'];
        $connect = connect();
        $query = "SELECT * FROM STUDENT WHERE USER_NAME = '" . $username . "' AND PASSWORD = '" . $password . "' ";
        $result = mysqli_query($connect, $query);
        $data = array();
        while ($row = mysqli_fetch_array($result, 1)){
            $data = $row;
        }
        if($data != null && count($data) > 1 ){
            header("Location: welcome.php");
        }

    }
}

function checkFeed($link, $category){
    $check = false;
    $connect = connect();
    $query = "SELECT * FROM NEWS WHERE LINK = '".$link."' AND CATEGORY = '".$category."'";
    $result = mysqli_query($connect, $query);
    $data = array();
    while ($row = mysqli_fetch_array($result, 1)){
        $data = $row;
    }
      $connect -> close();
    if($data != null && count($data) > 1 ){
       $check = true;
    }
    echo json_encode($check);
    return $check;

//    echo json_encode($connect);

}

function insertFeed($title, $category, $pubDate, $link, $thumbnail){
    $connect = connect();
    $query = "INSERT INTO NEWS(TITLE, CATEGORY, PUBDATE, LINK, THUMBNAIL)
              VALUES('".$title."','".$category."', '".$pubDate."', '".$link."', '".$thumbnail."')";
    mysqli_query($connect, $query);
//    echo json_encode("inserted");
    $connect->close();

}

function selectData($category){
    $connect = connect();
    $query = "SELECT * FROM NEWS WHERE CATEGORY = '".$category."'";
    mysqli_query($connect, $query);
//    echo json_encode("inserted");

}