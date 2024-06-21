import React from 'react';
import OwlCarousel from 'react-owl-carousel';
const Main: React.FC = () => {
    const options = {
        loop: true,
         margin: 20,
        stagePadding: 50,
        autoWidth: true,
        items: 1,
        center: true,
        responsiveClass: true,
        nav: true,
    }
    return (
        <>
        <section id="our-services" className="our-services row">
            <div className="col-lg img-service">
            <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1711356022/img_service_qpdt4p.png"/>
            </div>
            <div className="col-lg d-flex flex-column our-services__desc justify-content-center">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
                murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
                dll.
            </p>
            <div className="our-services__list">
                <div className="d-flex flex-row gap-3">
                <div className="our-services__list-icon text-center">
                    <i className="bi bi-check-lg" />
                </div>
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                </div>
                <div className="d-flex flex-row gap-3">
                <div className="our-services__list-icon text-center">
                    <i className="bi bi-check-lg" />
                </div>
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                </div>
                <div className="d-flex flex-row gap-3">
                <div className="our-services__list-icon text-center">
                    <i className="bi bi-check-lg" />
                </div>
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
                </div>
                <div className="d-flex flex-row gap-3">
                <div className="our-services__list-icon text-center">
                    <i className="bi bi-check-lg" />
                </div>
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
                </div>
                <div className="d-flex flex-row gap-3">
                <div className="our-services__list-icon text-center">
                    <i className="bi bi-check-lg" />
                </div>
                <p>Layanan Airport Transfer / Drop In Out</p>
                </div>
            </div>
            </div>
        </section>
        {/* Why Us */}
        <section id="why-us" className="why-us container">
            <h2 className="fw-bold text-center text-lg-start">Why Us?</h2>
            <p className="text-center text-lg-start">
            Mengapa harus pilih Binar Car Rental?
            </p>
            <div className="why-us__list d-lg-flex flex-lg-row flex-sm-column">
            <div className="card">
                <div className="why-us__list-icon--yellow d-flex justify-content-center align-items-center">
                <i className="bi bi-hand-thumbs-up" style={{color: '#ffffff', fontSize: 20}} ></i>
                </div>
                <h3>Mobil Lengkap</h3>
                <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
                </p>
            </div>
            <div className="card">
                <div className="why-us__list-icon--red d-flex justify-content-center align-items-center">
                <i className="bi bi-tag" style={{color: '#ffffff', fontSize: 20}} />
                </div>
                <h3>Harga Murah</h3>
                <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                mobil lain
                </p>
            </div>
            <div className="card">
                <div className="why-us__list-icon--blue d-flex justify-content-center align-items-center">
                <i className="bi bi-clock" style={{color: '#ffffff', fontSize: 20}}></i>
                </div>
                <h3>Layanan 24 Jam</h3>
                <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
                </p>
            </div>
            <div className="card">
                <div className="why-us__list-icon--green d-flex justify-content-center align-items-center">
                <i className="bi bi-award" style={{color: '#fff', fontSize: 20}} />
                </div>
                <h3>Sopir Profesional</h3>
                <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
                waktu
                </p>
            </div>
            </div>
        </section>
        {/* Testimony */}
        <section id="testimonial" className="testimonial">
            <div className="container d-flex flex-column align-items-center justify-content-center">
            <h2 className="fw-bold">Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            {/* <Carousel/> */}
            <OwlCarousel className="owl-carousel owl-theme" {...options}>
                <div className="item d-flex align-items-center justify-content-center">
                    <div className="d-lg-flex flex-lg-row align-items-center justify-content-center">
                    <div className="col-lg-3 d-flex justify-content-center">
                        <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1710090690/1966071e0e7f316b62332951ccdc129a_jqv6v4.png" className="rounded-circle" alt="..." style={{width: 80}} />
                    </div>
                    <div className="col-lg">
                        <div className="rate-star mb-lg-2">
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                        </div>
                        <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod”
                        </p>
                        <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                    </div>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                    <div className="d-lg-flex flex-lg-row align-items-center justify-content-center">
                    <div className="col-lg-3 d-flex justify-content-center">
                        <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1710090690/1966071e0e7f316b62332951ccdc129a_jqv6v4.png" className="rounded-circle" alt="..." style={{width: 80}} />
                    </div>
                    <div className="col-lg">
                        <div className="rate-star mb-lg-2">
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                        </div>
                        <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod”
                        </p>
                        <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                    </div>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                    <div className="d-lg-flex flex-lg-row align-items-center justify-content-center">
                    <div className="col-lg-3 d-flex justify-content-center">
                        <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1710090691/3f0d2d46b5a945c7deefdcc78b583af6_v4xcz3.png" className="rounded-circle" alt="..." style={{width: 80}} />
                    </div>
                    <div className="col-lg">
                        <div className="rate-star mb-lg-2">
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                            <i className="bi bi-star-fill pe-1" style={{color: '#f9cc00',fontSize: 15}}></i>
                        </div>
                        <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod”
                        </p>
                        <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>
        {/*CTA Banner*/}
        <section id="cta-banner">
            <div className="banner container d-flex flex-column justify-content-center align-items-center">
            <h2 className="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="btn btn-success" href="cars.html" role="button">Mulai Sewa Mobil</a>
            </div>
        </section>
        {/* FAQ Section */}
        <section id="faq" className="faq container">
            <div className="d-lg-flex flex-lg-row justify-content-between flex-sm-column">
            <div className="faq__text">
                <h2 className="fw-bold">Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="faq__list">
                <div id="accordionExample">
                <div className="accordion">
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Apa saja syarat yang dibutuhkan?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Berapa hari minimal sewa mobil lepas kunci?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Berapa hari sebelumnya sebaiknya booking sewa mobil?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Apakah Ada biaya antar-jemput?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Bagaimana jika terjadi kecelakaan
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default Main;