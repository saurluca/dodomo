import Task from "@/components/ui/Task.jsx"
import useTasks from '@/hooks/useTasks';
import {InputTask} from "@/components/ui/InputTask.jsx"

const TodosPage = () => {
    const {tasks, loading, error} = useTasks();

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error loading tasks: {error.message}</p>;

    return (
        <div>
            <div className="flex justify-center mb-4">
                <InputTask/>
            </div>
            <div className="flex col-1 justify-center">
                <div className="space-y-2">
                    {tasks.map(task => (
                        <Task key={task.id} task={task}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodosPage;

