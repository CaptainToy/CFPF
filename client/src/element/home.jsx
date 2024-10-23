import UpperNav from "../component/upperNav"
import Sidebar from "../component/navbar"
import LandingPage from "../component/landingPage"
import SupportSection from "../component/support"
import About from "../component/about"
import CharityCards from '../component/CharityCards'
import Footer from "../component/footer"
import Mission from "../component/Mission"
import Testimonials from '../component/Testimonials'
import Subscribe from "../component/Subscribe "
import Footerstyle from "../component/copyright"
// img
import AuntyTayo from '../assets/AuntyTayo.jpg'
import Bandy from '../assets/bandy.jpg'
import Tayo from '../assets/tayp.jpg'
import Pesinpapa from "../assets/IMG_0282 (1).png"

// nav


const sampleTestimonials = [
  {
    name: 'Dele Oduyemi',
    role: 'Executive Director',
    imageUrl: Bandy,
    instagram:"",
    facebook:"",
  },
    {
      name: 'Tayo Oduyemi',
      role: 'Chief Executive Officer',
      imageUrl: AuntyTayo,
      instagram:"",
      facebook:"", 
    },
    {
      name: 'Akintayo Adesanya',
      role: 'General Secretary',
      imageUrl: Tayo,
      instagram:"",
      facebook:"",
    },
    
    {
      name: 'Shadrack Akinola',
      role: 'Project/PR Manager',
      imageUrl: Pesinpapa,
      instagram:"",
      facebook:"",
    },
    
  ];
  
function home (){
    return(
        <>
        <UpperNav /> 
        <Sidebar/>
        <LandingPage/>
        <Mission/>
        {/* <SupportSection/> */}
        <About/>
        <CharityCards testimonials={sampleTestimonials}/>
        <Testimonials/>
        <Subscribe/>
        <Footer/>
        <Footerstyle/>
        
        </>
       
    )
}

export default home