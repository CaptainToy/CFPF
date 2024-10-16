import Navbar from '../component/navbar';
import AboutSection from '../event/about/about';
import Blog from '../Blog/blog'
import Footer from '../component/footer';
import UpperNav from "../component/upperNav"



  
function BlogContainer() {
    return (
        <>
            <UpperNav/>
            <Navbar />
            <AboutSection />
            <Blog/>
            <Footer/>
        </>
    );
}

export default BlogContainer;
