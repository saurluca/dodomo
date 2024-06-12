import {useEffect, useState} from 'react';
import axios from 'axios';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/TodoTask/all/",
            {
                params: {
                    limit: 10
                }
            },)
            .then(response => {
                setTasks(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching tasks:", error);
                setError(error)
                setLoading(false)
            });
    }, []);

    return {tasks, loading, error};
};

export default useTasks
