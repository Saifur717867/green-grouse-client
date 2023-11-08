import { useContext } from "react";
import OverlayBanner from "../../components/OverlayBanner";
import { AuthContext } from "../../auth/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const AddJob = () => {

    const {user} = useContext(AuthContext);
    console.log(user)
    const email = user?.email;
    console.log(email)

    const handleAddJob = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const title = form.title.value;
        const photo = form.photo.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const minimumPrice = form.minPrice.value;
        const maximumPrice = form.maxPrice.value;
        const description = form.description.value;
        console.log(email, title, photo, minimumPrice, maximumPrice, deadline, category, description);
        const jobs = {
            email,
            title,
            photo,
            minimumPrice,
            maximumPrice,
            category,
            deadline,
            description
        };
        console.log(jobs);

        fetch("https://bejewelled-dragon-b28d12.netlify.app/jobs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(jobs),
        })
            .then((res) => res.json())
            .then((data) => {
                
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'You Have Added Job Successfully!',
                    })
                }
            });
    }

    const pageTitle = 'Add Job | green grouse';
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className="w-[85%] mx-auto mb-10">
                <h2 className="text-4xl underline font-bold pt-10 text-center">Post Your Job Here</h2>
                <form onSubmit={handleAddJob} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={email} name="email" placeholder="Email" className="input input-bordered" required disabled/>
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
                        <select className="select input select-bordered w-full" name="category" required>
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
                    <div className="mt-6">
                        <input className="bg-green-600 hover:bg-green-700 transition duration-1000 text-white text-2xl py-3 px-6 rounded-lg w-full cursor-pointer" type="submit" value="Add Job" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddJob;