import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {useAuth0} from "@auth0/auth0-react";

const useLoadTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {user} = useAuth0();

    const loadTasks = useCallback(async () => {
        setLoading(true);
        setError(null);

        axios.get("https://dodomo.org/api/TodoTask/all/",

            {
                params: {
                    // TODO what if this sometime not worky if not 10?
                    limit: 10,
                    user: user.email
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
    }, [user.email]);

    useEffect(() => {
        loadTasks();
    }, [loadTasks]);

    return {tasks, loading, error, reloadTasks: loadTasks};
};

export default useLoadTasks
