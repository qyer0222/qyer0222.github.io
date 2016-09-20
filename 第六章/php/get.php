<?php
header('Content-type:text/html;charset="utf-8"');
error_reporting(0);

$username = $_GET['username'];
$password = $_GET['password'];

echo "你提交的数据是 username : {$username}，password : {$password}";