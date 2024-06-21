import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
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

interface CarCardProps {
    car: Car;
}
const CarCard : React.FC<CarCardProps> = ({ car }) => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const formattedUpdatedAt = car.updated_at
        ? new Date(car.updated_at).toLocaleString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
          })
        : 'N/A'; 
  const handleEditButton = () => {
    navigate(`/editcar/${car.id}`)
  }
  const handleDeleteButton = () => {
    setShowDeleteModal(true);
  }
  const handleCloseModal = () => {
    setShowDeleteModal(false);
  }

  const handleConfirmDelete = async() => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:3000/cars/${car.id}`, {
        method : "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      setShowDeleteModal(false);
      window.location.reload();
    } catch (error) {
      
    }
  }
  return (
    <>
    <div className="card mb-4" style={{width: '327px', padding:'24px', boxShadow:'0px 0px 4px 0px rgba(0, 0, 0, 0.15)'}}>
      <img className="card-img-top" src={car.image} alt={car.name} />
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text fw-bold">
          Rp. {car.price} / hari
        </p>
        <p> <i className="bi bi-key" style={{fontSize:'20px'}}></i> {car.start_rent} - {car.finish_rent}</p>
        <p> <i className="bi bi-clock"></i> Updated At: {formattedUpdatedAt}</p> 
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-danger fw-bold" style={{height:'48px', width:'120px', padding: '8px 12px'}} onClick={handleDeleteButton}><i className="bi bi-trash"></i> Delete</button>
          <button className="btn btn-outline-success fw-bold" style={{height:'48px', width:'120px', padding: '8px 12px'}} onClick={handleEditButton}><i className="bi bi-pencil-square"></i> Edit</button>
        </div>
      </div>
      {showDeleteModal && (
        <>
        <div className="modal modal-backdrop d-flex align-items-center justify-content-center" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content text-center" style={{width: "387px",padding: "24px 32px"}}>
              <div className="modal-body g-3">
                <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1718880331/Beep_Beep_-_Medium_Vehicle_vznngm.png" alt="" />
                <p className='fw-bold mt-4'>Menghapus Data Mobil</p>
                <p>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
                <div className='d-flex justify-content-center' style={{gap:"10px"}}>
                  <button type="button" className="btn btn-primary" style={{width: "87px", padding:"8px 12px"}} onClick={handleConfirmDelete}>Ya</button>
                  <button type="button" className="btn btn-outline-primary" style={{width: "87px", padding:"8px 12px"}} onClick={handleCloseModal}>Tidak</button>
                </div>               
              </div>
            </div>
          </div>
        </div>
        </>
      )}   
    </div>
    </>
  );
};

export default CarCard;
