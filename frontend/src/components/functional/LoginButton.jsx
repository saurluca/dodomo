import {useAuth0} from "@auth0/auth0-react";
import {Button} from "@/components/ui/button.jsx";

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    return (
        <Button className={"w-60 h-12 text-xl"} onClick={() => loginWithRedirect()}>
            Log in
        </Button>
    );
};

export default LoginButton;
