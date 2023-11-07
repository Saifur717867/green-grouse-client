import OverlayBanner from "../../components/OverlayBanner";


const BidRequest = () => {
    return (
        <div>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className='w-[85%] mx-auto py-20'>
                <div>
                    <h2 className="text-4xl font-bold underline text-center pb-10">Job Request</h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Job Title</th>
                                    <th>Email</th>
                                    <th>Deadline</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Web design and development</td>
                                    <td>saifur7178678@gmail.com</td>
                                    <td>15.12.23</td>
                                    <td>$ 500.00</td>
                                    <td>Pending</td>
                                    <td><button className='border-red-500 border py-3 px-6 text-red-600 rounded-lg'>Reject</button></td>
                                    <td><button className='border-green-500 border py-3 px-6 text-green-600 rounded-lg'>Accept</button></td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Web design and development</td>
                                    <td>saifur7178678@gmail.com</td>
                                    <td>15.12.23</td>
                                    <td>$ 500.00</td>
                                    <td>Pending</td>
                                    <td><button className='border-red-500 border py-3 px-6 text-red-600 rounded-lg'>Reject</button></td>
                                    <td><button className='border-green-500 border py-3 px-6 text-green-600 rounded-lg'>Accept</button></td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Web design and development</td>
                                    <td>saifur7178678@gmail.com</td>
                                    <td>15.12.23</td>
                                    <td>$ 500.00</td>
                                    <td>Pending</td>
                                    <td><button className='border-red-500 border py-3 px-6 text-red-600 rounded-lg'>Reject</button></td>
                                    <td><button className='border-green-500 border py-3 px-6 text-green-600 rounded-lg'>Accept</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidRequest;