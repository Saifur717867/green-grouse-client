import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Layout from "../layout/LayOut";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SingIn";
import AddJob from "../pages/AddJob";
import PrivateRouter from "./privaterouter";
import PostJob from "../pages/PostJob";
import MyBids from "../pages/MyBids";
import BidRequest from "../pages/BidRequest";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addJob',
                element: <AddJob></AddJob>
            },
            {
                // path: '/cars/:id',
                // element: <PrivateRouter><SingleCar></SingleCar></PrivateRouter>,
                // loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-saifur717867.vercel.app/cars/${params.id}`)
            },
            {
                path: '/postJob',
                element: <PostJob></PostJob>
            },
            {
                path: '/myBids',
                element: <MyBids></MyBids>
            },
            {
                path: '/bidRequest',
                element: <BidRequest></BidRequest>
            },
            {
                // path: '/updateCar/:id',
                // element: <PrivateRouter><UpdateCar></UpdateCar></PrivateRouter>,
                // loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-saifur717867.vercel.app/cars/${params.id}`)
            },
            {
                // path: '/myCart',
                // element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
                // loader: () => fetch('https://b8a10-brandshop-server-side-saifur717867.vercel.app/cart')
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