<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');

$results = [
     'test_key1'=>'test_value_1',
     'test_key2'=>'test_value_2'
];

echo json_encode($results);