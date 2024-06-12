import {useState} from 'react';
import axios from 'axios';
import {Input} from "@/components/ui/input.jsx"
import {Button} from "@/components/ui/button.jsx"


export function InputTask() {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
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

                // onAddTask(response.data);
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

