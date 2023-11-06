import { useLoaderData } from "react-router-dom";
import OverlayBanner from "../../components/OverlayBanner";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";



const UpDateJobs = () => {
    const {user} = useContext(AuthContext)
    const email = user?.email;
    // console.log(email)
    const details = useLoaderData();
    const { title, photo, minimumPrice, maximumPrice, deadline, category, description} = details;
    console.log(details);
    return (
        <div>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className="w-[85%] mx-auto mb-10">
            <h2 className='text-4xl font-bold underline text-center pt-10'>Up Date Your Jobs</h2>
                <form className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={email} name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" defaultValue={title} name="title" placeholder="Job Title" className="input input-bordered" required />
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span>Job Categories</span>
                        </label>
                        <select className="select input select-bordered w-full" name="category" defaultValue={category} required>
                            <option value={''}>Select A Category</option>
                            <option>Web Design and Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" defaultValue={deadline} name="deadline" placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <input type="number" defaultValue={minimumPrice} name="minPrice" placeholder="Minimum Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Maximum Price</span>
                        </label>
                        <input type="number" defaultValue={maximumPrice} name="maxPrice" placeholder="Maximum Price" className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" defaultValue={photo} name="photo" placeholder="Inter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" defaultValue={description} placeholder="Inter Description" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                    </div>
                    <div className="mt-6">
                        <input className="bg-green-600 hover:bg-green-700 transition duration-1000 text-white text-2xl py-3 px-6 rounded-lg w-full cursor-pointer" type="submit" value="Up Date Jobs" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpDateJobs;