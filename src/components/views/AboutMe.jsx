/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Users from './assetsUsers/img/customers/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/img/logonv.jpg';
import 'flowbite';

const AboutMe = () => {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

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
                                    <FontAwesomeIcon icon="fa-solid fa-user" /> MI PERFIL. :*
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
                                            <FontAwesomeIcon icon="fa-solid fa-user" /> MI PERFIL. :*
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
            <div id="my_account-page-wrapper" className="page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* My Account Page Start */}
                            <div className="myaccount-page-wrapper">
                                {/* My Account Tab Menu Start */}
                                <div className="row">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="myaccount-tab-menu nav" role="tablist">
                                            <Link to="#dashboad" className="active" data-bs-toggle="tab" rel="noopener noreferrer">
                                                <i className="fa fa-dashboard" /> INICIO. :*
                                            </Link>
                                            <Link to="#address-edit" data-bs-toggle="tab" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon="fa-solid fa-user" /> MI PERFIL. :*
                                            </Link>
                                        </div>
                                    </div>
                                    {/* My Account Tab Menu End */}
                                    {/* My Account Tab Content Start */}
                                    <div className="col-lg-9 col-md-8">
                                        <div className="tab-content" id="myaccountContent">
                                            {/* Single Tab Content Start */}
                                            <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>
                                                        <i className="fa fa-dashboard" /> INICIO. :*
                                                    </h3>
                                                    <div className="welcome">
                                                        <p style={{ fontWeight: "bold", fontSize: "15px" }}>
                                                            <section className="bg-white dark:bg-gray-900">
                                                                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                                                    <div className="mr-auto place-self-center lg:col-span-7">
                                                                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                                                                            <span className="special" style={{ textAlign: "center", color: "black", borderRadius: "20px 20px", padding: "2px 4px", backgroundColor: 'rgb(0 0 0 / 12%)' }}>
                                                                                Nury Valenzuela&#174;
                                                                            </span><br /><span style={{ textAlign: "center", color: "black", borderRadius: "20px 20px", padding: "2px 4px", backgroundColor: 'rgb(0 0 0 / 12%)' }}>
                                                                                Joyer&iacute;a
                                                                            </span>
                                                                        </h1>
                                                                    </div>
                                                                    <div className="lg:mt-0 lg:col-span-5 lg:flex">
                                                                        <img
                                                                            src={Logo}
                                                                            alt="Nury Valenzuela&#174; Joyer&iacute;a"
                                                                            title="Nury Valenzuela&#174; Joyer&iacute;a" />
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Single Tab Content End */}
                                            {/* Single Tab Content Start */}
                                            <div className="tab-pane fade" id="address-edit" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>
                                                        <FontAwesomeIcon icon="fa-solid fa-user" /> MI PERFIL. :*
                                                    </h3>
                                                    <address>
                                                        <p style={{ textAlign: "justify", marginTop: '50px' }} lang="es">
                                                            <section className="bg-white dark:bg-gray-900">
                                                                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                                                                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                                                                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                                                            <a rel="noopener noreferrer">
                                                                                <img
                                                                                    src={Users}
                                                                                    className="img-fluid rounded-start border border-dark img-rounded mx-auto d-block img-thumbnail mb-4"
                                                                                    alt={userInfo.username}
                                                                                    title={userInfo.username} />
                                                                            </a>
                                                                            <div className="p-5">
                                                                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                                    <a rel="noopener noreferrer">
                                                                                        <span className="badge rounded-pill text-bg-dark" style={{ fontSize: "15px" }}>
                                                                                            MI USUARIO. :* {userInfo.username}
                                                                                        </span>
                                                                                    </a>
                                                                                </h3>
                                                                                <span className="text-gray-500 dark:text-gray-400">
                                                                                    <span className="badge rounded-pill text-bg-primary" style={{ fontSize: "15px" }}>
                                                                                        MI NOMBRE COMPLETO. :* {userInfo.fullname}
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </p>
                                                    </address>
                                                </div>
                                            </div>
                                            {/* Single Tab Content End */}
                                        </div>
                                    </div>
                                    {/* My Account Tab Content End */}
                                </div>
                            </div>
                            {/* My Account Page End */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;