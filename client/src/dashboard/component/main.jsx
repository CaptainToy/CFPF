import React, { useEffect, useState } from 'react';
import DashboardLastJobCard from './dash'; 
import './css/Dashboard.css'; 

// Fetch Job Data (Moved Outside)
const fetchJobData = async () => {
  return [
    {
      id: 1,
      title: 'UX Designer',
      company: 'Google Drive - Junior Post',
      salary: 'Blog Post',
      posted: '1 days ago',
      icon: 'fab fa-google-drive',
    }
  ];
};

const DashboardLastMain = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const data = await fetchJobData();
      setJobs(data);
    };
    getJobs();
  }, []);

  return (
    <main className="Dashboard-last-main">
      <div className="Dashboard-last-main-body">
        <div className="Dashboard-last-search-bar">
          <input
            type="search"
            placeholder="Search here..."
            aria-label="Search"
          />
        </div>
        <div className="Dashboard-last-job-list">
          {jobs.map((job) => (
            <DashboardLastJobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DashboardLastMain;
