<?php

class Animal {
    //adjectives - properties

    public $colour;
    public $type;
    public $species;
    public $limbs;

    //verbs - what can they do?
    //functions/ methods

    //constructor
    //it extentiates
    //this function happens when you use the keyword "new"

    public function __construct($col, $type, $spec, $limbs){
        // construct functions are great for connecting to database
    }

    public function eat(){
        echo 'nom nom nom';
    }

    public function move(){
        echo 'im moving out';
    }

    public function makeSound($snd){
        echo $snd;
    }
};