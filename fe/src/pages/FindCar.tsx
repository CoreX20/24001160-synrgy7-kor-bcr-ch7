import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Car {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
  availableAt: string;
  driverType: 'dengan-supir' | 'tanpa-supir';
}

function getRandomInt(min : number, max : number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FindCar() {
  const [carsData, setCarsData] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [tipeDriver, setTipeDriver] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [inputPassenger, setInputPassenger] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [carSearchButtonDisabled, setCarSearchButtonDisabled] = useState(true);

  useEffect(() => {
    checkForm();
  }, [tipeDriver, inputDate, inputTime]);

  const checkForm = () => {
    if (tipeDriver && inputDate && inputTime) {
      setCarSearchButtonDisabled(false);
    } else {
      setCarSearchButtonDisabled(true);
    }
  };

  const handleTipeDriverChange = (e:any) => {
    setTipeDriver(e.target.value);
  };

  const handleInputDateChange = (e:any) => {
    setInputDate(e.target.value);
  };

  const handleInputTimeChange = (e:any) => {
    setInputTime(e.target.value);
  };

  const handleInputPassengerChange = (e:any) => {
    setInputPassenger(e.target.value);
  };

  const calculateAvailableAt = () => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    return new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
  }

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    setIsSearching(true);
    fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
      .then(response => response.json())
      .then(data => {
        const updatedCars = data.map((car:Car) => {
          const listDriverType = ['dengan-supir', 'tanpa-supir'];
          const randomIndex = Math.floor(Math.random() * listDriverType.length);
          
          return {
            ...car,
            availableAt : calculateAvailableAt(),
            driverType: listDriverType[randomIndex]
          };
        });
        setCarsData(updatedCars);
        console.log({updatedCars})

        const filteredCars = carsData.filter((car:Car) =>
          car.driverType === tipeDriver &&
          car.capacity >= parseInt(inputPassenger || '1') &&
          new Date(car.availableAt) >= new Date(inputDate) &&
          new Date (car.availableAt).toLocaleTimeString() >= inputTime
        );
        console.log({filteredCars});

        setFilteredCars(filteredCars);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Header />
      <section className="form-cars">
        <form className="d-flex flex-row gap-3" onSubmit={handleFormSubmit}>
          <div className="col">
            <label htmlFor="tipeDriver" className="form-label">Tipe Driver</label>
            <select
              id="tipeDriver"
              className="form-select form-select-lg"
              value={tipeDriver}
              onChange={handleTipeDriverChange}
            >
              <option value="">Pilih Tipe Driver</option>
              <option value="dengan-supir">Dengan Supir</option>
              <option value="tanpa-supir">Tanpa Supir (Lepas Kunci)</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="inputDate" className="form-label">Tanggal</label>
            <input
              id="inputDate"
              placeholder="Pilih Tanggal"
              className="form-control form-control-lg"
              type="date"
              value={inputDate}
              onChange={handleInputDateChange}
            />
          </div>
          <div className="col">
            <label htmlFor="inputTime" className="form-label">Waktu Jemput/Ambil</label>
            <select
              id="inputTime"
              className="form-select form-select-lg"
              value={inputTime}
              onChange={handleInputTimeChange}
            >
              <option value="">Pilih Waktu</option>
              <option value="8:00:00 AM">08.00 WIB</option>
              <option value="9:00:00 AM">09.00 WIB</option>
              <option value="10:00:00 AM">10.00 WIB</option>
              <option value="11:00:00 AM">11.00 WIB</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="inputPassenger" className="form-label">Jumlah Penumpang (optional)</label>
            <div className="input-group d-flex align-items-center">
               <input
                id="inputPassenger"
                className="form-control form-control-lg"
                type="number"
                placeholder="Jumlah Penumpang" 
                value={inputPassenger}
                onChange={handleInputPassengerChange}/>
              <i className="bi bi-people"></i>
            </div>
          </div>
          <div className="col-1 d-flex justify-content-end align-items-end" style={{ width: '95px' }}>
            <button
              type="submit"
              id="carSearch"
              className={`btn fw-bold ${carSearchButtonDisabled ? 'btn-secondary' : 'btn-success'}`}
              style={{ padding: '8px 12px' }}
              disabled={carSearchButtonDisabled}
            >
              Cari Mobil
            </button>
          </div>
        </form>
      </section>
      <div id="cars-container" className="d-flex flex-wrap" style={{ width: '1047px', marginLeft: '196px', gap: '24px' }}>
      {isSearching && (
        filteredCars.length === 0 ? (
        <div className="alert alert-danger w-100 text-center" role="alert">
        Cars Not Found
        </div>
      ) : (filteredCars.map((car) => (
          <div key={car.id} className="card p-4 mb-4" style={{width: 333, height: 538, boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)'}}>
            <img src={car.image} className="object-fit-cover rounded" height="160px" width="100%" />
            <p className="mt-4">{car.model}/{car.manufacture}</p>
            <p className="fw-bold">Rp {car.rentPerDay} / hari</p>
            <p>{car.description}</p>
            <div className="mt-auto">
              <p><i className="bi bi-people" /> {car.capacity} Orang</p>
              <p><i className="bi bi-gear" /> {car.transmission}</p>
              <p><i className="bi bi-calendar" /> {car.year}</p>
            </div>
            <button className="btn btn-success mt-auto" style={{padding: '8px 12px'}}>Pilih Mobil</button>
          </div>
          ))
        )
      )}
      </div>
      <Footer />
    </>
  );
}

export default FindCar;
