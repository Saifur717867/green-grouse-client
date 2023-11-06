import { Link } from "react-router-dom";


const PostJobCard = ({job}) => {
    const { title, photo, minimumPrice, maximumPrice, deadline, category, description} = job;
    return (
        <div>
            <div className="border shadow-xl rounded-xl">
                        <img className="w-full h-[200px] rounded-t-xl" src={photo} alt="" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold">{title.slice(0, 30)}</h3>
                            <p className="text-justify">{description.slice(0, 150)}</p>
                            <div className="flex justify-between items-center py-4">
                                <h4 className="text-red-500 font-bold text-xl">Deadline: {deadline}</h4>
                                <h4 className="text-green-600 font-bold text-xl">Price: $ {maximumPrice}.00</h4>
                            </div>
                            <div className='flex flex-row gap-3 md:gap-6 lg:gap-10'>
                                <button className="text-xl lg:text-2xl hover:bg-red-400 text-white bg-red-600 px-6 py-3 rounded-lg">Delete</button>
                                <Link to='/update'><button className="text-xl lg:text-2xl hover:bg-green-700 text-white bg-yellow-400 px-6 py-3 rounded-lg">Up Date</button></Link>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default PostJobCard;