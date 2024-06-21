import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavbarMainMenu:React.FC = () => {
	const [activeMenu, setActiveMenu] = useState<string>(''); 
	const navigate = useNavigate();
	const location = useLocation();
	const handleMenuClick = (menu: string) => {
	  if (menu === 'cars') {
		navigate('/listcar');
	  } else if (menu === 'dashboard') {
		navigate('/dashboard');
	  }
	};
	useEffect(() => {
		const path = location.pathname;
		if (path === '/dashboard') {
		  setActiveMenu('dashboard');
		} else if (path === '/listcar' || path === '/addcar' || path.startsWith('/editcar')) {
		  setActiveMenu('cars');
		} 
	  }, []);
  	
  	return (
    		<div className='text-center pt-4 vh-100' style={{color:'#fff' ,backgroundColor: '#0d28a6'}}>
				<div className="logo mx-auto text-center mb-3" style={{backgroundColor: '#CFD4ED', width:'34px'}}/>
					<div className='homeParent'>
							<div className={`home mb-3 ${activeMenu === 'dashboard' ? 'active' : ''}`} onClick={() => handleMenuClick('dashboard')}>
								<i className="bi bi-house-door" style={{fontSize: '30px'}}></i>
								<p className='dashboard'>Dashboard</p>
							</div>
							<div className={`administrator ${activeMenu === 'cars' ? 'active' : ''}`} onClick={() => handleMenuClick('cars')}>
								<i className="bi bi-truck icon" style={{fontSize: '30px'}}></i>
								<p className='cars'>Cars</p>
							</div>
      				</div>
    		</div>);
};

export default NavbarMainMenu;

