const SkeletonCardCar = () => {
    return (
        <div className="max-w-xs bg-gray-800 rounded-3xl shadow-xl">
            <span className="flex w-full h-52 bg-gray-600 animate-pulse rounded-t-3xl" />
            <div className="flex flex-col p-5 gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <span className="animate-pulse flex w-20 h-3 bg-gray-700 rounded mb-3" />
                        <span className="animate-pulse flex w-32 h-6 bg-gray-500 rounded mb-2" />
                        <span className="animate-pulse flex w-44 h-4 bg-gray-600 rounded" />
                    </div>
                    <div className="flex flex-row items-center mt-2 gap-1">
                        <div className="animate-pulse px-2.5 py-0.5 border border-gray-600 rounded">
                            <span className="flex m-1 w-10 h-2 bg-gray-600 rounded-sm" />
                        </div>
                        <div className="animate-pulse px-2.5 py-0.5 border border-gray-600 rounded">
                            <span className="flex m-1 w-10 h-2 bg-gray-600 rounded-sm" />
                        </div>
                    </div>
                </div>
                <span className="animate-pulse flex w-44 h-7 bg-gray-500 rounded mb-2" />
                <span className="w-full h-11 py-3 px-8 bg-primary rounded-lg" />
			</div>
        </div>
    )
}

export default SkeletonCardCar;