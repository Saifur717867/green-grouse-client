import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabCard from './TabCard';
// import 'react-tabs/style/react-tabs.css';

const TabSection = () => {
    return (
        <div className='w-[85%] mx-auto justify-center pt-20'>
            <Tabs>
                <TabList className='text-center border-none flex flex-col md:flex-row  lg:flex-row justify-center gap-6'>
                    <Tab className='bg-green-600 py-4 px-8 rounded-lg hover:bg-green-500 text-white cursor-pointer'>Web Design and Development</Tab>
                    <Tab className='bg-green-600 py-4 px-8 rounded-lg hover:bg-green-500 text-white cursor-pointer'>Digital Marketing</Tab>
                    <Tab className='bg-green-600 py-4 px-8 rounded-lg hover:bg-green-500 text-white cursor-pointer'>Graphics Design</Tab>
                </TabList>

                <TabPanel>
                    <TabCard></TabCard>
                </TabPanel>
                <TabPanel>
                <TabCard></TabCard>
                </TabPanel>
                <TabPanel>
                <TabCard></TabCard>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSection;