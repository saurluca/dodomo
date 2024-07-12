import {InputTask} from "@/components/ui/InputTask.jsx";
import {useState} from "react";

const NotePage = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <div>
            <div className="flex-1 flex justify-center">
                <InputTask/>
            </div>
            <div>
                {notes.map(note => (
                    note ? (
                        <div key={note.id}>
                            {note}
                            {/*{note.name}: {note.description}*/}
                        </div>
                    ) : (
                        <div key="no-tasks">No tasks to show</div>
                    )
                ))}
            </div>
        </div>
    )
}

export default NotePage
