/* eslint-disable jsx-a11y/anchor-is-valid */
//import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../../utils/Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import 'flowbite';
import { productApi } from '../../api/product/productApi';

const ProductDetails = () => {

    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, wish } = state;

    const [selectedImg, setSelectedImg] = useState('');

    const [product, setProduct] = useState([]);
    const [size, setSize] = useState('');
    const [colorgold, setColorgold] = useState('');
    const [colorstone, setColorstone] = useState('');

    const location = useLocation();

    const id = location.pathname.split("/")[2];

    useEffect(() => {

        const fetchData = async () => {
            const resultProduct = await productApi.get(`/find/${id}`);
            setProduct(resultProduct.data);
        }

        fetchData();

    }, [id]);

    //add to cart
    const addToCartHandler = async () => {
        const existsItem = cart.cartItems.find((x) => x._id === product._id); //if it already exists in cart
        const quantity = existsItem ? existsItem.quantity + 1 : 1; // then quantity + 1 if not then 1

        ctxDispatch({
            type: 'ADD_TO_CART',
            payload: { ...product, quantity, size, colorgold, colorstone },
        });

        //this put if you will or not
        toast.success('¡.Ha Agregado Con Éxito El Producto Al Carrito.!');
        navigate('/cart');
    }

    const addToWishHandler = async () => {
        const existsItem = wish.wishItems.find((x) => x._id === product._id); //if it already exists in wish
        const quantity = existsItem ? existsItem.quantity : 1; // quantity is 1

        if (existsItem) {
            toast.error('Lo Siento. ¡.Ya Has Añadido El Producto A Tu Lista De Deseos.!');
            return; //not duplicate add product to wishlist
        }

        ctxDispatch({
            type: 'ADD_TO_WISH',
            payload: { ...product, quantity },
        });

        //this put if you will or not
        toast.success('¡.Ha Agregado Con Éxito El Producto A La Lista De Deseos.!');
        navigate('/wish');
    }

    const uint8 = new Uint32Array([product.price]);

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
                                    <FontAwesomeIcon icon={faBagShopping} />  PRODUCTO DETALLE.
                                </h1>
                                <hr className="my-4" />
                                <a href="/shop" rel="noopener noreferrer">
                                    <code className='badge rounded-pill badge-dark' style={{ fontSize: "15px" }}>
                                        <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> VOLVER.
                                    </code>
                                </a>
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
                                        <Link to="/shop" className="current" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faBagShopping} />  PRODUCTO DETALLE.
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
            <section className="bg-white py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
                        <aside>
                            <div className="grid gap-4">
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <tbody>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="grid grid-cols-1 gap-4">
                                                        <div className="space-x-2 overflow-auto text-left whitespace-nowrap" key={product._id}>
                                                            <a
                                                                className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer"
                                                            >
                                                                <img
                                                                    className="h-auto max-w-full rounded-lg"
                                                                    src={`${product.image}`}
                                                                    onClick={() => setSelectedImg(`${product.image}`)}
                                                                    alt={product.title}
                                                                    title={product.title}
                                                                    width="500"
                                                                    height="500"
                                                                />
                                                                {product.imagesOnes?.map((item, index) => (
                                                                    <img
                                                                        className="h-auto max-w-full rounded-lg"
                                                                        key={index}
                                                                        onClick={() => setSelectedImg(`${item.value}`)}
                                                                        src={`${item.value}`}
                                                                        alt={product.title}
                                                                        title={product.title}
                                                                        width="500"
                                                                        height="500"
                                                                    />
                                                                ))}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="border border-gray-200 shadow-sm p-1 text-center rounded mb-5" key={product._id}>
                                                        <img
                                                            className="h-auto max-w-full rounded-lg object-cover inline-block"
                                                            src={selectedImg || `${product.image}`}
                                                            alt={product.title}
                                                            title={product.title}
                                                            width="950"
                                                            height="950"
                                                        />
                                                    </div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </aside>
                        <main key={product._id}>
                            <h1 className="font-semibold text-5xl mb-4">
                                {product.title}
                            </h1>
                            <hr className="my-2" />
                            <ul className="mb-5">
                                <li className="mb-1">
                                    {" "}
                                    <b className="font-medium w-39 inline-block">
                                        <h1 className="font-semibold text-3xl mb-3">
                                            MEN&#218; 1 CATEGOR&#205;A. :*
                                        </h1>
                                    </b>
                                    <span className="text-gray-500">
                                        <span className="badge badge-secondary text-black" style={{ fontSize: "20px" }}>
                                            {product.categoryOptions}
                                        </span>
                                    </span>
                                </li>
                                <li className="mb-1">
                                    {" "}
                                    <b className="font-medium w-39 inline-block">
                                        <h1 className="font-semibold text-3xl mb-3">
                                            MEN&#218; 2 CATEGOR&#205;A. :*
                                        </h1>
                                    </b>
                                    <span className="text-gray-500">
                                        <span className="badge badge-secondary text-black" style={{ fontSize: "20px" }}>
                                            {product.subcategoryOptions}
                                        </span>
                                    </span>
                                </li>
                                <li className="mb-1">
                                    {" "}
                                    <b className="font-medium w-39 inline-block">
                                        <h1 className="font-semibold text-3xl mb-3">
                                            MEN&#218; 3 CATEGOR&#205;A. :*
                                        </h1>
                                    </b>
                                    <span className="text-gray-500">
                                        <span className="badge badge-secondary text-black" style={{ fontSize: "20px" }}>
                                            {product.tripletecategoryOptions}
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            <hr className="my-2" />
                            <div>
                                <p className="mb-4 font-semibold text-xl">
                                    <span className="badge badge-success text-black" style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
                                        Precio. :* {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                    </span>
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center space-x-2 mb-2">
                                <span className="text-green-500">
                                    <span className='badge badge-success text-black' style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
                                        {product.countInStock > 0 ? 'EN STOCK.' : 'AGOTADO.'}
                                    </span>
                                </span>
                            </div>
                            <hr className="my-2" />
                            <div>
                                <p className="mb-4 text-gray-500">
                                    <div className="pd-group">
                                        <div className="pd-otherAction">
                                            <div className="pd-size" style={{ textAlign: "justify" }}>
                                                <h1 className="font-semibold text-3xl mb-3">
                                                    Talla 📏. :*
                                                </h1>
                                                <div className="pd-sizeDiv">
                                                    {
                                                        product.sizesOptions?.map((size, index) => (
                                                            <>
                                                                <div>
                                                                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                            <div className="flex items-center pl-3">
                                                                                <input type="radio" onChange={(e) => setSize(e.target.value)} id={size.value} name={size.value} value={size.value} key={index} required defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                                                <label htmlFor={size.value} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" style={{ fontSize: "15px" }}>
                                                                                    {size.value}
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <hr className="my-2" />
                            <div>
                                <p className="mb-4 text-gray-500">
                                    <div className="pd-group">
                                        <div className="pd-otherAction">
                                            <div className="pd-color" style={{ textAlign: "justify" }}>
                                                <h1 className="font-semibold text-3xl mb-3">
                                                    Color De Oro 🖌️. :*
                                                </h1>
                                                <div className="pd-sizeDiv">
                                                    {
                                                        product.colorsgoldsOptions?.map((colorgold, index) => (
                                                            <>
                                                                <div>
                                                                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                            <div className="flex items-center pl-3">
                                                                                <input type="radio" onChange={(e) => setColorgold(e.target.value)} id={colorgold.value} name={colorgold.value} value={colorgold.value} key={index} required defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                                                <label htmlFor={colorgold.value} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" style={{ fontSize: "15px" }}>
                                                                                    {colorgold.value}
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <hr className="my-2" />
                            <div>
                                <p className="mb-4 text-gray-500">
                                    <div className="pd-group">
                                        <div className="pd-otherAction">
                                            <div className="pd-color" style={{ textAlign: "justify" }}>
                                                <h1 className="font-semibold text-3xl mb-3">
                                                    Color De Piedras 🖌️. :*
                                                </h1>
                                                <div className="pd-sizeDiv">
                                                    {
                                                        product.colorsstonesOptions?.map((colorstone, index) => (
                                                            <>
                                                                <div>
                                                                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                            <div className="flex items-center pl-3">
                                                                                <input type="radio" onChange={(e) => setColorstone(e.target.value)} id={colorstone.value} name={colorstone.value} value={colorstone.value} key={index} required defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                                                <label htmlFor={colorstone.value} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" style={{ fontSize: "15px" }}>
                                                                                    {colorstone.value}
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-5">
                                <button className="btn btn-transparent btn-semi-round" alt="Añadir A La Lista De Deseos." title='Añadir A La Lista De Deseos.' onClick={addToWishHandler}>
                                    <span className="fa fa-heart" /> A&#241;adir Lista De Deseos.
                                </button>
                                <button className="btn btn-transparent btn-semi-round" onClick={addToCartHandler}>
                                    <i className="fa fa-shopping-basket" /> A&#241;adir Al Carrito.
                                </button>
                            </div>
                            <div>
                                <p className="mb-4 text-gray-500">
                                    <div className="col-lg-12">
                                        <div className="single-product-page-content">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {/* Product Full Description Start */}
                                                    <div className="product-full-info-reviews">
                                                        {/* Single Product tab Menu */}
                                                        <nav className="nav" id="nav-tab">
                                                            <a className="active" id="description-tab" rel="noopener noreferrer" data-bs-toggle="tab" href="#description">
                                                                Descripci&#243;n. :*
                                                            </a>
                                                        </nav>
                                                        {/* Single Product tab Menu */}
                                                        {/* Single Product tab Content */}
                                                        <div className="tab-content" id="nav-tabContent">
                                                            <div className="tab-pane fade show active" id="description">
                                                                <p className="pd-desc" style={{ textAlign: "justify" }}>
                                                                    <strong>
                                                                        <FontAwesomeIcon icon={faBagShopping} /> Producto Detalle. :*
                                                                    </strong>
                                                                    <hr className="my-2" />
                                                                    {product.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/* Single Product tab Content */}
                                                    </div>
                                                    {/* Product Full Description End */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            {/*== Start Single Product Wrapper ==*/}
        </>
    );
};

export default ProductDetails;