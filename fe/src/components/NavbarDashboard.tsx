import React from 'react';

// const Navbar : React.FC = () => {
//   return (
//     <div className="navbar-admin" style={{backgroundColor:' #0D28A6'}}>
//       <nav className="nav flex-column">
//         <a className="nav-link" href="#">Navbar</a>
//         <a className="nav-link" href="#">Navbar</a>
//         <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//       </nav>
//     </div>
//   );
// };


// export default Navbar;

import { FunctionComponent, useCallback } from 'react';


const NavbarMainMenu:React.FC = () => {
  	
  	const onHomeContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className='navbarMainMenu text-center pt-4' style={{color:'#fff' ,backgroundColor: '#0d28a6', height:'100vh'}}>
            <div className="logo mx-auto text-center mb-3" style={{backgroundColor: '#CFD4ED', width:'34px'}}/>
      			<div className='homeParent'>
        				<div className='home mb-3' onClick={onHomeContainerClick}>
                    <i className="bi bi-house-door" style={{fontSize: '30px'}}></i>
          					<div className='dashboard'>Dashboard</div>
        				</div>
        				<div className='administrator'>
                    <i className="bi bi-truck icon" style={{fontSize: '30px'}}></i>
          					<p className='cars'>Cars</p>
        				</div>
      			</div>
      			<div className='navbarMainMenuChild' />
    		</div>);
};

export default NavbarMainMenu;

