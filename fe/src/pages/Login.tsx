import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
interface LoginParams {
    email: string;
    password: string;
}

async function doLogin({ email, password }: LoginParams) {
    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        return data.token;
    } catch (error) {
        return null;
    }
}

async function getUser(token : string){
    try {
        const response = await fetch("http://localhost:3000/user/whoami", {
            method : "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        const user = await response.json();
        return user.role;
    } catch (error) {
        return null;
    }
}

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");  
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);
    const token = localStorage.getItem("token");
    useEffect(()=> {
        setIsLoggedIn(!!token)
    },[token]);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        try {
          const token = await doLogin({ email, password });
          if(token) {
            localStorage.setItem("token", token);
            const userRole = await getUser(token);
            if (userRole == "admin" || userRole == "superadmin") {
                navigate("/dashboard");
                return
            } else {
                navigate("/cars");
            }
            setIsLoginFailed(false);
          }
          setIsLoginFailed(true);
        } catch (error:any) {
            console.error(error.message);
            setIsLoginFailed(true);
        } 
      };
    
    return (
        <>
            <div className="d-flex flex-row">
                <div className="col-md-8" style={{height: '100vh', overflow: 'hidden'}}>
                    <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1718081995/image_2_yeixf5.png" style={{ width: '100%', objectFit: 'cover'}}/>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <div className="flex-row" style={{ maxWidth: '370px', width: '100%' }}>
                        <div className="logo mb-4" style={{backgroundColor:'#CFD4ED', paddingBottom: '20px'}} />
                        <h1 className="fw-bold">Welcome</h1>
                        {isLoginFailed && (
                        <div className="alert alert-danger" role="alert">
                            Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
                        </div>
                        )}

                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="InputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Contoh: johndee@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="InputPassword" placeholder="6+ Karakter" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4 mb-3" style={{backgroundColor:'#0D28A6', width:'370px', height:'36px'}}>Sign In</button>
                            <Link to="/register">Don't have an account? Register</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login