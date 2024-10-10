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
// img
import AuntyTayo from '../assets/AuntyTayo.jpg'
import Bandy from '../assets/bandy.jpg'

const sampleTestimonials = [
    {
      name: 'Omotayo Oduyemi',
      role: 'Chief Executive Officer',
      imageUrl: AuntyTayo,
      instagram:"",
      facebook:"", 
    },
    {
      name: 'Dele Oduyemi',
      role: 'Executive Director',
      imageUrl: Bandy,
      instagram:"",
      facebook:"",
    },
    {
      name: 'Shadrack Akinola',
      role: 'Project/PR Manager',
      imageUrl: Bandy,
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
        <SupportSection/>
        <About/>
        <CharityCards testimonials={sampleTestimonials}/>
        <Testimonials/>
        <Subscribe/>
        <Footer/>
        </>
       
    )
}

export default home