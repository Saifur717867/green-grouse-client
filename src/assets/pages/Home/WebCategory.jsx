// import { useLoaderData } from "react-router-dom";
import TabCard from "./TabCard";


const WebCategory = ({webDevelopment}) => {
    // console.log(webDevelopment)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                webDevelopment.map(web => <TabCard key={web._id} web={web}></TabCard>)
            }
        </div>
    );
};

export default WebCategory;