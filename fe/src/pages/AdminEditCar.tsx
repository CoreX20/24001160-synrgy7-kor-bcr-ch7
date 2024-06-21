import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../layout/DashboardLayout';

const AdminEditCar: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [photo, setPhoto] = useState<File | null>(null);
    const [startRent, setStartRent] = useState<string>("");
    const [finishRent, setFinishRent] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const { id } = useParams();

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setPhoto(files[0]);
        }
    }

    const handleCancel = () => {
        navigate('/listcar');
    }

    const handleSubmit = async(event:any) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('available', 'true');
        formData.append('image', photo!);
        formData.append('start_rent', startRent);
        formData.append('finish_rent', finishRent);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3000/cars/${id}`, {
                method : "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData      
            });
            navigate("/listcar");
        } catch (error) {
            setError('Failed to update car. Please try again.');
        }
        
    }
    return (
        <>
            <Layout>
                <h2 className='fw-bold ms-4'>Edit Car</h2>
                <div className='mx-auto' style={{width:'1068px', backgroundColor:'#fff', padding:'16px'}}>
                    <form onSubmit={handleSubmit}>
                        <div className='row align-items-center mb-4' style={{gap:'10%'}}>
                            <div className='col-2'>
                                <label htmlFor="InputName" className="form-label">Nama</label>
                            </div>
                            <div className='col-6'>
                                <input type="text" className="form-control" id="InputName" placeholder='Placeholder'required value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>

                        <div className='row align-items-center mb-4' style={{gap:'10%'}}>
                            <div className='col-2'>
                                <label htmlFor="InputPrice" className="form-label">Harga</label>
                            </div>
                            <div className='col-6'>
                                <input type="number" className="form-control" id="InputPrice" placeholder='Placeholder'required value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>

                        <div className='row align-items-center mb-4' style={{ gap: '10%' }}>
                            <div className='col-2'>
                                <label htmlFor="inputPhoto" className="form-label">Foto</label>
                            </div>
                            <div className='col-6'>
                                <input type="file" className="form-control" id="InputPhoto" accept="image/*" required onChange={handlePhotoChange} />
                            </div>
                        </div>

                        <div className='row align-items-center mb-4' style={{ gap: '10%' }}>
                            <div className='col-2'>
                                <label htmlFor="inputStartRent" className="form-label">Start Rent</label>
                            </div>
                            <div className='col-6'>
                                <input type="date" className="form-control" id="InputStartRent" required value={startRent} onChange={(e) => setStartRent(e.target.value)}/>
                            </div>
                        </div>

                        <div className='row align-items-center mb-4' style={{ gap: '10%' }}>
                            <div className='col-2'>
                                <label htmlFor="inputFinishRent" className="form-label">Finish Rent</label>
                            </div>
                            <div className='col-6'>
                                <input type="date" className="form-control" id="InputFinishRent" required value={finishRent} onChange={(e) => setFinishRent(e.target.value)}/>
                            </div>
                        </div>

                        <div className='row align-items-center mb-4' style={{ gap: '10%' }}>
                            <div className='col-2'>
                                <label htmlFor="inputCreatedAt" className="form-label">Created At</label>
                            </div>
                            <div className='col-6'>
                                -
                            </div>
                        </div>

                        <div className='row align-items-center mb-4' style={{ gap: '10%' }}>
                            <div className='col-2'>
                                <label htmlFor="inputUpdatedAt" className="form-label">Updated At</label>
                            </div>
                            <div className='col-6'>
                                -
                            </div>
                        </div>
                    </form>
                </div>
                {error && <div className="alert alert-danger mb-3">{error}</div>}
                <div className='d-flex position-absolute ms-2 mb-3 bottom-0' style={{gap:'10px'}}>
                    <button type="button" className="btn btn-outline-primary rounded-0" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary rounded-0" onClick={handleSubmit}>Save</button>
                </div>  
            </Layout>
        </>
    )
}

export default AdminEditCar;