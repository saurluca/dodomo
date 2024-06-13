import {useState} from 'react';
import {Input} from "@/components/ui/input.jsx"
import {Button} from "@/components/ui/button.jsx"


export function InputTask({addTask}) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        addTask(newTask);
        setNewTask('');
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

