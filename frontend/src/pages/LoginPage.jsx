import LoginButton from "@/components/functional/LoginButton.jsx";
import LogoutButton from "@/components/functional/LogoutButton.jsx";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center">
            <LoginButton/>
            <LogoutButton/>
        </div>
    )
}

export default LoginPage;
