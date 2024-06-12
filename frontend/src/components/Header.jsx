import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";
import {PackageIcon} from "@/assets/icons/PackageIcon.jsx";


export const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-2">
                    <PackageIcon className="w-6 h-6"/>
                    <span className="text-lg font-semibold">Kando</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/todos" className="font-medium hover:text-gray-300">
                        Todos
                    </Link>
                    <Link to="/login" className="font-medium hover:text-gray-300">
                        Login
                    </Link>
                    <Link to="/testing" className="font-medium hover:text-gray-300">
                        Testing
                    </Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                    <img src="/placeholder.svg" width="32" height="32" className="rounded-full border" alt="Avatar"/>
                    <span className="sr-only">Toggle user menu</span>
                </Button>
                <Button>Nothingness</Button>
            </div>

        </header>
    )
};

