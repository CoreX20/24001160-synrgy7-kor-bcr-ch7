import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const showButton = location.pathname !== '/cars';
  return (
    <>
<header className="position-relative">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="navbar-brand logo" />
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
            BCR
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body d-sm-flex justify-content-end">
          <div className="fw-bold">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#our-services">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
              <Link to="/register" className="btn btn-success fw-bold" >Register</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  {/* Hero Section */}
  <div className="hero d-lg-flex flex-row justify-content-between">
    <div className="d-lg-flex flex-column justify-content-center">
      <div className="content">
        <h1 className="fw-bold">
          Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
        </h1>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil
          kualitas terbaik dengan harga terjangkau. Selalu siap melayani
          kebutuhanmu untuk sewa mobil selama 24 jam.
        </p>
        {showButton && (
            <Link to="/cars" className="btn btn-success" role="button">Mulai Sewa Mobil</Link>
        )}
      </div>
    </div>
    <div className="d-lg-flex flex-column">
      <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1710822604/img_car_n79kiz.png" alt="Car" />
    </div>
  </div>
</header>
    </>
  );
}

export default Header;
