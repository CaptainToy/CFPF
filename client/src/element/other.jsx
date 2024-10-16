import AboutSection from '../component1/about/about';
import AboutUs from '../component1/aboutUS/aboutUs';
import Sidebar from '../component/navbar';
import Footer from '../component/footer';
import UpperNav from "../component/upperNav"

function Others() {
    return (
        <>
            <UpperNav/>
            <Sidebar/>
            <AboutSection />
            <AboutUs/>
            <Footer/>

        </>
    );
}

export default Others;
