<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return 'lista de tareas';
    }

    public function create()
    {
        return 'crear tarea'; //xd
    }
}
