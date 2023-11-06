import { Link } from "react-router-dom";


const TabCard = ({web}) => {
    const {_id, title, photo, minimumPrice, maximumPrice, deadline, category, description} = web;
    return (
        <div>
            <div className="border shadow-xl rounded-xl">
                <img className="w-full h-[200px] rounded-t-xl" src={photo} alt="" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold">{title.slice(0, 30)}</h3>
                    <p className="text-justify">{description.slice(0, 150)} </p>
                    <div className="flex justify-between items-center py-4">
                        <h4 className="text-red-500 font-bold text-xl">Deadline: {deadline}</h4>
                        <h4 className="text-green-600 font-bold text-xl">Price: $ {maximumPrice}</h4>
                    </div>
                    <Link to={`/jobs/${_id}`}><button  className="w-full text-2xl hover:bg-green-700 text-white bg-green-600 px-6 py-3 rounded-lg">Bid Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TabCard;