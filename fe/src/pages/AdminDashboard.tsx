import React, {useEffect, useState} from 'react';
import Layout from '../layout/DashboardLayout';
interface Car {
    id : number;
    name : string;
    price : number;
    image : string;
    available : boolean;
    start_rent : string;
    finish_rent : string;
    created_at : string;
    updated_at : string;
    driverType: 'dengan-supir' | 'tanpa-supir';
}
const AdminDashboard: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [carsPerPage] = useState<number>(5); // Jumlah mobil per halaman
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const fetchCars = async () => {
        try {
            const response = await fetch("http://localhost:3000/cars");
            if (!response.ok) {
                throw new Error("Failed to fetch cars");
            }
            const data = await response.json();
            const updatedData = data.cars.map((car:Car) => {
                const listDriverType = ['dengan-supir', 'tanpa-supir'];
                const randomIndex = Math.floor(Math.random() * listDriverType.length)
                return {
                    ...car,
                    driverType: listDriverType[randomIndex]
                }
            });
            setCars(updatedData);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };
    useEffect(() => {
        fetchCars();
    }, []);
  return (
    <>
    <Layout>
        <h2 className='fw-bold'>Dashboard</h2>
        <p className='fw-bold'>List Car</p>
        <table className="table table-hover">
        <thead className='table-primary'>
            <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Start Rent</th>
            <th scope="col">Finish Rent</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            </tr>
        </thead>
        <tbody>
            {currentCars.map((car,index) => (
            <tr key={car.id}>
                <td>{indexOfFirstCar + index + 1}</td>
                <td>{car.name}</td>
                <td>{car.driverType}</td>
                <td>{car.price}</td>
                <td>{car.start_rent}</td>
                <td>{car.finish_rent}</td>
                <td>{car.created_at}</td>
                <td>{car.updated_at}</td>
            </tr>
            ))}
        </tbody>
        </table>
        {/* Pagination */}
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => paginate(currentPage - 1)}>&laquo;</button>
                </li>
                {[...Array(Math.ceil(cars.length / carsPerPage)).keys()].map((number) => (
                    <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => paginate(number + 1)}>{number + 1}</button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === Math.ceil(cars.length / carsPerPage) ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => paginate(currentPage + 1)}>&raquo;</button>
                </li>
            </ul>
        </nav>
    </Layout>
    </>
  );
};

export default AdminDashboard;
