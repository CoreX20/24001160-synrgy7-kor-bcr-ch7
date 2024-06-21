import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from 'react-router-dom'; 
const User: React.FC = () => {
    const navigate = useNavigate();
    const user : any = useContext(UserContext);
    const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : '';
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
      }
    return (
        <>
            <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: 40, height: 40, backgroundColor: '#CFD4ED', color: '#151515', fontSize: 18 }}>
                {firstLetter}
            </div>
            <div className="dropdown">
                <button className="btn dropdown-toggle fw-bold" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.name}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><button className="dropdown-item" type="button" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>


        </>
    )
}

export default User;