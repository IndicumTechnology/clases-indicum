<?php 
    header("Access-Control-Allow-Origin: *");

    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");
    header("Content-Type: application/json; charset=utf-8");

    $conexion = mysqli_connect('localhost', 'root', '', 'biblioteca');
    if(mysqli_connect_errno()){
        echo "error de conexion";
        exit();
    }
?>
