import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

const useLoadTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadTasks = useCallback(async () => {
        setLoading(true);
        setError(null);

        axios.get("https://lucasaur.com/api/TodoTask/all/",

            {
                params: {
                    // TODO what if this sometime not worky if not 10?
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

    useEffect(() => {
        loadTasks();
    }, [loadTasks]);

    return {tasks, loading, error, reloadTasks: loadTasks};
};

export default useLoadTasks
