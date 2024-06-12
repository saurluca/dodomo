import {Button} from "@/components/ui/button.jsx";
import axios from "axios";


const Task = ({task}) => {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/TodoTask/${task.id}/delete/`);
            console.log("Task deleted:", response.data);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <p-checkbox v-model="task.completed" binary="true"/>
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium">
                        {task.titel}
                    </label>
                </div>
                <div className="flex items-center ml-16 space-x-4">
                    <div className="text-sm text-gray-500">
                        {task.due_date}
                    </div>
                    <div className="text-sm text-gray-500">
                        {task.id}
                    </div>
                    <Button variant="outline" onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default Task;
