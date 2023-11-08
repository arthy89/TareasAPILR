import axios from "axios";

export const createTaskRequest = async (task) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/api/task",
            task
        );
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        throw error;
    }
};
