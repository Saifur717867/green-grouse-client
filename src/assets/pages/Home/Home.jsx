import Banner from "./Banner";
import ForClient from "./ForClient";
import TabSection from "./TabSection";
import WorkSection from "./WorkSection";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TabSection></TabSection>
           <WorkSection></WorkSection>
           <ForClient></ForClient>
        </div>
    );
};

export default Home;