import { NavLink } from 'react-router-dom';
import img from '/404.svg'

const Error = () => {
    return (
        <div className='w-[85%] mx-auto text-center'>
            <div className='flex justify-center items-center'>
                <img className='w-[50%] h-auto' src={img} alt="404 image" />
            </div>
            
            <NavLink to='/'><button className='btn bg-green-600 text-white'>Go To Home</button></NavLink>
        </div>
    );
};

export default Error;