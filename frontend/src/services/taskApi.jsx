import axios from "axios";

export const updateTaskCompletion = async (taskId, updatedTask) => {
    try {
        const response = await axios.post(`https://lucasaur.com/api/TodoTask/${taskId}/update/`,
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
        const response = await axios.delete(`https://lucasaur.com/api/TodoTask/${taskId}/delete/`);
        console.log("Task deleted:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

export const addTask = async (newTask) => {
    if (newTask) {
        const data = JSON.stringify(newTask);
        console.log('Data being sent:', data);
        try {
            const response = await axios.post(
                "https://lucasaur.com/api/TodoTask/add/",
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
