import Event from "../event/event";
import Navbar from '../component/navbar';
import AboutSection from '../event/about/about';
import Footer from '../component/footer';
import UpperNav from "../component/upperNav"
import img1 from '../assets/img1/1.jpg'
import img2 from '../assets/img1/2.jpg'
import img3 from '../assets/img1/3.jpg'
import img4 from '../assets/img1/4.jpg'
import img5 from '../assets/img1/5.jpg'
import img6 from '../assets/img1/6.jpg'
import img7 from '../assets/img1/7.jpg'
import img8 from '../assets/img1/8.jpg'
import img9 from '../assets/img1/9.jpg'
import img10 from '../assets/img1/10.jpg'
import img11 from '../assets/img1/11.jpg'
import img12 from '../assets/img1/12.jpg'
import img13 from '../assets/img1/13.jpg'
import img14 from '../assets/img1/14.jpg'
import img15 from '../assets/img1/15.jpg'
import img16 from '../assets/img1/16.jpg'
import img17 from '../assets/img1/17.jpg'
import img18 from '../assets/img1/18.jpg'
import img19 from '../assets/img1/19.jpg'
import img20 from '../assets/img1/20.jpg'
import img21 from '../assets/img1/21.jpg'
import img22 from '../assets/img1/22.jpg'
import img23 from '../assets/img1/23.jpg'
import img24 from '../assets/img1/24.jpg'


const imageData = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3', className: 'big' },
  { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' },
  { src: img6, alt: 'Image 6', className: 'tall' },
  { src: img7, alt: 'Image 7' },
  { src: img8, alt: 'Image 8', className: 'big' },
  { src: img9, alt: 'Image 9' },
  { src: img10, alt: 'Image 10' },
  { src: img11, alt: 'Image 11' },
  { src: img12, alt: 'Image 12' },
  { src: img13, alt: 'Image 13', className: 'big' },
  { src: img14, alt: 'Image 14', className: 'wide' },
  { src: img15, alt: 'Image 15' },
  { src: img16, alt: 'Image 16' },
  { src: img17, alt: 'Image 17' },
  { src: img18, alt: 'Image 18', className: 'tall' },
  { src: img19, alt: 'Image 19' },
  { src: img20, alt: 'Image 20' },
  { src: img21, alt: 'Image 21' },
  { src: img22, alt: 'Image 22' },
  { src: img23, alt: 'Image 23' },
  { src: img24, alt: 'Image 24' }
];

  
function EventContainer() {
    return (
        <>
            <UpperNav/>
            <Navbar />
            <AboutSection/>
            <Event images={imageData}/>
            <Footer/>
        </>
    );
}

export default EventContainer;
