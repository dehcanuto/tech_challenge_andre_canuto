const LoadingModal = ({ message }: { message: string }) => {
    return (
        <div className="absolute inset-0 z-10">
            <div className="absolute flex justify-center items-center w-full h-full m-auto z-10">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>
                    {message}
                </span>
            </div>
            <span className="absolute w-full h-full bg-gray-900/80 blur-lg" />
        </div>
    )
}

export default LoadingModal;