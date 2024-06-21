import React, { ReactNode } from 'react';
import Header from '../components/HeaderDashboard';
import Sidebar from '../components/SidebarDashboard';
import Navbar from '../components/NavbarDashboard';

interface LayoutProps {
    children: ReactNode;
  }

const Layout : React.FC<LayoutProps> = ({ children }) => {
  return (
      <div className='row vh-100' style={{width: '100%'}}>
        <div className="col-md-1 p-0">
          <Navbar/>
        </div>
        <div className="col-md-11 p-0">
          <Header/>
          <div className='row'>
            <div className="col-2">
              <div style={{height:'100vh', backgroundColor : '#fff' }}>
                <Sidebar/>
              </div>
          </div>
            <div className="col-10 pt-4" style={{backgroundColor:'#F4F5F7'}}>
              {children}
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default Layout;
