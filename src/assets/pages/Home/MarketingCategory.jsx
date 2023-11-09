import { useEffect, useState } from "react";
import MarketingTab from "./MarketingTab";


const MarketingCategory = () => {
    const [marketing, setMarketing] = useState([]);
    useEffect(() => {
        fetch('https://vercel.com/zanys-projects/b8a11-server-side-saifur717867/marketingCategory')
        .then(res => res.json())
        .then(data => {
            setMarketing(data)
        })
    }, [])
    console.log(marketing)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                marketing.map(item => <MarketingTab key={item._id} item={item}></MarketingTab>)
            }
        </div>
    );
};

export default MarketingCategory;