import React from 'react';
const Header : React.FC = () => {
    return (
        <div className="d-flex shadow-sm bg-light position-relative" style={{ height: '70px' }}>
            <div className="d-flex align-items-center">
                <div className='logo mx-4' style={{backgroundColor:'#CFD4ED'}}></div>
                <i className="bi bi-list" style={{fontSize:'30px'}}></i>
                <div className="d-flex justify-content-between align-items-center position-absolute" style={{right:'50px'}}>
                    {/* searchBar */}
                    <div className="row g-0 align-items-center searchbar me-3">
                        <div className="col">
                            <div className="input-group d-flex align-items-center">
                                <input type="search" placeholder="Search" className="form-control p-2" />
                                <i className="bi bi-search"></i>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-outline-primary rounded-0">Search</button>
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: 40, height: 40, backgroundColor: '#CFD4ED', color: '#151515', fontSize: 18 }}>
                            U
                        </div>
                        <div className="ms-2">Unis Badri</div>
                    </div>
                </div>
                
            </div>
        </div>


    )
}

export default Header;