import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/DashboardLayout";
import CarCard from "../components/CarCard";
interface Car {
    id : number;
    name : string;
    price : number;
    image : string;
    available : boolean;
    start_rent : string;
    finish_rent : string;
    created_by : string;
    updated_by : string;
    deleted_by : string;
    created_at : Date;
    updated_at : Date;
    deleted_at : Date;
}

const AdminListCars: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const fetchCars = async () => {
        try {
            const response = await fetch("http://localhost:3000/cars");
            if (!response.ok) {
                throw new Error("Failed to fetch cars");
            }
            const data = await response.json();
            setCars(data.cars);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };
    useEffect(() => {
        fetchCars();
    }, []);
    return (
        <div>
            <Layout>
                {/* <h1>Admin page</h1>
                <p>This is the admin page of the website.</p> */}
                {/* <div className="row"> */}
                    {/* <div className="col-2">
                        <div style={{height:'100vh', backgroundColor : '#fff' }}>
                           <Sidebar/>
                        </div>
                    </div> */}
                    {/* <div className="col-10 pt-4" style={{backgroundColor:'#F4F5F7'}}> */}
                        <div className="d-flex justify-content-between">
                            <h2 className="fw-bold ms-4">List Cars</h2>
                            <Link to='/addcar' className="btn btn-primary d-flex align-items-center me-4" style={{width:'142px', height:'36px', padding: '8px 12px', color:'#fff', backgroundColor:'#0D28A6'}}><i className="bi bi-plus" style={{fontSize:'25px'}}></i> Add New Car</Link>
                        </div>
                        
                        <div className="d-flex flex-wrap ms-3 mt-3" style={{gap:'24px'}}>
                            {cars.map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                        </div>
                    {/* </div> */}
                {/* </div> */}

            </Layout>
        </div>
    )
}
export default AdminListCars