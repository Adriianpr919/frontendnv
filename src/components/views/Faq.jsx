import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Faq = () => {
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
                  <FontAwesomeIcon icon="fa-solid fa-gear" /> Preguntas Frecuentes. :*
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
                      <FontAwesomeIcon icon="fa-solid fa-gear" /> Preguntas Frecuentes. :*
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
                <h2>Preguntas Frecuentes.</h2>
                <p style={{ textAlign: "justify" }} lang="es">
                  <Tabs>
                    <TabList>
                      <Tab>
                        <i className="fas fa-info-circle" style={{ fontSize: "25px", color: "#2d3436" }}></i> ¿Quien fabrican una joya a mi gusto, ustedes lo hacen?
                      </Tab><br />

                      <Tab>
                        <i className="fas fa-info-circle" style={{ fontSize: "25px", color: "#2d3436" }}></i> ¿El precio de las argollas expuestos en la p&#225;gina web son por unidad o por el par?
                      </Tab><br />

                      <Tab>
                        <i className="fas fa-info-circle" style={{ fontSize: "25px", color: "#2d3436" }}></i> ¿Qu&#233; hago si no s&#233; cu&#225;l es mi talla?
                      </Tab><br />

                      <Tab>
                        <i className="fas fa-info-circle" style={{ fontSize: "25px", color: "#2d3436" }}></i> ¿Si el producto no este disponible los colores que quiero, ustedes lo fabrican?
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <p style={{ textAlign: "justify" }}>
                        Diseños anillos y dijes a tu gusto. Debe acercarte a uno de nuestros puntos de ventas donde tengo habilitado el servicio t&#233;cnico de joyer&#237;a y solicitar una cotizaci&#243;n de acuerdo a tu preferencia.
                      </p>
                    </TabPanel>

                    <TabPanel>
                      <p style={{ textAlign: "justify" }}>
                        El precio de las argollas son por unidad o par? El precio publicados en las argollas son por unidad. Recuerda que nuestros diseños son exclusivos, de alta calidad y garantizamos nuestro oro de 18 Kilates.
                      </p>
                    </TabPanel>

                    <TabPanel>
                      <p style={{ textAlign: "justify" }}>
                        En nuestras p&#225;gina web hemos dispuesto un "PRODUCTO DE Anillos coraz&#243;n Reborde". Ingrese a este opciones y sigue los sencillos pasos que se te indican. As&#237; podr&#225;s conocer de forma r&#225;pida la talla que se ajusta a tus necesidades.
                      </p>
                    </TabPanel>

                    <TabPanel>
                      <p style={{ textAlign: "justify" }}>
                        Si, puedo escribirnos por la linea Whatsapp y iniciaremos la fabrican una vez se confirme la compra.
                      </p>
                    </TabPanel>
                  </Tabs>
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

export default Faq;
