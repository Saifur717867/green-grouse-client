import { Helmet } from "react-helmet";
import Banner from "./Banner";
import ForClient from "./ForClient";
import TabSection from "./TabSection";
import WorkSection from "./WorkSection";


const Home = () => {
    const pageTitle = 'Home | green grouse';
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
           <Banner></Banner>
           <TabSection></TabSection>
           <WorkSection></WorkSection>
           <ForClient></ForClient>
        </div>
    );
};

export default Home;