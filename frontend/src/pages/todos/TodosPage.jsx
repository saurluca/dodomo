import Task from "@/components/ui/Task.jsx"
import useLoadTasks from '@/hooks/useLoadingTasks.jsx';
import {InputTask} from "@/components/ui/InputTask.jsx"
import axios from "axios";

const TodosPage = () => {
    const {tasks, loading, error, reloadTasks} = useLoadTasks();

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error loading tasks: {error.message}</p>;

    const deleteTask = async (taskId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/TodoTask/${taskId}/delete/`);
            console.log("Task deleted:", response.data);
            await reloadTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const addTask = async (newTask) => {
        if (newTask.trim()) {
            const data = JSON.stringify({title: newTask});
            console.log('Data being sent:', data);
            try {
                await axios.post(
                    "http://127.0.0.1:8000/api/TodoTask/add/",
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                await reloadTasks();
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    };

    return (
        <div>
            <div className="flex justify-center mb-4">
                <InputTask addTask={addTask}/>
            </div>
            <div className="flex col-1 justify-center">
                <div className="space-y-2">
                    {tasks.map(task => (
                        <Task key={task.id} task={task} onDelete={deleteTask}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodosPage;

