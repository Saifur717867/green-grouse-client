import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';
import app from '../../firebase/Firebase.config';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const SignIn = () => {

    const location = useLocation();
    // console.log("Log in Location:", location);
    const navigate = useNavigate()
    const { logIn } = useContext(AuthContext)

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                const user = {email};
                // get access token 
                axios.post('https://green-grouse-server.vercel.app/jwt', user,
                {withCredentials: true})
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'Login Successfully!',
                    })
                    console.log(res.data)
                    if(res.data.success){
                        navigate(location?.state ? location.state : '/')
                    }
                })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Enter the right information!',

                })
            })
    }

    // sing in with google //

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    const handleGoogle = () => {
        // console.log("logged in")
        signInWithPopup(auth, provider)
            .then(result => {
                const signInUser = result.user;
                console.log(signInUser)
                axios.post('https://green-grouse-server.vercel.app/jwt', signInUser,
                {withCredentials: true})
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'Login Successfully!',
                    })
                    console.log(res.data)
                    if(res.data.success){
                        navigate(location?.state ? location.state : '/')
                    }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const pageTitle = 'Sign In | green grouse';

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <div className="hero-content flex-col-reverse lg:flex-row gap-12">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='text-center pt-10'>
                        <h3 className='text-2xl font-bold'>Sign In</h3>
                    </div>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-green-600 text-white" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div className='text-center pb-10 space-y-4'>
                        <h3>Or Sign Up With</h3>
                        <div className='space-x-4'>
                            <button onClick={handleGoogle} className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaGoogle className='text-[20px] text-green-600'></FaGoogle></button>
                            <button className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaFacebookF className='text-[20px] text-blue-600'></FaFacebookF></button>
                            <button className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaLinkedinIn className='text-[20px] text-blue-700'></FaLinkedinIn></button>
                        </div>
                        <p>Don't Have An Account? <span className='text-lg font-bold text-green-600'><Link to='/signUp'>Sign Up</Link></span></p>
                    </div>
                </div>
                <div className="">
                    <img src='https://i.ibb.co/9tjKgdc/Login-amico.png' alt="sign in" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;