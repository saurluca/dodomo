import Task from "@/components/ui/Task.jsx"
import useLoadTasks from '@/hooks/useLoadingTasks.jsx';
import {InputTask} from "@/components/ui/InputTask.jsx"
import axios from "axios";
import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {Separator} from "@radix-ui/react-dropdown-menu";


const TodosPage = () => {
    const {tasks, error, reloadTasks} = useLoadTasks();

    if (error) return <p>Error loading tasks: {error.message}</p>;

    const updateTaskCompletion = async (taskId, updatedTask) => {
        try {
            const response = await axios.post(`http://localhost:8000/api/TodoTask/${taskId}/update/`,
                updatedTask);
            console.log("Task updated:", response.data);
            await reloadTasks();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    }

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
        <div className="w-full mx-auto">
            <div className="flex mb-5 justify-center">
                <InputTask addTask={addTask}/>
            </div>
            <ScrollArea className="max-w-[700px] w-full h-[570px] mx-auto rounded-md border bg-gray-100 flex justify-center p-4 shadow">
                    {tasks.map(task => (
                        <>
                            <Task key={task.id} task={task} onDelete={deleteTask} onUpdate={updateTaskCompletion} />
                            <Separator className="my-3" />
                        </>
                    ))}
            </ScrollArea>
        </div>
    );
};

export default TodosPage;
