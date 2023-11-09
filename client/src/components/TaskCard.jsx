import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
    const { deleteTask, toggleTask } = useTasks();
    const navigate = useNavigate();

    const handleDone = async () => {
        await toggleTask(task.id);
    };

    return (
        <div>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <span>{task.done == 1 ? "✅" : "❌"}</span>
            <span>{task.created_at}</span>
            <span>{task.updated_at}</span>
            <button onClick={() => deleteTask(task.id)}>del</button>
            <button onClick={() => navigate(`/edit/${task.id}`)}>edit</button>
            <button onClick={() => handleDone(task.done)}>Toggle</button>
        </div>
    );
}

export default TaskCard;
