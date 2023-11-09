import axios from "axios";

const URL = "http://tareasapi.test/api";

export const getTasksRequest = async () => {
    try {
        const response = await axios.get(`${URL}/tasks`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const createTaskRequest = async (task) => {
    try {
        const response = await axios.post(`${URL}/task`, task);
        return response; // Devuelve los datos de la respuesta
    } catch (error) {
        throw error;
    }
};

export const deleteTaskRequest = async (id) =>
    await axios.delete(`${URL}/task/${id}`);

export const getTaskRequest = async (id) =>
    await axios.get(`${URL}/task/${id}`);

export const updateTaskRequest = async (id, newFields) =>
    await axios.put(`${URL}/task/${id}`, newFields);

export const toggleTaskRequest = async (id, done) =>
    await axios.put(`${URL}/task/${id}`, {
        done,
    });
