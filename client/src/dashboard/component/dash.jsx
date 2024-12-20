import React, { useEffect, useState } from 'react';
import './css/Dashboard.css'; 

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  // Simulating fetching job data
  const fetchJobData = async () => {
    return [
      {
        id: 1,
        title: 'Title',
        company: 'Posted by {"name"}',
        salary: '{post}',
        posted: '{Time}',
        icon: 'fab fa-google-drive',
      }
    ];
  };

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobData();
      setJobs(data);
    };
    loadJobs();
  }, []);

  return (
    <div className="Dashboard-last-main-body">
      <h1>Recent Post</h1>
      {jobs.map((job) => (
        <div key={job.id} className="Dashboard-last-job-card">
          <div className="Dashboard-last-job-details">
            <div className="Dashboard-last-job-img">
              <i className={job.icon}></i>
            </div>
            <div className="Dashboard-last-job-text">
              <h2>{job.title}</h2>
              <span>{job.company}</span>
            </div>
          </div>
          <div className="Dashboard-last-job-salary">
            <h4>{job.salary}</h4>
            <span>{job.posted}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
