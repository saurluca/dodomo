import {Button} from "@/components/ui/button.jsx";

const Task = ({task, onDelete}) => {
    const handleClick = () => {
        onDelete(task.id);
    };

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-md">
            <div className="p-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <p-checkbox v-model="task.completed" binary="true"/>
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium">
                        {task.title}
                    </label>
                </div>
                <div className="flex items-center ml-16 space-x-4">
                    <div className="text-sm text-gray-500">
                        {task.due_date}
                    </div>
                    <Button variant="outline" onClick={handleClick}
                            className="border border-gray-500 bg-green-400 text-black hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
                    >Done
                    </Button>
                    <Button variant="outline" onClick={handleClick}
                            className="border border-gray-500 bg-red-400 text-black hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
                    >Delete
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Task;
