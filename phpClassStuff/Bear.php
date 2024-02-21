<?php

//we need to extend the animal class, so we need access to the original class
require_once('Animal.php');

class Bear extends Animal {

    public $clothing = 'green hat';

    public function eat(){
        echo 'hey hey booboo, a picanic basket';
    }

};