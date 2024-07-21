const LoadingSpinner = () => {
    return (
        // <div className="flex justify-center items-center h-screen">
            <div className="spinner-border animate-spin inline-block w-32 h-32 border-4 rounded-full text-2xl" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        // </div>
    );
};

export default LoadingSpinner;
