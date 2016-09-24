<?php
header('Content-type:text/html;charset="utf-8"');
error_reporting(0);

$username = $_POST['username'];
$password = $_POST['password'];

echo "你提就的数据是 username : {$username}，password : {$password}";

echo $_GET['a'];