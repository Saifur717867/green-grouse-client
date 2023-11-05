import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="flex flex-col md:flex lg:flex-row justify-between items-center w-[85%] mx-auto py-4">
            <NavLink to='/'>
                <div>
                    <img className="w-[60px] mx-auto" src="https://i.ibb.co/Gx5LdSY/logo-final.png" alt="logo" />
                    <h4 className="font-bold text-green-500">Green Grouse</h4>
                </div>
            </NavLink>
            <div>
                <ul className='flex flex-col md:flex-row lg:flex-row py-4 md:py-4 lg:py-0 gap-6 md:gap-10 lg:gap-10'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-green-600" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addJob"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-green-600" : ""
                            }
                        >
                            Add Job 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/postJob"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-green-600" : ""
                            }
                        >
                            My Posted Jobs 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myBids"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-green-600" : ""
                            }
                        >
                            My Bids 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bidRequest"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-green-600" : ""
                            }
                        >
                            My Bids Request 
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='mb-2 md:mb-2 lg:mb-0 flex flex-row items-center'>
                {
                    user ? <div className='flex items-center'>
                        <div className='mr-2 flex items-center pl-3 py-1 rounded-[55px] bg-slate-100'>
                            <p className="">{user.displayName}</p>
                            <img className='w-[50px] rounded-full mx-4' src={user.photoURL} alt="" />
                        </div>
                        <div>
                            <button onClick={handleSignOut} className='btn bg-green-600 rounded text-white py-2 px-4'>Sign Out</button>
                        </div>
                    </div> : <button className='btn bg-green-600 rounded-lg text-white py-2 px-4'><NavLink to={'/login'}>Sign In / Sign Up</NavLink></button>
                }
            </div>
        </div>
    );
};

export default Navbar;