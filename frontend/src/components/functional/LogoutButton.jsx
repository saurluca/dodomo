import {useAuth0} from "@auth0/auth0-react";
import {Button} from "@/components/ui/button.jsx";

const LogoutButton = () => {
    const {logout} = useAuth0();

    return (
        <Button className={"bg-00 hover:bg-red-600 text-xl"} onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
            Log Out
        </Button>
    );
};

export default LogoutButton;
