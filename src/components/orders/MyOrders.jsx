import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyOrders = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const userId = userInfo._id;
    console.log(userId);

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const resultOrders = await axios.get(`/api/orders/mine/${userId}`);
            console.log(resultOrders.data);
            setOrders(resultOrders.data);
        }

        fetchData();

    }, [userId, navigate, userInfo]);

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
                                    <FontAwesomeIcon icon="fa-solid fa-truck-fast" /> Mis Pedidos. :*
                                </h1>
                            </div>
                        </div>
                        {/* Page Title Area End */}
                        {/* Page Breadcrumb Start */}
                        <div className="col-6 m-auto">
                            <nav className="page-breadcrumb-wrap">
                                <ul className="nav justify-content-end">
                                    <li>
                                        <a href="/" rel="noopener noreferrer">
                                            INICIO.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="current" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon="fa-solid fa-truck-fast" /> Mis Pedidos. :*
                                        </a>
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
                                            <a href="#dashboad" className="active" data-bs-toggle="tab" rel="noopener noreferrer">
                                                <i className="fa fa-dashboard" /> INICIO. :*
                                            </a>
                                            <a href="#orders" data-bs-toggle="tab" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon="fa-solid fa-truck-fast" /> Mis Pedidos. :*
                                            </a>
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
                                                            <div id="intro-example" className="p-5 text-center bg-image" style={{ backgroundImage: 'url("https://images.pexels.com/photos/2942855/pexels-photo-2942855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}>
                                                                <div className="mask" style={{ backgroundColor: '#bdc3c787' }}>
                                                                    <div className="d-flex justify-content-center align-items-center h-100">
                                                                        <div className="text-white">
                                                                            <h1 className="mb-3">
                                                                                <span className="special" style={{ textAlign: "center", color: "white", borderRadius: "20px 20px", padding: "2px 4px", backgroundColor: 'rgb(0 0 0 / 12%)' }}>
                                                                                    Nury Valenzuela&#174;
                                                                                </span>Joyer&iacute;a &#124; Colombia.
                                                                            </h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Single Tab Content End */}
                                            {/* Single Tab Content Start */}
                                            <div className="tab-pane fade" id="orders" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>
                                                        <FontAwesomeIcon icon="fa-solid fa-truck-fast" /> Mis Pedidos. :*
                                                    </h3>
                                                    {
                                                        orders.length === 0 ? (
                                                            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                                <span className="font-medium no-data" style={{ fontSize: "15px" }}>
                                                                    ¡.Sin Pedidos.!
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <div className="myaccount-table table-responsive text-center">
                                                                    <table className="table table-bordered">
                                                                        <thead className="thead-light">
                                                                            <tr>
                                                                                <th className="pro-thumbnail text-black">
                                                                                    # REFERENCIA. :*
                                                                                </th>
                                                                                <th className="pro-thumbnail text-black">
                                                                                    ACCI&#211;N. :*
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                orders.map((item) => (
                                                                                    <tr key={item._id}>
                                                                                        <td>
                                                                                            <strong className='badge badge-secondary text-black mb-2' style={{ fontWeight: "bold", fontSize: "15px" }}>
                                                                                                {item._id}
                                                                                            </strong>
                                                                                        </td>
                                                                                        <td>
                                                                                            <Link to={`/order/${item._id}`} rel='noopener noreferrer'
                                                                                                className='btn btn-brand btn-small text-black mb-2'
                                                                                                style={{ fontWeight: "bold", fontSize: "15px" }}>
                                                                                                <FontAwesomeIcon icon={faEye} />
                                                                                            </Link>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))
                                                                            }
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
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

export default MyOrders;