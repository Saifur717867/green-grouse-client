import { useContext, useEffect, useState } from 'react';
import OverlayBanner from '../../components/OverlayBanner';
import { AuthContext } from '../../auth/AuthProvider';
import MyBidsCard from './MyBidsCard';

const MyBids = () => {

    const { user } = useContext(AuthContext);
    const [myBids, setMyBids] = useState([]);

    const url = `http://localhost:5000/bids?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBids(data))
    }, [url])
    console.log(myBids)
    
    return (
        <div>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className='w-[85%] mx-auto py-20'>
                <h2 className='text-4xl font-bold text-center underline pb-10'>My Bids</h2>
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
                                myBids.map(bid => <MyBidsCard key={bid._id} bid={bid}></MyBidsCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBids;