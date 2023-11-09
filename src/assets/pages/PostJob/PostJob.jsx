import React, { useContext, useEffect, useState } from 'react';
import OverlayBanner from '../../components/OverlayBanner';
import { AuthContext } from '../../auth/AuthProvider';
import PostJobCard from './PostJobCard';
import { Helmet } from 'react-helmet';

const PostJob = () => {
    const { user } = useContext(AuthContext);
    const [myJob, setMyJob] = useState([]);

    const url = `https://vercel.com/zanys-projects/b8a11-server-side-saifur717867/jobs?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyJob(data))
    }, [])
    const pageTitle = 'Posted Job | green grouse';
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <div>
                <OverlayBanner></OverlayBanner>
            </div>
            <div className='w-[85%] mx-auto py-20'>
                <h2 className='text-4xl font-bold underline text-center'>Your Posted Jobs Here</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                    {
                        myJob.map(job => <PostJobCard key={job._id} myJob={myJob} setMyJob={setMyJob} job={job}></PostJobCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default PostJob;