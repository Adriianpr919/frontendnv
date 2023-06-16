import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'flowbite';
import { orderApi } from '../../api/order/orderApi';

const Checkout = ({ setOpen, cartItems, subTotal, taxPrice, totalPrice }) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const userId = userInfo._id;
    console.log(userId);

    const [name, setName] = useState('');
    const [document, setDocument] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [marker, setMarker] = useState('');
    const [departments, setDepartments] = useState('');
    const [city, setCity] = useState('');

    const orderProductHandler = async (e) => {
        e.preventDefault();

        try {

            const { data } = await orderApi.post('/add', {

                orderItems: cartItems,
                userId: userId,
                name: name,
                document: document,
                email: email,
                address: address,
                phone: phone,
                marker: marker,
                departments: departments,
                city: city,
                subTotal: subTotal,
                taxPrice: taxPrice,
                totalPrice: totalPrice
            });

            if (data) {
                localStorage.removeItem('cartItems');
                setOpen(false);
                toast.success('¡.Has Pedido Con Éxito.!');
                navigate('/account');
            }

        } catch (err) {

            toast.error('¡.Pedido Fallido.!');

        }

    }

    return (
        <div className='co-container' style={{ marginTop: '0%' }}>
            <form onSubmit={orderProductHandler}>
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <div id="alert-additional-content-5" className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
                            <div className="flex items-center">
                                <h1 className="text-lg font-medium text-gray-800 dark:text-gray-300" style={{ fontSize: "15px" }}>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-info" /> DETALLES DE FACTURACI&#211;N. :*
                                </h1>
                            </div>
                            <hr className="my-3" />
                            <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                Nombre Completo. :*
                                            </span>
                                        </label>
                                        <input type="text" onChange={(e) => setName(e.target.value)} name="name" id='name' placeholder='Nombre Completo. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" style={{ fontSize: "15px" }} required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="document" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                Documento. :*
                                            </span>
                                        </label>
                                        <input type="text" onChange={(e) => setDocument(e.target.value)} name="document" id='document' placeholder='Documento. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" style={{ fontSize: "15px" }} required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                Correo. :*
                                            </span>
                                        </label>
                                        <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" id='email' placeholder='Correo. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" style={{ fontSize: "15px" }} required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                Direcci&#243;n. :*
                                            </span>
                                        </label>
                                        <input type="text" onChange={(e) => setAddress(e.target.value)} name="address" id='address' placeholder='Dirección. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" style={{ fontSize: "15px" }} required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                &#35; Tel&#233;fono Y Celular. :*
                                            </span>
                                        </label>
                                        <input type="text" onChange={(e) => setPhone(e.target.value)} name="phone" id='phone' placeholder='# Teléfono Y Celular. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" style={{ fontSize: "15px" }} required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="marker" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                Detalle. :*
                                            </span>
                                        </label>
                                        <select onChange={(e) => setMarker(e.target.value)} id='marker' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" style={{ fontSize: "15px" }}>
                                            <option value="" style={{ fontSize: "15px" }} disabled selected>--- Seleccionar ---</option>
                                            <option value="Pendiente De Pago" style={{ fontSize: "15px" }}>
                                                Pendiente De Pago
                                            </option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="departments" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                Departamento. :*
                                            </span>
                                        </label>
                                        <input type="text" onChange={(e) => setDepartments(e.target.value)} name="departments" id='departments' placeholder='Departamento. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" style={{ fontSize: "15px" }} required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                Ciudad. :*
                                            </span>
                                        </label>
                                        <input type="text" onChange={(e) => setCity(e.target.value)} name="city" id='city' placeholder='Ciudad. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" style={{ fontSize: "15px" }} required />
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" style={{ fontSize: "15px" }}>
                                    <FontAwesomeIcon icon={faTruck} /> Pagar.
                                </button>
                                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" style={{ fontSize: "15px" }} onClick={() => setOpen(false)}>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> Cancelar.
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default Checkout;