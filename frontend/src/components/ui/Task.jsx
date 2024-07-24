import {Button} from "@/components/ui/button.jsx";
import {Checkbox} from "@/components/ui/checkbox.jsx";
import PropTypes from "prop-types";

const Task = ({task, onDelete, onUpdate}) => {
    const handleClick = () => {
        onDelete(task.id);
    };

    const handleCheckboxChange = (checked) => {
        const updatedTask = {...task, completed: checked};
        onUpdate(task.id, updatedTask);
    }

    console.log(task)

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-md max-w-[700px] w-full">
            <div className="p-3 flex items-center justify-between">
                <label className="flex items-center space-x-4">
                    <Checkbox checked={task.completed} onCheckedChange={handleCheckboxChange} className="h-5 w-5"/>
                    <label className={`text-lg font-medium task ${task.completed ? 'line-through' : ''}`}>
                        {task.title}
                    </label>
                </label>
                <div className="flex items-center ml-16 space-x-4">
                    <div className="text-sm text-gray-500 ">
                        {task.due_date}
                    </div>
                    <Button variant="outline" onClick={handleClick}
                            className="border border-gray-500 bg-red-400 text-black hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
                    >Delete
                    </Button>

                </div>
            </div>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        due_date: PropTypes.string,
        user: PropTypes.string,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default Task;

