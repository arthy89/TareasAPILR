<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

    public function create(Request $request)
    {
        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description
        ]);

        return $task;
    }
}
