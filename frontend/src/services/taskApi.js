import axios from "axios";

export const updateTaskCompletion = async (taskId, updatedTask) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/TodoTask/${taskId}/update/`,
            updatedTask);
        console.log("Task updated:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
}

export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/TodoTask/${taskId}/delete/`);
        console.log("Task deleted:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

export const addTask = async (newTask) => {
    if (newTask.trim()) {
        const data = JSON.stringify({title: newTask});
        console.log('Data being sent:', data);
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/TodoTask/add/",
                data,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error adding task:', error);
            throw error;
        }
    }
};
