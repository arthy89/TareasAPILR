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

    public function get(Task $task)
    {
        // $task = Task::find($id);
        return $task;
    }

    public function update(Request $request, Task $task)
    {
        $task->fill($request->all());
        $task->save();

        return $task;
    }

    public function delete($task)
    {
        Task::destroy($task);
    }
}
