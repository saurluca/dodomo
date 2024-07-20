import {useAuth0} from "@auth0/auth0-react";
import {Button} from "@/components/ui/button.jsx";
import {useNavigate} from "react-router-dom";

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (isAuthenticated) {
            navigate("/todos");
        } else {
            loginWithRedirect()
        }
    }

    return (
        // <Button className={"w-60 h-12 text-xl"} onClick={() => loginWithRedirect()}>
        <Button className={"w-60 h-12 text-xl"} onClick={handleLogin}>
            Log in
        </Button>
    );
};

export default LoginButton;
