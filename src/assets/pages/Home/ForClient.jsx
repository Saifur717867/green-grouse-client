

const ForClient = () => {
    return (
        <div className="w-[85%] mx-auto pb-20">
            <div className="relative h-[800px] lg:h-[700px] bg-[url(https://i.ibb.co/8b8HkJk/card-14.jpg)] bg-cover bg-no-repeat bg-center rounded-lg top-0 w-full">
            <div className="bg-black rounded-lg absolute top-0 left-0 w-full h-[800px] lg:h-[700px] bg-opacity-75">
                <div className="flex flex-col p-10 lg:w-1/3">
                    <h4 className="text-white text-2xl font-semibold">For Clients</h4>
                    <h3 className="text-2xl md:text-4xl lg:text-7xl text-green-500 font-bold lg:mt-16">Find Jobs <br /> Your Way</h3>
                    <p className="text-white text-xl pt-4">Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
                </div>
                <div className="px-10 lg:p-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className=" bg-green-700 hover:bg-green-500 rounded-xl p-4 lg:p-10 cursor-pointer">
                        <h3 className="text-white text-4xl font-semibold">Post a Job and <br /> Got a Job</h3>
                    </div>
                    <div className=" bg-green-700 hover:bg-green-500 rounded-xl p-4 lg:p-10 cursor-pointer">
                        <h3 className="text-white text-4xl font-semibold">Browse and <br /> Got a Job</h3>
                    </div>
                    <div className=" bg-green-700 hover:bg-green-500 rounded-xl p-4 lg:p-10 cursor-pointer">
                        <h3 className="text-white text-4xl font-semibold">Get Advice form <br /> an Expert</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ForClient;