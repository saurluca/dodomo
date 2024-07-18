import {Link} from "react-router-dom";
import {PackageIcon} from "@/assets/icons/PackageIcon.jsx";
import LogoutButton from "@/components/functional/LogoutButton.jsx";


export const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Link to="/todos" className="flex items-center gap-2">
                    <PackageIcon className="w-6 h-6"/>
                    <span className="text-lg font-semibold">Kando</span>
                </Link>
                <nav className="flex items-center gap-6">
                    <Link to="/soundboard" className="font-medium hover:text-gray-300">
                        Soundboard
                    </Link>
                    <Link to="/notes" className="font-medium hover:text-gray-300">
                        Notes
                    </Link><Link to="/testing" className="font-medium hover:text-gray-300 hidden md:block">
                        Testing
                    </Link>
                    <Link to="/" className="font-medium hover:text-gray-300 hidden md:block">
                        Landing
                    </Link>
                    <Link to="/tools" className="font-medium hover:text-gray-300">
                        Useful stuff
                    </Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <LogoutButton/>
                <Link to="/forbidden" className="text-muted text-2xl text-red-600 hidden md:block">Nothingness</Link>
            </div>

        </header>
    )
};

