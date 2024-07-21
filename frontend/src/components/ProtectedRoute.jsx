import {useAuth0} from "@auth0/auth0-react";
import {Navigate} from "react-router-dom";
import LoadingSpinner from "@/components/ui/loadingSpinner.jsx";

const ProtectedRoute = ({element}) => {
    const {isAuthenticated, isLoading, user} = useAuth0();

    console.log("isAuthenticated:", isAuthenticated);
    console.log("isLoading:", isLoading);
    console.log("user:", user);

    if (isLoading) {
        // return <div>Loading...</div>;
        return <div className="flex justify-center items-center h-screen"><LoadingSpinner/></div>
    }

    return isAuthenticated ? element : <Navigate to="/"/>;
}

export default ProtectedRoute
