import LoginButton from "@/components/functional/LoginButton.jsx";

const LandingPage2 = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <header className="flex-grow flex flex-col items-center justify-center p-3">
                <h1 className="text-4xl font-bold">Welcome to Dodomo</h1>
                <p className="mt-2 text-lg">Your simple and efficient to do app</p>
                <LoginButton/>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center">

            </main>

            <footer className="text-center p-4">
                <p>&copy; 2024 Dodomo. All rights reserved.</p>
            </footer>
        </div>)

};


export default LandingPage2;
