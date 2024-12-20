import React, { useState } from 'react'; // Import useState
import SideBar from '../component/sidebar';
import DashboardLastMain from '../component/main';
import '../component/css/Dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]); // Correctly initialize useState

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <>
      <div className="Dashboard-last-container">
        <SideBar />
        <DashboardLastMain />
      </div>
    </>
  );
};

export default Dashboard;
