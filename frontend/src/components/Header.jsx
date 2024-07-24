import {Link} from "react-router-dom";
import {PackageIcon} from "@/assets/icons/PackageIcon.jsx";
import LogoutButton from "@/components/functional/LogoutButton.jsx";


export const Header = () => {
    return (
        <header className="bg-gray-900 text-white text-xl py-5 px-6 flex justify-between items-center">
            <nav className="flex items-center gap-6">
                <Link to="/todos" className="flex items-center gap-2">
                    <PackageIcon className="w-6 h-6"/>
                    <span className="font-semibold">Dodomo</span>
                </Link>
            </nav>
            <nav className="flex items-center gap-6 justify-center flex-grow">
                <Link to="/todos" className="font-medium hover:text-gray-300 hidden md:block">
                    Todos
                </Link>
                <Link to="/tools" className="font-medium hover:text-gray-300">
                    Useful stuff
                </Link>
                <Link to="/memes" className="font-medium hover:text-gray-300">
                    Memes
                </Link>
                <Link to="/images" className="font-medium hover:text-gray-300 hidden md:block">
                    Images
                </Link>
                <Link to="/soundboard" className="font-medium hover:text-gray-300">
                    Soundboard
                </Link>
                <Link to="/testing" className="font-medium hover:text-gray-300 hidden md:block">
                    Testing
                </Link>
            </nav>
            <div>
                <LogoutButton/>
            </div>
        </header>
    )
};

