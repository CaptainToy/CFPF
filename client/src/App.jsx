import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ToastContainer} from "react-toastify";
import Home from './element/home';
import Others from './element/other';
import Event from './element/event';
import BlogContainer from './element/blog';
import LoginElement from './login/loginElement';
import CreateAccount from './login/jsx/create-account';
import Dashboard from './dashboard/layout/dashboard';
import BlogDashboard from './dashboard/blogpost/blogDashboard'
import DashboardLastMain from './dashboard/blogpost/component/blog'
import './style/style.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading or initialization delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timeout if the component unmounts
  }, []);

  // // if (loading) {
  // //   return (
  // //     <div className="loading-screen">
  // //       <div className="loader">
  // //         <div className="loader-inner">
  // //           <div className="loader-line-wrap">
  // //             <div className="loader-line"></div>
  // //           </div>
  // //           <div className="loader-line-wrap">
  // //             <div className="loader-line"></div>
  // //           </div>
  // //           <div className="loader-line-wrap">
  // //             <div className="loader-line"></div>
  // //           </div>
  // //           <div className="loader-line-wrap">
  // //             <div className="loader-line"></div>
  // //           </div>
  // //           <div className="loader-line-wrap">
  // //             <div className="loader-line"></div>
  // //           </div>
  // //         </div>
  // //       </div>
  // //     </div>
  // //   );
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Others />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<BlogContainer />} />
        <Route path="/loginElement" element={<LoginElement />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/BlogDashboard" element={<BlogDashboard />} />
        <Route path="/DashboardLastMain" element={<DashboardLastMain />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
