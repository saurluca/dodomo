import Task from "@/components/ui/Task.jsx"
import useLoadTasks from '@/hooks/useLoadingTasks.jsx';
import {InputTask} from "@/components/ui/InputTask.jsx"
import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {Separator} from "@radix-ui/react-dropdown-menu";
import {addTask, deleteTask, updateTaskCompletion} from "@/services/taskApi.jsx";
import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {useAuth0} from "@auth0/auth0-react";


const TodosPage = () => {
    const {tasks, error, reloadTasks} = useLoadTasks();
    const audioRef = useRef(null);
    const [soundOn, setSoundOn] = useState(false);
    const [workingMode, setWorkingMode] = useState(false);
    const {user} = useAuth0();
    const [tasksToShow, setTasksToShow] = useState([]);

    useEffect(() => {
        const sortedTasks = [...tasks].sort((a, b) => b.id - a.id);

        if (workingMode) {
            const checked = sortedTasks.filter(task => task.completed);
            const unchecked = sortedTasks.filter(task => !task.completed);
            const show = [
                ...checked.slice(0, 4 + Math.max(3 - unchecked.length, 0)).reverse(),
                ...unchecked.slice(0, 3)
            ];
            setTasksToShow(show);
        } else {
            setTasksToShow(sortedTasks);
        }
    }, [tasks, workingMode]);

    const playSound = (sound) => {
        if (audioRef.current && soundOn) {
            audioRef.current.src = `/sounds/${sound}.mp3`;
            audioRef.current.play();
        }
    };

    const handleUpdateTaskCompletion = async (taskId, updatedTask) => {
        try {
            await updateTaskCompletion(taskId, updatedTask);
            await reloadTasks();
            playSound('point');
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId);
            await reloadTasks();
            playSound('hit');
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const handleAddTask = async (newTask) => {
        try {
            const fullTask = {title: newTask, user: user.email};
            await addTask(fullTask);
            await reloadTasks();
            playSound('hmm');
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    console.log("error loading task", error)

    return (
        <div className="w-full mx-auto">
            <div className="flex justify-center items-center mb-5">
                <span className="flex-1 flex justify-center">
                    <InputTask addTask={handleAddTask}/>
                </span>
                <span className="absolute right-0 hidden lg:block">
                    <Button onClick={() => setWorkingMode(!workingMode)} className="bg-blue-500 text-white hover:bg-blue-700">
                        WorkingMode {workingMode ? 'On' : 'Off'}
                    </Button>
                    <Button onClick={() => setSoundOn(!soundOn)} className="bg-blue-500 text-white hover:bg-blue-700 mx-3">
                        Sound {soundOn ? 'On' : 'Off'}
                    </Button>
                </span>
            </div>
            <audio ref={audioRef}/>
            <ScrollArea className="max-w-[700px] w-full h-[570px] mx-auto rounded-md border bg-gray-100 flex justify-center p-4 shadow">
                {tasksToShow.length > 0 ? (
                    tasksToShow.map(task =>
                        <div key={task.id}>
                            <Task
                                task={task}
                                onDelete={handleDeleteTask}
                                onUpdate={handleUpdateTaskCompletion}
                            />
                            <Separator className="my-3"/>
                        </div>
                    )
                ) : (
                    <div key="no-tasks">No tasks to show</div>
                )}
            </ScrollArea>
        </div>
    );
};

export default TodosPage;
// (workingMode ? (tasksToShow.length > 0 ? tasksToShow : false) : tasksToShow).map(task =>
