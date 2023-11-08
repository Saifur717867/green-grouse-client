import { FaRegEdit, FaBattleNet } from "react-icons/fa";
import { PiPushPinLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WorkSection = () => {
    return (
        <div className="w-[85%] mx-auto flex flex-col md:flex-row lg:flex-row justify-start items-center gap-20 py-10">
            <motion.div
            animate={{ x: [0, 100, 0], opacity: 1, scale: 1 }}
            transition={{
                duration: 5,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
            }}
             className="w-full md:w-1/2 lg:w-1/2">
                <img src="https://i.ibb.co/9vvk3vH/Business-Plan-cuate.png" alt="photo" />
            </motion.div>
            <div className="w-full md:w-1/2 lg:w-1/2">
                <h3 className="text-5xl font-semibold">Up your work game, it’s easy</h3>
                <div className="py-6">
                    <div className="flex gap-4">
                        <FaRegEdit className="text-4xl"></FaRegEdit>
                        <motion.div
                        animate={{ x: [0, 100, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.5],
                        }}
                        >
                            <h4 className="text-2xl font-semibold">No cost to join</h4>
                            <p>Register and browse professionals, explore projects, or even book a consultation.</p>
                        </motion.div>
                    </div>
                    <div className="flex gap-4 my-10">
                        <PiPushPinLight className="text-4xl"></PiPushPinLight>
                        <div>
                            <h4 className="text-2xl font-semibold">Post a job and hire top talent</h4>
                            <p>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <FaBattleNet className="text-4xl"></FaBattleNet>
                        <div>
                            <h4 className="text-2xl font-semibold">Work with the best—without breaking the bank</h4>
                            <p>Green Grouse makes it affordable to up your work and take advantage of low transaction rates.</p>
                        </div>
                    </div>
                </div>
                <Link to='/signUp'><button className="btn bg-green-500 text-white">Sign Up for Free</button></Link>
                <Link to='/addJob'><button className="btn bg-white border-2 border-green-500 mt-3 lg:ml-4">Learn How to Post Jobs</button></Link>
            </div>
        </div>
    );
};

export default WorkSection;