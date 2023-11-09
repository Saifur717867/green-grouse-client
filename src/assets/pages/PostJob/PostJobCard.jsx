import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const PostJobCard = ({ job, myJob, setMyJob }) => {
    const { _id, title, photo, minimumPrice, maximumPrice, deadline, category, description } = job;


    const handleDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://vercel.com/zanys-projects/b8a11-server-side-saifur717867/jobs/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            const remaining = myJob.filter(item => item._id !== _id);
                            setMyJob(remaining)
                        }
                    });
            }
        });
    };


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
                        <button onClick={() => handleDelete(_id)} className="text-xl lg:text-xl hover:bg-red-400 text-white bg-red-600 px-6 py-3 rounded-lg">Delete</button>
                        <Link to={`/update/${_id}`}><button className="w-full text-2xl hover:bg-green-700 text-white bg-green-600 px-6 py-3 rounded-lg">Up date Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostJobCard;