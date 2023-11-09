import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
    // const [tasks, setTasks] = useState([]);
    const { tasks, loadTasks } = useTasks();

    useEffect(() => {
        // async function loadTasks() {
        //     const response = await getTasksRequest();
        //     setTasks(response.data);
        // }
        loadTasks();
    }, []);

    function renderMain() {
        if (tasks.length === 0) return <h4>No hay tareas</h4>;
        return tasks.map((task) => <TaskCard task={task} key={task.id} />);
    }

    return (
        <>
            <h3>Lista de tareas</h3>
            {renderMain()}
        </>
    );
}

export default TasksPage;
