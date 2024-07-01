import Task from "@/components/ui/Task.jsx"
import useLoadTasks from '@/hooks/useLoadingTasks.jsx';
import {InputTask} from "@/components/ui/InputTask.jsx"
import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {Separator} from "@radix-ui/react-dropdown-menu";
import {addTask, deleteTask, updateTaskCompletion} from "@/services/taskApi.jsx";


const TodosPage = () => {
    const {tasks, error, reloadTasks} = useLoadTasks();

    if (error) return <p>Error loading tasks: {error.message}</p>;

    const handleUpdateTaskCompletion = async (taskId, updatedTask) => {
        try {
            await updateTaskCompletion(taskId, updatedTask);
            await reloadTasks();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId);
            await reloadTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const handleAddTask = async (newTask) => {
        try {
            await addTask(newTask);
            await reloadTasks();
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };


    return (
        <div className="w-full mx-auto">
            <div className="flex mb-5 justify-center">
                <InputTask addTask={handleAddTask}/>
            </div>
            <ScrollArea className="max-w-[700px] w-full h-[570px] mx-auto rounded-md border bg-gray-100 flex justify-center p-4 shadow">
                    {tasks.map(task => (
                        <div key={task.id}>
                            <Task task={task} onDelete={handleDeleteTask} onUpdate={handleUpdateTaskCompletion} />
                            <Separator className="my-3" />
                        </div>
                    ))}
            </ScrollArea>
        </div>
    );
};

export default TodosPage;
