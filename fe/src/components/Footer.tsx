function Footer() {
    return (
        <footer className="footer container">
  <div className="row">
    <div className="col-lg address">
      <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
      <p>binarcarrental@gmail.com</p>
      <p>081-233-334-808</p>
    </div>
    <div className="col-lg-2 footer__nav">
      <div className="d-flex flex-column justify-content-center gap-4 fw-bold">
        <a href="#our-services">Our Services</a>
        <a href="#why-us">Why Us</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#faq">FAQ</a>
      </div>
    </div>
    <div className="col-lg footer__connect-with-us">
      <p>Connect with us</p>
      <div className="d-flex flex-row gap-3">
        <a href="#" className="footer__icon d-flex justify-content-center align-items-center">
            <i className="bi bi-facebook" style={{color: '#ffffff', fontSize: 18}}></i>
        </a>
        <a href="#" className="footer__icon d-flex justify-content-center align-items-center">
        <i className ="bi bi-instagram"  style={{color: '#ffffff', fontSize: 18}}></i>
        </a>
        <a href="#" className="footer__icon d-flex justify-content-center align-items-center">
          <i className="bi bi-twitter" style={{color: '#fff', fontSize: 18}} />
        </a>
        <a href="#" className="footer__icon d-flex justify-content-center align-items-center">
          <i className="bi bi-envelope" style={{color: '#fff', fontSize: 18}} />
        </a>
        <a href="#" className="footer__icon d-flex justify-content-center align-items-center">
            <i className="bi bi-twitch" style={{color: '#fff', fontSize: 18}} ></i>
        </a>
      </div>
    </div>
    <div className="col-lg footer__copyright">
      <p>Copyright Binar 2022</p>
      <div className="logo" />
    </div>
  </div>
</footer>

    )
}

export default Footer;