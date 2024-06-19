import React, {useEffect, useState} from "react";
import Layout from "../layout/DashboardLayout";
import CarCard from "../components/CarCard";
import Sidebar from "../components/SidebarDashboard"
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

const AdminDashboard: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);

    // useEffect(() => {
    //     fetch("http://localhost:3000/cars")
    //         .then(response => response.json())
    //         .then(data => setCars(data))
    //         .catch(error => console.error("Error fetching cars:", error));
    // }, []);
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch("http://localhost:3000/cars");
                if (!response.ok) {
                    throw new Error("Failed to fetch cars");
                }
                const data = await response.json();
                console.log(data.cars)
                setCars(data.cars);
            } catch (error) {
                console.error("Error fetching cars:", error);
                // Handle error gracefully, e.g., show a message to the user
            }
        };

        fetchCars();
    }, []);
    return (
        <div>
            <Layout>
                {/* <h1>Admin page</h1>
                <p>This is the admin page of the website.</p> */}
                <div className="row">
                    <div className="col-2">
                        <div style={{height:'100vh', backgroundColor : '#fff' }}>
                           <Sidebar/>
                        </div>
                    </div>
                    <div className="col-10" style={{backgroundColor:'#F4F5F7'}}>
                        <h1 className="fw-bold">List Cars</h1>
                        <div className="d-flex flex-wrap justify-content-center" style={{gap:'24px'}}>
                            {cars.map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                        </div>
                    </div>
                </div>
                
                
                
                
            </Layout>
        </div>
    )
}
export default AdminDashboard