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
                    <Link to="/login" className="font-medium hover:text-gray-300">
                        Login
                    </Link>
                    <Link to="/testing" className="font-medium hover:text-gray-300">
                        Testing
                    </Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <Link to="/forbidden" className="text-muted text-2xl text-red-600">Nothingness</Link>
            </div>

        </header>
    )
};

