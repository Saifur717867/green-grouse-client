import { useContext, useEffect, useState } from "react";
import OverlayBanner from "../../components/OverlayBanner";
import { AuthContext } from "../../auth/AuthProvider";
import BidRequestCard from "./BidRequestCard";
import { Helmet } from "react-helmet";


const BidRequest = () => {

    const { user } = useContext(AuthContext);
    const [bidRequest, setBidRequest] = useState([]);

const url = `https://b8a11-server-side-saifur717867.vercel.app/bids?seller=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBidRequest(data))
    }, [url])

    const { Title, email, seller, price, clientDeadline } = bidRequest;
    const pageTitle = 'Bids Request | green grouse';
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
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
                                    <th>Job Title</th>
                                    <th>Email</th>
                                    <th>Deadline</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bidRequest.map(bids => <BidRequestCard key={bids._id} bids={bids}></BidRequestCard>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidRequest;