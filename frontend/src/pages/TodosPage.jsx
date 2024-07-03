import Task from "@/components/ui/Task.jsx"
import useLoadTasks from '@/hooks/useLoadingTasks.jsx';
import {InputTask} from "@/components/ui/InputTask.jsx"
import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {Separator} from "@radix-ui/react-dropdown-menu";
import {addTask, deleteTask, updateTaskCompletion} from "@/services/taskApi.jsx";
import {useRef, useState} from "react";
import {Button} from "@/components/ui/button.jsx";


const TodosPage = () => {
    const {tasks, error, reloadTasks} = useLoadTasks();
    const audioRef = useRef(null);
    const [soundOn, setSoundOn] = useState(false);
    const [workingMode, setWorkingMode] = useState(false);

    const checkedTasks = tasks.filter(task => task.completed).sort((a, b) => a.id - b.id);
    const uncheckedTasks = tasks.filter(task => !task.completed);

    const tasksToShow = [...checkedTasks.slice(0, 4), ...uncheckedTasks.slice(0, 3)];

    if (error) return <p>Error loading tasks: {error.message}</p>;

    const handleUpdateTaskCompletion = async (taskId, updatedTask) => {
        try {
            await updateTaskCompletion(taskId, updatedTask);
            await reloadTasks();

            if (audioRef.current && soundOn) {
                audioRef.current.src = `/sounds/point.mp3`;
                audioRef.current.play();
            }
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId);
            await reloadTasks();

            if (audioRef.current && soundOn) {
                audioRef.current.src = `/sounds/hit.mp3`;
                audioRef.current.play();
            }

        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const handleAddTask = async (newTask) => {
        try {
            await addTask(newTask);
            await reloadTasks();

            if (audioRef.current && soundOn) {
                audioRef.current.src = `/sounds/hmm.mp3`;
                audioRef.current.play();
            }

        } catch (error) {
            console.error("Error adding task:", error);
        }
    };


    return (
        <div className="w-full mx-auto">
            <div className="flex justify-center items-center mb-5">
                <div className="flex-1 flex justify-center">
                    <InputTask addTask={handleAddTask}/>
                </div>
                <div className={"px-20"}>
                    <Button onClick={() => setWorkingMode(!workingMode)} className={"bg-blue-500 text-white hover:bg-blue-700 mx-3"}>
                        WorkingMode {workingMode ? 'On' : 'Off'}
                    </Button>
                </div>
                <div className="absolute right-0">
                    <Button onClick={() => setSoundOn(!soundOn)} className="bg-blue-500 text-white hover:bg-blue-700 mx-3">
                        Sound {soundOn ? 'On' : 'Off'}
                    </Button>
                </div>
            </div>
            <audio ref={audioRef}/>
            <ScrollArea className="max-w-[700px] w-full h-[570px] mx-auto rounded-md border bg-gray-100 flex justify-center p-4 shadow">
                {/*{tasks.map(task => (*/}
                {workingMode ? (
                    tasksToShow.length > 0 ? (
                    tasksToShow.map(task =>
                        <div key={task.id}>
                            <Task task={task} onDelete={handleDeleteTask} onUpdate={handleUpdateTaskCompletion}/>
                            <Separator className="my-3"/>
                        </div>
                    )) : (
                    <div>No tasks to show</div>
                    )) : (
                    tasks.map(task => (
                        <div key={task.id}>
                            <Task task={task} onDelete={handleDeleteTask} onUpdate={handleUpdateTaskCompletion}/>
                            <Separator className="my-3"/>
                        </div>
                    )))}
            </ScrollArea>
        </div>
    );
};

export default TodosPage;
