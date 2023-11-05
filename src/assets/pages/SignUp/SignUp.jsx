import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhoto, setUserPhoto] = useState('');
    // const [error, setError] = useState('');

    const location = useLocation();
    // console.log("Sign Up Location:", location);
    const navigate = useNavigate();

    const { createUser, logOut } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(email, name, password, photo)
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...!',
                text: 'Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character!',
              })
        } else {
            createUser(email, password, name, photo)
                .then(result => {
                    console.log(result.user)
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photo,
                    })
                        .then(() => console.log('profile update'))
                        .catch()
                    Swal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'Created your Account successfully!',
                      })
                    logOut()
                        .then()
                        .catch()
                }).catch(error => {
                    console.log(error)
                })
            navigate(location?.state ? location.state : '/login');

        }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-12">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='text-center pt-10 -mb-10'>
                        <h3 className='text-2xl font-bold'>Sign Up</h3>
                    </div>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Your Photo URL" name='photo' className="input input-bordered" required />
                        </div>
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
                            <input type="text" name='password' placeholder="Confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-green-600 text-white" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='text-center pb-10 space-y-4'>
                        <h3>Or Sign Up With</h3>
                        <div className='space-x-4'>
                            <button className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaGoogle className='text-[20px] text-green-600'></FaGoogle></button>
                            <button className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaFacebookF className='text-[20px] text-blue-600'></FaFacebookF></button>
                            <button className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaLinkedinIn className='text-[20px] text-blue-700'></FaLinkedinIn></button>
                        </div>
                        <p>Already Have Account? <span className='text-lg font-bold text-green-600'><Link to='/login'>Sign In</Link></span></p>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <img src='https://i.ibb.co/fnJH2yG/Mobile-login-amico.png' alt="sign up photo" />
                </div>
                
            </div>
        </div>
    );
};

export default SignUp;