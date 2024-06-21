import React from 'react';
import { useLocation } from 'react-router-dom'; 

const Sidebar : React.FC = () => {
  const location = useLocation();
  return (
    <div className="p-4">
        <p className="fw-bold" style={{color:'#8A8A8A'}} >CARS</p>
        <nav className="flex-column mt-4">
          {location.pathname === '/dashboard' && (
            <a className="nav-link fw-bold active" href="/dashboard">Dashboard</a>
          )}
          {(location.pathname === '/listcar' || location.pathname === '/addcar' || location.pathname.startsWith('/editcar')) && (
             <a className="nav-link fw-bold active" href="/listcar">List Car</a>
          )}
        </nav>
    </div>
  );
};

export default Sidebar;
