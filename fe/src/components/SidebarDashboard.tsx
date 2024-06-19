import React from 'react';

const Sidebar : React.FC = () => {
  return (
    // <div className="sidebar">
    //   <nav className="nav flex-column">
    //     <a className="nav-link" href="#">Link</a>
    //     <a className="nav-link" href="#">Link</a>
    //     <a className="nav-link disabled" aria-disabled="true">Disabled</a>
    //   </nav>
    // </div>

    <div className="bg-primary vh-100 text-white p-4">
        <h1 className="text-white">Logo</h1>
        <nav className="flex-column mt-4">
            <a className="nav link text-white" href="#">Dashboard</a>
            <a className="nav-link text-white" href="#">Cars</a>
        </nav>
    </div>
  );
};

export default Sidebar;
