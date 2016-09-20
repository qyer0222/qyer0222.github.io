<?php
header('Content-type:text/html;charset="utf-8"');
error_reporting(0);
$leo = array('age'=>'37','sex'=>'man','name'=>'leo');
$nzp = array('age'=>'29','sex'=>'undefined','name'=>'倪志鹏');

$username = $_GET['username'];
$password = $_GET['password'];

if($username == 'leo'){
	echo json_encode($leo);
	exit;
}
if($username == 'nzp'){
	echo json_encode($nzp);
	exit;
}

echo '查询的内容不存在';