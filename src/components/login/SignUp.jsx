/* eslint-disable jsx-a11y/anchor-is-valid */
//import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'flowbite';
import { userApi } from '../../api/login/userApi';

const SignUp = () => {

    const navigate = useNavigate();

    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');

    const registerHandler = async (e) => {
        e.preventDefault();

        //check password === retype password
        if (password !== rPassword) {
            toast.error('¡.Las Contraseñas NO Coinciden.!');
            return;
        }

        try {

            await userApi.post('/register', {
                fullname,
                username,
                email,
                password
            });

            toast.success('¡.Se Ha Registrado Exitosamente.!');
            navigate('/login');

        } catch (error) {
            toast.error('¡.Registro Fallido, Por Favor Inténtalo De Nuevo.!');
        }
    }

    useEffect(() => {
        //check for if exists user then redirect from login to home page
        if (localStorage.getItem('userInfo')) {
            localStorage.getItem('userInfo');
            navigate('/');
        }
    }, [navigate]);

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
                                    <FontAwesomeIcon icon="fa-solid fa-gear" /> Ajustes. :*
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
                                            <FontAwesomeIcon icon="fa-solid fa-gear" /> Ajustes. :*
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
                                Crear y Cuenta Nueva.
                            </h1>
                            <form className="space-y-12 md:space-y-12" onSubmit={registerHandler}>
                                <div className='relative z-0 w-full mb-3 group'>
                                    <label
                                        htmlFor="fullname"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        style={{ fontSize: "15px" }}>
                                        <i className="fa-solid fa-pen-to-square"></i> Tu Nombre Completo. <span
                                            className="required">:*</span>
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) => setFullname(e.target.value)}
                                        id='fullname'
                                        name="fullname"
                                        placeholder="Tu Nombre Completo."
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        style={{ fontSize: "15px" }} required />
                                </div>
                                <div className='grid md:grid-cols-2 md:gap-6'>
                                    <div className='relative z-0 w-full mb-3 group'>
                                        <label
                                            htmlFor="username"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            style={{ fontSize: "15px" }}>
                                            <i className="fas fa-user-plus"></i> Tu Usuario. <span
                                                className="required">:*</span>
                                        </label>
                                        <input
                                            type="text"
                                            onChange={(e) => setUsername(e.target.value)}
                                            id='username'
                                            name="username"
                                            placeholder="Tu Usuario."
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            style={{ fontSize: "15px" }} required />
                                    </div>
                                    <div className='relative z-0 w-full mb-3 group'>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            style={{ fontSize: "15px" }}>
                                            <i className="fas fa-at"></i> Tu Correo. <span className="required">:*</span>
                                        </label>
                                        <input
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            id='email'
                                            name="email"
                                            placeholder="tucorreo@ejemplo.com"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            style={{ fontSize: "15px" }} required />
                                    </div>
                                </div>
                                <div className='grid md:grid-cols-2 md:gap-6'>
                                    <div className='relative z-0 w-full mb-3 group'>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            style={{ fontSize: "15px" }}>
                                            <i className="fas fa-key"></i> La Contraseña. <span
                                                className="required">:*</span>
                                        </label>
                                        <input
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            id='password'
                                            name="password"
                                            placeholder="La Contraseña."
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            style={{ fontSize: "15px" }} required />
                                    </div>
                                    <div className='relative z-0 w-full mb-3 group'>
                                        <label
                                            htmlFor="r_password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            style={{ fontSize: "15px" }}>
                                            <i className="fas fa-key"></i> La Contraseña Actual. <span
                                                className="required">:*</span>
                                        </label>
                                        <input
                                            type="password"
                                            onChange={(e) => setRPassword(e.target.value)}
                                            id='r_password'
                                            name="r_password"
                                            placeholder="La Contraseña Actual."
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            style={{ fontSize: "15px" }} required />
                                    </div>
                                </div>
                                <button
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    style={{ fontSize: "15px" }}>
                                    <i className="fas fa-user-plus"></i> Crear Cuenta.
                                </button>
                                <p
                                    className="text-sm font-light text-gray-500 dark:text-gray-400"
                                    style={{ fontSize: "15px" }}>
                                    {' '}¿Ya Tienes Una Cuenta?{' '} <hr className="my-4" /> <Link
                                        to="/login"
                                        rel="noopener noreferrer"
                                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                        style={{ fontSize: "15px" }}>
                                        <i className="fas fa-user-shield"></i> Inicia Sesi&#243;n.
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
};

export default SignUp;