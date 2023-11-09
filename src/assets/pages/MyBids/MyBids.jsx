import { useContext, useEffect, useState } from 'react';
import OverlayBanner from '../../components/OverlayBanner';
import { AuthContext } from '../../auth/AuthProvider';
import MyBidsCard from './MyBidsCard';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyBids = () => {

    const { user } = useContext(AuthContext);
    const [myBids, setMyBids] = useState([]);

    const url = `https://b8a11-server-side-saifur717867.vercel.app/bids?email=${user.email}`;

    useEffect(() => {
        axios.get(url,
            {withCredentials: true})
        .then(res => {
            setMyBids(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setMyBids(data))
    }, [url])
    console.log(myBids)
    const pageTitle = 'My Bids | green grouse';

    const handleCompleted = id => {
        fetch(`https://b8a11-server-side-saifur717867.vercel.app/bids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'completed'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'Update Job Successfully!',
                })
                window.location.reload();
            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
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
                                myBids.map(bid => <MyBidsCard 
                                    key={bid._id}
                                    bid={bid}
                                    handleCompleted={handleCompleted}
                                 ></MyBidsCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBids;