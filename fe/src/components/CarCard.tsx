import React from 'react';

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
  const formattedUpdatedAt = car.updated_at
        ? new Date(car.updated_at).toLocaleString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
          })
        : 'N/A'; 
  return (
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
          <button className="btn btn-outline-danger fw-bold" style={{height:'48px', width:'120px', padding: '8px 12px'}}><i className="bi bi-trash"></i> Delete</button>
          <button className="btn btn-outline-success fw-bold" style={{height:'48px', width:'120px', padding: '8px 12px'}}><i className="bi bi-pencil-square"></i> Edit</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
