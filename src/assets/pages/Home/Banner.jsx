import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-40">
                <img src="https://i.ibb.co/vkpWgdk/Marketing-bro.png" className="lg:max-w-lg rounded-lg shadow-2xl" />
                <div className="lg:w-1/2 -mt-10 md:-mt-20">
                    <h1 className="text-2xl md:text-4xl lg:text-7xl text-green-500 font-bold">Find Jobs <br /> Do Work <br /> Post Jobs</h1>
                    <p className="py-6 text-gray-500 text-2xl">Forget the old rules. You can have the best people. Right now. Right here.</p>
                    <Link to='/signUp'><button className="btn bg-green-500 text-white">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;