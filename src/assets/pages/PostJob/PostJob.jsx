import React, { useContext, useEffect, useState } from 'react';
import OverlayBanner from '../../components/OverlayBanner';
import { AuthContext } from '../../auth/AuthProvider';
import PostJobCard from './PostJobCard';

const PostJob = () => {
    const {user} = useContext(AuthContext);
    const [myJob, setMyJob] = useState([]);

    const url = `http://localhost:5000/jobs?email=${user.email}`;
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyJob(data)) 
    }, [])

    return (
        <div>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className='w-[85%] mx-auto py-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                    {
                        myJob.map(job => <PostJobCard key={job._id} job={job}></PostJobCard>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default PostJob;