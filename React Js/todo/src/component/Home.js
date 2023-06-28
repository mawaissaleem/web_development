
import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="background-image">
        {/* Add your background image here */}
      </div>
      <div className="content-container">

        <h1 className="slogan text-green">Boost Your Productivity</h1>
        
          <div className="card-container">
            <div className="card">
              <h2 className='text-green'>Task Management</h2>
              <p>Efficiently manage your tasks and stay organized.</p>
            </div>
            <div className="card">
              <h2 className='text-green'>Time Tracking</h2>
              <p>Track and analyze your time to maximize productivity.</p>
            </div>
            <div className="card">
              <h2 className='text-green'>Financial Goal Setting</h2>
              <p>Set achievable goals and track your progress.</p>
            </div>
          </div>
        </div>
      </div>
   

  );
};

export default HomePage;
