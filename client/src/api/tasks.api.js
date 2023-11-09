import axios from "axios";

export const getTasksRequest = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/tasks");
        return response;
    } catch (error) {
        throw error;
    }
};

export const createTaskRequest = async (task) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/api/task",
            task
        );
        return response; // Devuelve los datos de la respuesta
    } catch (error) {
        throw error;
    }
};

export const deleteTaskRequest = async (id) =>
    await axios.delete(`http://localhost:8000/api/task/${id}`);
