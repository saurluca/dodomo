import LoginButton from "@/components/functional/LoginButton.jsx";

const LandingPage2 = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <header className="flex-grow flex flex-col items-center justify-center p-3">
                <h1 className="text-4xl font-bold">Welcome to Kando</h1>
                <p className="mt-2 text-lg">Your simple and efficient to do app</p>
                <LoginButton/>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center">

            </main>

            <footer className="text-center p-4">
                <p>&copy; 2024 Kando. All rights reserved.</p>
            </footer>
        </div>)

};


const LandingPage = () => {
    return (
        <div className="flex h-screen w-screen bg-gray-800 items-center justify-center min-h-screen">
            <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-8">
                    <h1 className="text-3xl font-bold tracking-tighter text-[#F9F9F9] sm:text-5xl xl:text-6xl/none">

                    </h1>
                    <p className="max-w-[600px] text-[#F0F0F0] md:text-xl">
                        Our data analysis solutions help bakeries optimize their operations, reduce costs, and increase
                        profitability. Get tailored insights to take your business to the next level.
                    </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                    <form className="flex space-x-2">
                        <input
                            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1 bg-[#F9F9F9] text-[#333333] dark:bg-[#333333] dark:text-[#F9F9F9]"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <router-link
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#00C48C] text-[#F9F9F9] hover:bg-[#00A375] dark:bg-[#00C48C] dark:text-[#1A1A1A] dark:hover:bg-[#00E6A8]"
                            to="dashboard"
                        >
                            Get Started
                        </router-link>
                    </form>
                    <p className="text-xs text-[#F0F0F0]">
                        Sign up to get tailored data insights for your bakery.
                    </p>
                    <LoginButton/>
                </div>
            </div>
        </div>
    );
}

export default LandingPage2;
