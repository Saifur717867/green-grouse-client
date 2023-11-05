import React from 'react';
import OverlayBanner from '../../components/OverlayBanner';
import { Link } from 'react-router-dom';

const PostJob = () => {
    return (
        <div>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className='w-[85%] mx-auto py-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                    <div className="border shadow-xl rounded-xl">
                        <img className="w-full rounded-t-xl" src="https://i.ibb.co/T851cd4/card-1.jpg" alt="" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold">Website and Mobile App Development</h3>
                            <p>We are looking for a skilled developer to build a website along with iOS and Android apps. The project requires expertise in web development, iOS app development, and Android app development. </p>
                            {/* <p>The main responsibilities of the developer would include designing and developing a website that is responsive and user-friendly, creating iOS and Android apps that are compatible with different devices, testing and debugging the applications, and ensuring smooth integration with various APIs and databases. The ideal candidate should have experience in HTML/CSS, JavaScript, Swift, Java, and familiarity with popular frameworks and libraries. Good communication skills and the ability to work collaboratively are also important for this role.</p> */}
                            <div className="flex justify-between items-center py-4">
                                <h4 className="text-red-500 font-bold text-xl">Deadline: 15.12.2023</h4>
                                <h4 className="text-green-600 font-bold text-xl">Price: $500.00</h4>
                            </div>
                            <div className='flex flex-row gap-3 md:gap-6 lg:gap-10'>
                                <button className="text-xl lg:text-2xl hover:bg-red-400 text-white bg-red-600 px-6 py-3 rounded-lg">Delete</button>
                                <Link><button className="text-xl lg:text-2xl hover:bg-green-700 text-white bg-yellow-400 px-6 py-3 rounded-lg">Up Date</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="border shadow-xl rounded-xl">
                        <img className="w-full rounded-t-xl" src="https://i.ibb.co/T851cd4/card-1.jpg" alt="" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold">Website and Mobile App Development</h3>
                            <p>We are looking for a skilled developer to build a website along with iOS and Android apps. The project requires expertise in web development, iOS app development, and Android app development. </p>
                            {/* <p>The main responsibilities of the developer would include designing and developing a website that is responsive and user-friendly, creating iOS and Android apps that are compatible with different devices, testing and debugging the applications, and ensuring smooth integration with various APIs and databases. The ideal candidate should have experience in HTML/CSS, JavaScript, Swift, Java, and familiarity with popular frameworks and libraries. Good communication skills and the ability to work collaboratively are also important for this role.</p> */}
                            <div className="flex justify-between items-center py-4">
                                <h4 className="text-red-500 font-bold text-xl">Deadline: 15.12.2023</h4>
                                <h4 className="text-green-600 font-bold text-xl">Price: $500.00</h4>
                            </div>
                            <div className='flex flex-row gap-3 md:gap-6 lg:gap-10'>
                                <button className="text-xl lg:text-2xl hover:bg-red-400 text-white bg-red-600 px-6 py-3 rounded-lg">Delete</button>
                                <Link to='/update'><button className="text-xl lg:text-2xl hover:bg-green-700 text-white bg-yellow-400 px-6 py-3 rounded-lg">Up Date</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="border shadow-xl rounded-xl">
                        <img className="w-full rounded-t-xl" src="https://i.ibb.co/T851cd4/card-1.jpg" alt="" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold">Website and Mobile App Development</h3>
                            <p>We are looking for a skilled developer to build a website along with iOS and Android apps. The project requires expertise in web development, iOS app development, and Android app development. </p>
                            {/* <p>The main responsibilities of the developer would include designing and developing a website that is responsive and user-friendly, creating iOS and Android apps that are compatible with different devices, testing and debugging the applications, and ensuring smooth integration with various APIs and databases. The ideal candidate should have experience in HTML/CSS, JavaScript, Swift, Java, and familiarity with popular frameworks and libraries. Good communication skills and the ability to work collaboratively are also important for this role.</p> */}
                            <div className="flex justify-between items-center py-4">
                                <h4 className="text-red-500 font-bold text-xl">Deadline: 15.12.2023</h4>
                                <h4 className="text-green-600 font-bold text-xl">Price: $500.00</h4>
                            </div>
                            <div className='flex flex-row gap-3 md:gap-6 lg:gap-10'>
                                <button className="text-xl lg:text-2xl hover:bg-red-400 text-white bg-red-600 px-6 py-3 rounded-lg">Delete</button>
                                <Link><button className="text-xl lg:text-2xl hover:bg-green-700 text-white bg-yellow-400 px-6 py-3 rounded-lg">Up Date</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostJob;