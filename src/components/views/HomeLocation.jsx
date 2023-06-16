import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Iframe from 'react-iframe';

const HomeLocation = () => {
  return (
    <>
      <div className="b-example-divider" style={{ marginTop: '0%' }}></div>
      {/*== Start Page Header ==*/}
      <div id="page-header-wrapper">
        <div className="container">
          <div className="row">
            {/* Page Title Area Start */}
            <div className="col-6">
              <div className="page-title-wrap">
                <h1>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" /> CONTACTOS. :*
                </h1>
              </div>
            </div>
            {/* Page Title Area End */}
            {/* Page Breadcrumb Start */}
            <div className="col-6 m-auto">
              <nav className="page-breadcrumb-wrap">
                <ul className="nav justify-content-end">
                  <li>
                    <Link to="/" rel="noopener noreferrer">
                      INICIO.
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="current" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-location-dot" /> CONTACTOS. :*
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Page Breadcrumb End */}
          </div>
        </div>
      </div>
      {/*== End Page Header ==*/}
      <div id="about-page-wrapper" className="page-padding pb-0">
        <div className="container">
          {/* About Page Content Start */}
          <div className="row">
            {/* About Text Start */}
            <div className="col-lg-12 order-last order-lg-first">
              <div className="about-text-wrap">
                <p>
                  <div id="about-page-wrapper" className="page-padding pb-0">
                    <div className="container">
                      {/* About Page Content Start */}
                      <div className="row">
                        {/* About Text Start */}
                        <div className="col-lg-9 order-last order-lg-first">
                          <div className="about-text-wrap">
                            <h2>Servicio Al Cliente. :*</h2>
                            <hr className="my-4" />
                            <p>
                              <h3>
                                <p>
                                  <span className="rounded-icon">
                                    <i className="fa fa-map-marker" />
                                  </span> Villavicencio, Meta, Am&#233;rica Del Sur.
                                </p>
                                <p>
                                  <span className="rounded-icon">
                                    <i className="fa fa-angle-double-right wv_circle" /> Correo. :* <a
                                      href="mailto:nuryvalenzuelajoyeria@gmail.com"
                                      rel="noopener noreferrer"
                                      className="text-muted">
                                      <>
                                        <i className="fab fa-telegram"></i> nuryvalenzuelajoyeria@gmail.com
                                      </>
                                    </a>
                                  </span>
                                </p>
                                <p>
                                  <span className="rounded-icon">
                                    <i className="fa fa-angle-double-right wv_circle" /> Mensaje. :* <Link
                                      to="/message"
                                      rel="noopener noreferrer"
                                      className="text-muted">
                                      <>
                                        <i className="fa-solid fa-message"></i> Entrar El Mensaje.
                                      </>
                                    </Link>
                                  </span>
                                </p>
                              </h3>
                              <hr className="my-4" />
                              <p>
                                <a href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" className="text-muted linkEnlace">
                                  <i className="fab fa-whatsapp" style={{ fontSize: "25px", color: "#008000" }}></i> WhatsAPP.
                                </a>
                              </p>
                              <p>
                                <a href="https://www.instagram.com/nuryvalenzuelajoyeria/" target="_blank" rel="noopener noreferrer" className="text-muted linkEnlace">
                                  <i className="fab fa-instagram" style={{ fontSize: "25px", color: "#C13584" }}></i> Instagram.
                                </a>
                              </p>
                              <div>
                                <p>
                                  <Iframe
                                    url="https://maps.google.com/maps?q=Condominio%20montearroyo%20recervado&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    target="_blank" rel="noopener noreferrer"
                                    width="100%"
                                    height="600px"
                                    border={0}
                                    allowtransparency="true"
                                    display="block"
                                    position="relative"
                                    id="gmap_canvas"
                                    frameBorder={0}
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                                    className="mx-auto d-block mb-4"
                                  />
                                </p>
                              </div>
                            </p>
                          </div>
                        </div>
                        {/* About Text End */}
                      </div>
                      {/* About Page Content End */}
                    </div>
                  </div>
                </p>
              </div>
            </div>
            {/* About Text End */}
          </div>
          {/* About Page Content End */}
        </div>
      </div>
    </>
  );
};

export default HomeLocation;
