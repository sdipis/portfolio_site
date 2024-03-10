<?php
require_once('Bear.php');
require_once('Animal.php');


$yogi = new Animal('brown', 'mammal', 'bear', '4');
//this will generate a new object based on the animal class found in Animal.php

$nemo = new Animal('orange', 'fish', 'clown fish', '0');
echo 'I am a '.$nemo->colour.', '.$nemo->type.'<br>';
echo $nemo->move().'<br>';
echo $nemo->makeSound().'<br>';

$booboo = new Bear();
echo $booboo->makeSound();