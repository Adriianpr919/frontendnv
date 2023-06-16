/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/img/logonv.png';

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-12 py-6 lg:py-8" id='FooterOption'>
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a rel="noopener noreferrer" className="flex items-center">
                <img
                  src={Logo}
                  className="mr-3"
                  width={200}
                  height={200}
                  alt="Nury Valenzuela&#174; Joyer&iacute;a"
                  title="Nury Valenzuela&#174; Joyer&iacute;a"
                  loading="lazy"
                  lang="es" />
              </a>
              <div className="b-example-divider" style={{ marginTop: '10%' }}></div>
              <address>
                <p>
                  <Link to="/location" rel="noopener noreferrer" className="hover:underline">
                    <i className="fa fa-angle-double-right wv_circle" /> Villavicencio, Meta, Am&#233;rica Del Sur.
                  </Link>
                </p>
                <hr className="my-2" />
                <p>
                  <i className="fa fa-angle-double-right wv_circle" /> Correo: <a href="mailto:nuryvalenzuelajoyeria@gmail.com"
                    rel="noopener noreferrer" className="hover:underline">
                    <i className="fab fa-telegram"></i> nuryvalenzuelajoyeria@gmail.com
                  </a>
                </p>
                <hr className="my-2" />
                <p>
                  <i className="fa fa-angle-double-right wv_circle" /> Celular:  ESCR&#205;BENOS: <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white" style={{ fontSize: "25px" }} href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                    <i className="fab fa-whatsapp" style={{ fontSize: "25px", color: "#008000" }} />
                  </a>
                </p>
              </address>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" style={{ fontSize: "15px" }}>
                  MEN&#218;.
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" rel="noopener noreferrer" className="hover:underline">
                      <i className="fa fa-angle-double-right wv_circle" /> Inicio.
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/shop" rel="noopener noreferrer" className="hover:underline">
                      <i className="fa fa-angle-double-right wv_circle" /> Filtrar Por.
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/blogs" rel="noopener noreferrer" className="hover:underline">
                      <i className="fa fa-angle-double-right wv_circle" /> Ver Blogs.
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" style={{ fontSize: "15px" }}>
                  ACCEDER.
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/login" rel="noopener noreferrer" className="hover:underline ">
                      <i className="fa fa-angle-double-right wv_circle" /> Inicia Sesi&oacute;n.
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/register" rel="noopener noreferrer" className="hover:underline">
                      <i className="fa fa-angle-double-right wv_circle" /> Reg&#237;strarse.
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" style={{ fontSize: "15px" }}>
                  &Aacute;REA LEGAL.
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/options1" rel="noopener noreferrer" className="hover:underline">
                      <i className="fa fa-angle-double-right wv_circle" /> T&#233;rminos y Condiciones.
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/options2" rel="noopener noreferrer" className="hover:underline">
                      <i className="fa fa-angle-double-right wv_circle" /> Pol&#237;ticas De Envios,<br /> Cambios,<br /> Devoluciones Y
                      Garant&#237;as.
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/faq" rel="noopener noreferrer" className="hover:underline">
                      <i className="fa fa-angle-double-right wv_circle" /> Preguntas Frecuentes.
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/abouts" rel="noopener noreferrer" className="hover:underline">
                      <i className="fa fa-angle-double-right wv_circle" /> Qui&#233;nes Somos.
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/location" rel="noopener noreferrer" className="hover:underline">
                      <i className="fa fa-angle-double-right wv_circle" /> Contactos.
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400" style={{ fontSize: "15px" }}>
              CopyRight &copy; Nury Valenzuela&#174; Joyer&iacute;a &#124; {new Date().getFullYear()} &#124; Todos Los Derechos Reservados.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white" style={{ fontSize: "25px" }} href="https://www.instagram.com/nuryvalenzuelajoyeria/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-instagram" style={{ fontSize: "25px", color: "#ac2bac" }} />
              </a>
              <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white" style={{ fontSize: "25px" }} href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-whatsapp" style={{ fontSize: "25px", color: "#008000" }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;