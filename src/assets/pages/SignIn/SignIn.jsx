import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthProvider';

const SignIn = () => {

    const { signIn } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleLogin = () => {
        signIn
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-12">
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
                            <button onClick={handleGoogleLogin} className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaGoogle className='text-[20px] text-green-600'></FaGoogle></button>
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