import LoadingSpinner from "@/components/ui/loadingSpinner.jsx";
import Loading from "@/components/Loading.jsx";

const TestingPage = () => {
    return (
        <div>
            <h1 className="flex text-6xl underline justify-center">
                Testing 2
            </h1>
            <div className="flex justify-center items-center h-screen">
                <LoadingSpinner/>
                <Loading/>
            </div>

        </div>
    )
}

export default TestingPage;
