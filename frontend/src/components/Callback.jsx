import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Callback = () => {
    const {handleRedirectCallback, isLoading, error} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {

        const processCallback = async () => {
            try {
                console.log('Processing callback...');
                await handleRedirectCallback();
                console.log('Callback processed, redirecting to /todos');
                navigate('/todos');
            } catch (e) {
                console.error('Error during callback processing:', e);
            }
        }

        processCallback();
    }, [handleRedirectCallback, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return null;
};

export default Callback;
