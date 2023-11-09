import { deleteTaskRequest } from "../api/tasks.api";

function TaskCard({ task }) {
    const handleDelete = async (id) => {
        try {
            const response = await deleteTaskRequest(id);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <span>{task.done == 1 ? "✅" : "❌"}</span>
            <span>{task.created_at}</span>
            <span>{task.updated_at}</span>
            <button onClick={() => handleDelete(task.id)}>del</button>
            <button>edit</button>
        </div>
    );
}

export default TaskCard;
