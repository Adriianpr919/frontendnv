//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { orderApi } from '../../api/order/orderApi';
import 'flowbite';

const MyOrder = () => {

    const [order, setOrder] = useState([]);

    const location = useLocation();

    const id = location.pathname.split("/")[2];
    console.log(id);

    useEffect(() => {

        const fetchData = async () => {
            try {

                const { data } = await orderApi.get(`/find/${id}`);
                console.log(data);
                setOrder(data);

            } catch (err) {
                toast.error('¡.Pedido NO Encontrado.!');
            }
        }
        fetchData();

    }, [id]);

    const uint1 = new Uint32Array([order.subTotal]);
    const uint2 = new Uint32Array([order.taxPrice]);
    const uint3 = new Uint32Array([order.totalPrice]);

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
                                        <Link to="/account" rel="noopener noreferrer">
                                            <span className='fas fa-arrow-circle-left'></span> Regresa Pedidos.
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#!" className="current" rel="noopener noreferrer">
                                            <strong>
                                                # REFERENCIA. :* {id}
                                            </strong>
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
            <div id="cart-page-wrapper" className="page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Cart Table Area */}
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    IMAGEN. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    NOMBRE. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    CANTIDAD. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    TALLA. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    COLOR DE ORO. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    COLOR DE PIEDRAS. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    PRECIO. :*
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.orderItems?.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="pro-thumbnail">
                                                        <Link to={`/product/${item._id}`} rel="noopener noreferrer">
                                                            <img
                                                                src={`${item.image}`}
                                                                className="card-img-top img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail"
                                                                alt={item.title}
                                                                title={item.title} />
                                                        </Link>
                                                    </td>
                                                    <td className="pro-thumbnail">
                                                        <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                                            {item.title}
                                                        </span>
                                                    </td>
                                                    <td className="pro-thumbnail">
                                                        <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                                            {item.quantity} <br />
                                                            {item.quantity > 0 ? 'EN STOCK.' : 'AGOTADO.'}
                                                        </span>
                                                    </td>
                                                    <td className="pro-thumbnail">
                                                        <span className="badge badge-info mb-2 text-black price" style={{ fontSize: "15px" }}>
                                                            {item.size}
                                                        </span>
                                                    </td>
                                                    <td className="pro-thumbnail">
                                                        <span className="badge badge-info mb-2 text-black price" style={{ fontSize: "15px" }}>
                                                            {item.colorgold}
                                                        </span>
                                                    </td>
                                                    <td className="pro-thumbnail">
                                                        <span className="badge badge-info mb-2 text-black price" style={{ fontSize: "15px" }}>
                                                            {item.colorstone}
                                                        </span>
                                                    </td>
                                                    <td className="pro-thumbnail">
                                                        <span className="price">
                                                            <em>
                                                                <b style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                                    {(item.price).toLocaleString('es-CO', {
                                                                        style: 'currency',
                                                                        currency: 'COP',
                                                                    })}
                                                                </b>
                                                            </em>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {/* Cart Update Option */}
                        </div>
                    </div>
                </div>
            </div>
            <div id="cart-page-wrapper" className="page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Cart Table Area */}
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    Nombre Completo. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    Documento. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    Correo. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    Direcci&#243;n. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    &#35;  Tel&#233;fono Y Celular. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    Detalle. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    Departamento. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    Ciudad. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    Est&#225; Entregado. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    Est&#225; Pagado. :*
                                                </span>
                                            </th>
                                            <th className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    CONTACTAR EL VENDEDOR. :*
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.name}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.document}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.email}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.address}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.phone}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.marker}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.departments}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.city}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.isDelivered === true ? ('SI') : ('NO')}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                    {order.isPaid === true ? ('SI') : ('NO')}
                                                </span>
                                            </td>
                                            <td className="pro-thumbnail">
                                                <span style={{ color: "black", fontSize: "15px" }} className="badge badge-warning mb-2">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-success btn-block mb-2 py-2">
                                                        <i className="fab fa-whatsapp" style={{ fontSize: "20px" }}></i> Comprar Por WhatsAPP.
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Cart Update Option */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 ml-auto">
                            {/* Cart Calculation Area */}
                            <div className="cart-calculator-wrapper">
                                <div className="cart-calculate-items">
                                    <h3>Mi Factura. :*</h3>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            SubTotal. :*
                                                        </h4>
                                                    </td>
                                                    <td>
                                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            {(uint1.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                                        </h4>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            Impuesto IVA De 19%. :*
                                                        </h4>
                                                    </td>
                                                    <td>
                                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            {(uint2.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                                        </h4>
                                                    </td>
                                                </tr>
                                                <tr className="total">
                                                    <td>
                                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            Total. :*
                                                        </h4>
                                                    </td>
                                                    <td className="total-amount">
                                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            {(uint3.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                                        </h4>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrder;