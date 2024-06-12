import {useState} from 'react';
import axios from 'axios';
import {Input} from "@/components/ui/input.jsx"
import {Button} from "@/components/ui/button.jsx"

export function InputTask({onAddTask}) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            const data = {title: newTask};
            console.log('Data being sent:', data);

            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/TodoTask/add/", // URL to the API endpoint
                    // JSON.stringify({ title: newTask }),        // Data being sent in the request body, converted to a JSON string
                    data,
                );

                onAddTask(response.data);
                setNewTask('');
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="text"
                placeholder="New Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="bg-white"
                required
            />
            <Button type="submit">Add</Button>
        </form>
    );
}
