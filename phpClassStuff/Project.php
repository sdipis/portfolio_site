<?php

class Project {
    //props
    public $title;
    public $thumbnail;
    public $description;
    public $problem;
    public $solution;
    public $screenshots = array();

    //methods
    public function __construct($title, $thumb, $desc, $prob, $sol, $screens){
        $this->title=$title;
        $this->thumbnail=$thumb;
        $this->description=$desc;
        $this->problem=$prob;
        $this->solution=$sol;
        $this->screenshots=$screens;

    }

    public function getAllProjects(){
        //PDO function for GET * FROM PROJECTS

    }

    public function getOneProject(){
        //PDO function for GET * FROM projects WHERE 

    }

    public function createProject($_POST['title'],$thumb,$desc,$prob){
        //PDO function for INSERT INTO projects
    }

    public function updateProject($id){

    }
    
    public function deleteProject($id){

    }
}