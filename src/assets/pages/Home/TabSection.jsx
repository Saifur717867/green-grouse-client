import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WebCategory from './webCategory';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GraphicsCategory from './GraphicsCategory';
import MarketingCategory from './MarketingCategory';

const TabSection = () => {
    const webDevelopment = useLoaderData();
    // console.log(webDevelopment)
    const [ graphics, setGraphics] = useState();

   useEffect(() => {
    fetch('https://b8a11-server-side-saifur717867.vercel.app/graphicsCategory')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setGraphics(data)
    })
   }, [])
//    console.log(graphics)
   
    return (
        <div className='w-[85%] mx-auto justify-center pt-20'>
            <Tabs>
                <TabList className='text-center border-none flex flex-col md:flex-row  lg:flex-row justify-center gap-6'>
                    <Tab className='bg-green-600 py-4 px-8 rounded-lg hover:bg-green-500 text-white cursor-pointer'>Web Design and Development</Tab>
                    <Tab className='bg-green-600 py-4 px-8 rounded-lg hover:bg-green-500 text-white cursor-pointer'>Digital Marketing</Tab>
                    <Tab className='bg-green-600 py-4 px-8 rounded-lg hover:bg-green-500 text-white cursor-pointer'>Graphics Design</Tab>
                </TabList>
                <div className='pt-10'>
                <TabPanel>
                    <WebCategory webDevelopment={webDevelopment}></WebCategory>
                </TabPanel>
                <TabPanel>
                    <MarketingCategory></MarketingCategory>
                </TabPanel>
                <TabPanel>
                <GraphicsCategory graphics={graphics}></GraphicsCategory>
                </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default TabSection;