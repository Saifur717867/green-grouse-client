import OverlayBanner from "../../components/OverlayBanner";


const JobDetails = () => {
    return (
        <div>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className="w-[85%] mx-auto py-20">
                <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-10 items-center">
                    <div className="w-1/2">
                        <h3 className="text-2xl font-semibold">Website and Mobile App Development</h3>
                        <p className="text-justify">We are looking for a skilled developer to build a website along with iOS and Android apps. The project requires expertise in web development, iOS app development, and Android app development. The main responsibilities of the developer would include designing and developing a website that is responsive and user-friendly, creating iOS and Android apps that are compatible with different devices, testing and debugging the applications, and ensuring smooth integration with various APIs and databases. The ideal candidate should have experience in HTML/CSS, JavaScript, Swift, Java, and familiarity with popular frameworks and libraries. Good communication skills and the ability to work collaboratively are also important for this role.</p>
                        <div className="flex justify-between items-center gap-10">
                            <button className="btn bg-red-500 rounded-lg text-white">Deadline: 25.12.23</button>
                            <button className="btn bg-green-500 text-white rounded-lg">Price: $ 500.00</button>
                        </div>
                    </div>
                    <div>
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
                                    <input type="email" name="email" placeholder="Client Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Email</span>
                                    </label>
                                    <input type="email" name="email2" placeholder="Buyer Email" className="input input-bordered" required />
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