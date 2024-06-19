import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface RegisterParams {
    name : string,
    email : string,
    password : string,
}
async function doRegister({ name, email, password }: RegisterParams) {
    try {
        const response = await fetch("http://localhost:3000/register", {
            method : "POST",
            headers :{
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                name,
                email,
                password,
            }),
        })
        return response.json();
    } catch (error) {
        return null
    }
}
const Register: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [registerError, setRegisterError] = useState<string | null>(null);
    const handleRegister= async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!name || !email || !password) {
            setRegisterError("Nama, email, dan password harus diisi.");
            return;
        }
        try {
            await doRegister({name, email, password});
            navigate("/login");
        } catch(error:any) {
            setRegisterError(error.message);
        } 
    }

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
                        {registerError && (
                        <div className="alert alert-danger" role="alert">
                            {registerError}
                        </div>
                        )}

                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="InputName" className="form-label">Nama</label>
                                <input type="text" className="form-control" id="InputName" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Contoh: johndee@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="InputPassword" placeholder="6+ Karakter" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4 mb-3" style={{backgroundColor:'#0D28A6', width:'370px', height:'36px'}}>Sign Up</button>
                            <Link to="/login">Already have an account? Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register