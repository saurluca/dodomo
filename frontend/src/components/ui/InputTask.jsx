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
        <form onSubmit={handleSubmit} className="flex max-w-[420px] w-full items-center space-x-2">
            <Input
                type="text"
                placeholder="New Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="bg-white shadow"
                required
            />
            <Button className="shadow border hover:bg-green-700" type="submit">Add</Button>
        </form>
    );
}

