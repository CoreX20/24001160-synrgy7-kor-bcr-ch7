import React, { ReactNode } from 'react';
import Header from '../components/HeaderDashboard';
import Sidebar from '../components/SidebarDashboard';
import Navbar from '../components/NavbarDashboard';

interface LayoutProps {
    children: ReactNode;
  }

const Layout : React.FC<LayoutProps> = ({ children }) => {
  return (
      <div className='row' style={{width: '100%', overflow: 'hidden'}}>
        <div className="col-md-1 p-0">
          <Navbar/>
        </div>
        <div className="col-md-11 p-0">
          <Header/>
          {children}
        </div>
      </div>
  );
};

export default Layout;
