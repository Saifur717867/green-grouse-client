import { useLoaderData } from "react-router-dom";
import OverlayBanner from "../../components/OverlayBanner";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";


const JobDetails = () => {
    const {user} = useContext(AuthContext)
    const buyerEmail = user.email;
    const details = useLoaderData();
    const { title, email, photo, minimumPrice, maximumPrice, deadline, category, description} = details;
    return (
        <div>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className="w-[85%] mx-auto py-20">
                <h2 className="text-4xl font-bold text-center pb-10 underline">Job Details</h2>
                <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-10 items-center">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="text-justify">{description}</p>
                        <div className="flex justify-between items-center gap-10">
                            <button className="btn bg-red-500 rounded-lg text-white">Deadline: {deadline}</button>
                            <button className="btn bg-green-600 text-white rounded-lg">Price: $ {maximumPrice}</button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <form className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Deadline</span>
                                    </label>
                                    <input type="date" name="deadline" placeholder="date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Client Email</span>
                                    </label>
                                    <input type="email" value={user?.email} name="email" placeholder="Client Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Email</span>
                                    </label>
                                    <input type="email" value={buyerEmail} name="email2" placeholder="Buyer Email" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="mt-6">
                                <input className="bg-green-600 hover:bg-green-700 transition duration-1000 text-white text-2xl py-3 px-6 rounded-lg w-full cursor-pointer" type="submit" value="Place Your Bid" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;