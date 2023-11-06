import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Layout from "../layout/LayOut";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import AddJob from "../pages/AddJob/AddJob";
import PostJob from "../pages/PostJob/PostJob";
import MyBids from "../pages/MyBids/MyBids";
import BidRequest from "../pages/BidRequest/BidRequest";
import UpDateJobs from "../pages/update/UpDateJobs";
import PrivateRouter from "./PrivateRouter";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/webCategory')
                
            },
            {
                path: 'jobs/:id',
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
                
            },
            {
                path: 'update/:id',
                element: <UpDateJobs></UpDateJobs>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
                
            },
            
            {
                path: '/addJob',
                element: <PrivateRouter><AddJob></AddJob></PrivateRouter>
            },
            {
                path: '/postJob',
                element: <PrivateRouter><PostJob></PostJob></PrivateRouter>
            },
            {
                path: '/jobDetails',
                element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>
            },
            {
                path: '/update',
                element: <PrivateRouter><UpDateJobs></UpDateJobs></PrivateRouter>
            },
            {
                path: '/myBids',
                element: <PrivateRouter><MyBids></MyBids></PrivateRouter>
            },
            {
                path: '/bidRequest',
                element: <PrivateRouter><BidRequest></BidRequest></PrivateRouter>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default router;