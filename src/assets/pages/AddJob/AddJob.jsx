import { useState } from "react";
import OverlayBanner from "../../components/OverlayBanner";


const AddJob = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = e => {
        setSelectedValue(e.target.value);
    }

    const handleAddJob = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const title = form.title.value;
        const photo = form.photo.value;
        const deadline = form.deadline.value;
        // const category = form.category.value;
        const minimumPrice = form.minPrice.value;
        const maximumPrice = form.maxPrice.value;
        const description = form.description.value;
        console.log(email, title, photo, minimumPrice, maximumPrice, deadline, selectedValue, description);
        // const cars = {
        //     email,
        //     title,
        //     photo,
        //     BrandName,
        //     BrandPhoto,
        //     category,
        //     price,
        //     Rating,
        //     Description
        // };
    }


    return (
        <div>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className="w-[85%] mx-auto">
                <form onSubmit={handleAddJob} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span>Job Categories</span>
                        </label>
                        <select className="select select-bordered w-full" onChange={handleSelectChange}>
                            <option>Web Design and Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" name="deadline" placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <input type="number" name="minPrice" placeholder="Minimum Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Maximum Price</span>
                        </label>
                        <input type="number" name="maxPrice" placeholder="Maximum Price" className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" name="photo" placeholder="Inter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" placeholder="Inter Description" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                    </div>
                    <div>
                        <input className="bg-green-600 text-white text-2xl py-3 px-6 rounded-lg w-full cursor-pointer" type="submit" value="Add Job" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddJob;