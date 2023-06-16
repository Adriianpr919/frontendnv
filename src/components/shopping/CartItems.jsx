/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import Checkout from './Checkout';
import { Store } from '../../utils/Store';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import 'flowbite';

const CartItems = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: { cartItems } } = state;

    const [open, setOpen] = useState(false);

    const removeItemHandler = (item) => {
        ctxDispatch({
            type: 'REMOVE_FROM_CART',
            payload: item,
        });
        toast.success('¡.Has Eliminado Con Éxito El Producto Del Carrito.!');
    }

    const updateCartHandler = (item, quantity) => {
        ctxDispatch({
            type: 'ADD_TO_CART',
            payload: { ...item, quantity },
        });
    }

    const subTotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    const taxPrice = (0.19 * subTotal); //19% tax in Colombia.
    const totalPrice = taxPrice + subTotal;

    const uint1 = new Uint32Array([subTotal]);
    const uint2 = new Uint32Array([taxPrice]);
    const uint3 = new Uint32Array([totalPrice]);

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
                                    <i className="fas fa-shopping-cart" /> Carrito De Compras.
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
                                        <Link to="/shop" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faBagShopping} />  PRODUCTOS.
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cart" className="current" rel="noopener noreferrer">
                                            <i className="fas fa-shopping-cart" /> Carrito De Compras.
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
                                            <th className="pro-thumbnail">IMAGEN. :*</th>
                                            <th className="pro-thumbnail">NOMBRE. :*</th>
                                            <th className="pro-price">CATEGOR&#205;AS. :*</th>
                                            <th className="pro-quantity">PRECIO. :*</th>
                                            <th className="pro-subtotal">TALLA. :*</th>
                                            <th className="pro-remove">COLOR DE ORO. :*</th>
                                            <th className="pro-remove">COLOR DE PIEDRAS. :*</th>
                                            <th className="pro-thumbnail">CANTIDAD. :*</th>
                                            <th className="pro-thumbnail">ACCI&#211;N. :*</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.length === 0 ? (
                                                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-medium no-data" style={{ fontSize: "15px", color: "black", textAlign: "center" }}>
                                                        ¡.Actualmente NO Hay Productos.!
                                                    </span>
                                                </div>
                                            ) : (
                                                <>
                                                    {
                                                        cartItems.map((item, index) => (
                                                            <tr key={index}>
                                                                <td className="pro-thumbnail">
                                                                    <Link to={`/product/${item._id}`} rel="noopener noreferrer">
                                                                        <div>
                                                                            <div className="block w-40 h-30 rounded border border-gray-200 overflow-hidden">
                                                                                <img
                                                                                    src={item.image}
                                                                                    className="card-img-top img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail"
                                                                                    alt={item.title}
                                                                                    title={item.title} />
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </td>
                                                                <td className="pro-thumbnail">
                                                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                        {item.title}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-title">
                                                                    <div class="pl-3">
                                                                        <div class="text-base font-semibold">
                                                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                                {item.categoryOptions}
                                                                            </span>
                                                                        </div>
                                                                        <div class="font-normal text-gray-500">
                                                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                                {item.subcategoryOptions}
                                                                            </span>
                                                                        </div>
                                                                        <div class="font-normal text-gray-500">
                                                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                                {item.tripletecategoryOptions}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="pro-subtotal">
                                                                    <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                                        {(item.price).toLocaleString('es-CO', {
                                                                            style: 'currency',
                                                                            currency: 'COP',
                                                                        })}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-quantity">
                                                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                        {item.size}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-remove">
                                                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                        {item.colorgold}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-remove">
                                                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                        {item.colorstone}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-thumbnail">
                                                                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                                                        <button
                                                                            onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity === 1}
                                                                            data-action="decrement" style={{ fontSize: "15px" }}
                                                                            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                                                        >
                                                                            <span className="m-auto text-2xl font-thin" style={{ fontSize: "15px" }}>
                                                                                &#45;
                                                                            </span>
                                                                        </button>
                                                                        <span className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center  custom-input-number text-black" style={{ fontSize: "15px" }}>
                                                                            {item.quantity}
                                                                        </span>
                                                                        <button
                                                                            onClick={() => updateCartHandler(item, item.quantity + 1)}
                                                                            data-action="increment" style={{ fontSize: "15px" }}
                                                                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                                                        >
                                                                            <span className="m-auto text-2xl font-thin" style={{ fontSize: "15px" }}>
                                                                                &#43;
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className="pro-thumbnail">
                                                                    <button
                                                                        onClick={() => removeItemHandler(item)}
                                                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                                                        <span style={{ fontSize: "20px" }} alt='Eliminar.' title='Eliminar.'>
                                                                            <i className="fa-solid fa-trash"></i>
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {/* Cart Update Option */}
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <aside className="md:w-1/4">
                            <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                                <ul className="mb-5">
                                    <li className="flex justify-between text-gray-600  mb-1">
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            SubTotal. :*
                                        </span>
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            {(uint1.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                        </span>
                                    </li>
                                    <li className="flex justify-between text-gray-600  mb-1">
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            Impuesto IVA De 19%. :*
                                        </span>
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            {(uint2.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                        </span>
                                    </li>
                                    <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            Total. :*
                                        </span>
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            {(uint3.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                        </span>
                                    </li>
                                </ul>
                                {cartItems.length > 0 && (
                                    <a
                                        rel="noopener noreferrer"
                                        onClick={() => setOpen(true)} style={{ fontSize: "15px" }}
                                        className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                                        <i className="fa-solid fa-credit-card"></i> Finalizar Compra.
                                    </a>)}
                                <></>
                                <Link
                                    to="/shop" rel="noopener noreferrer" style={{ fontSize: "15px" }}
                                    className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-400 rounded-md hover:bg-gray-100"
                                >
                                    Continuar Con La Compra.
                                </Link>
                            </article>
                        </aside>
                    </div>
                </div>
            </section>
            {open && <Checkout setOpen={setOpen} cartItems={cartItems} subTotal={subTotal} taxPrice={taxPrice} totalPrice={totalPrice} />}
        </>
    );
};

export default CartItems;