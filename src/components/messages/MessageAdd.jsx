//import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import 'flowbite';
import { messageApi } from '../../api/messages/messageApi';

const MessageAdd = () => {

  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [comment, setComment] = useState('');

  const registerMessageHandler = async (e) => {
    e.preventDefault();

    try {

      await messageApi.post('/add', {
        fullname,
        comment,
      });

      toast.success('¡.Se Ha Registrado Mensaje Exitosamente.!');
      navigate('/message');

    } catch (error) {
      toast.error('¡.Registro Mensaje Fallido, Por Favor Inténtalo De Nuevo.!');
    }
  }

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
                  <i className="fa-solid fa-message"></i> Mensaje. :*
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
                      <i className="fa-solid fa-message"></i> Mensaje. :*
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
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-12 py-12 mx-auto md:h-screen lg:py-12">
          <div className="bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-12 space-y-12 md:space-y-12 sm:p-12">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <i className="fa-solid fa-message"></i> Asunto.
              </h1>
              <form className="space-y-12 md:space-y-12" onSubmit={registerMessageHandler}>
                <div className='relative z-0 w-full mb-3 group'>
                  <label
                    htmlFor="fullname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    style={{ fontSize: "15px" }}>
                    <i className="fa-solid fa-pen-to-square"></i> Tu Nombre Completo O Usuario. <span
                      className="required">:*</span>
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setFullname(e.target.value)}
                    id='fullname'
                    name="fullname"
                    placeholder="Tu Nombre Completo O Usuario. :*"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    style={{ fontSize: "15px" }} required />
                </div>
                <div className='relative z-0 w-full mb-3 group'>
                  <label
                    htmlFor="comment"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                      <i className="fa-solid fa-message"></i> Escriba De Mensaje. <span
                        className="required">:*</span>
                    </span>
                  </label>
                  <textarea id="comment" cols={100} rows={100} required onChange={(e) => setComment(e.target.value)} placeholder="Escriba De Mensaje. :*" spellCheck={false} style={{ height: 150, fontSize: "15px", textAlign: "justify" }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={""} />
                </div>
                <button
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  style={{ fontSize: "15px" }}>
                  <i className="fa-solid fa-message"></i> Enviar Mensaje.
                </button>
                <p
                  className="text-sm font-light text-gray-500 dark:text-gray-400"
                  style={{ fontSize: "15px" }}>
                  {' '}<Link
                    to="/location"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    style={{ fontSize: "15px" }}>
                    <i className="fa-solid fa-globe"></i> Volver Contacto.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="b-example-divider"></div>
    </>
  );
}

export default MessageAdd;