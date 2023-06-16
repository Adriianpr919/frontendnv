/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightToBracket, faPowerOff, faHeart, faCartShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { Store } from '../../utils/Store';
import ShellMenu from './NavbarMenu/ShellMenu';
import Logo from './assets/img/logonv.png';
import 'flowbite';
import BannerHome from './NavbarMenu/BannerHome';

const Header = () => {

    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, wish } = state;

    const cartItemsLength = cart.cartItems.reduce((a, c) => a + c.quantity, 0);

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const logoutHandler = () => {
        localStorage.removeItem('userInfo');
        toast.success('¡.Has Terminado Tu Sesion Satisfactoriamente.!');
        navigate('/');
    }

    return (
        <>
            <BannerHome />
            <div className="b-example-divider" style={{ marginTop: '0%' }}></div>
            <header id="header-area">
                <nav
                    className="bg-white border-gray-200 dark:bg-gray-900">
                    <div
                        className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <a
                            rel="noopener noreferrer"
                            className="flex items-center">
                            <img
                                src={Logo}
                                className="site_logo mr-3"
                                width={200}
                                height={200}
                                alt="Nury Valenzuela&#174; Joyer&iacute;a"
                                title="Nury Valenzuela&#174; Joyer&iacute;a"
                                loading="lazy"
                                lang="es" />
                            <span
                                className="self-center text-12xl font-semibold whitespace-nowrap dark:text-white">
                                <ShellMenu />
                            </span>
                        </a>
                        <div
                            className="flex items-center" style={{ marginTop: '5%' }}>
                            {
                                userInfo && (
                                    <div
                                        className="mini-cart-wrap">
                                        <Link
                                            to="/account"
                                            rel="noopener noreferrer">
                                            <span
                                                className='mr-6 text-sm  text-white-500 dark:text-white hover:underline badge badge-pill badge-danger bg-danger border border-secondary ms-1 rounded-pill mb-2'
                                                alt="MI PERFIL."
                                                title='MI PERFIL.'
                                                style={{ fontSize: "15px" }}
                                                lang="es">
                                                <FontAwesomeIcon
                                                    icon={faUserCircle}
                                                    style={{ fontSize: "15px" }} />
                                            </span>
                                            <span
                                                className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
                                                style={{ fontSize: "15px" }}>
                                            </span>
                                        </Link>
                                    </div>
                                )
                            }
                            {
                                userInfo ? (
                                    <>
                                        <div
                                            className="mini-cart-wrap">
                                            <Link
                                                to="/"
                                                rel="noopener noreferrer"
                                                className="hover:underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                <span
                                                    className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill mb-2'
                                                    alt='Cerrar Sesi&#243;n.'
                                                    title='Cerrar Sesi&#243;n.'
                                                    lang="es"
                                                    style={{ fontSize: "15px" }}
                                                    onClick={logoutHandler}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faPowerOff}
                                                        aria-hidden="true"
                                                        style={{ fontSize: "15px" }} />
                                                </span>
                                            </Link>
                                        </div>
                                        <div
                                            className="mini-cart-wrap">
                                            <Link
                                                to="/wish"
                                                rel="noopener noreferrer"
                                                className="text-sm  text-gray-600 dark:text-gray-500 hover:underline text-reset me-3">
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                    style={{ fontSize: "15px" }} />
                                                <span
                                                    className='badge rounded-pill badge-notification bg-danger count mb-2'
                                                    lang="es"
                                                    style={{ fontSize: "15px" }}
                                                >
                                                    {wish.wishItems.length}
                                                </span>
                                            </Link>
                                        </div>
                                        <div
                                            className="mini-cart-wrap">
                                            <Link
                                                to="/cart"
                                                rel="noopener noreferrer"
                                                className="text-sm  text-gray-600 dark:text-gray-500 hover:underline text-reset me-3">
                                                <FontAwesomeIcon
                                                    icon={faCartShopping}
                                                    style={{ fontSize: "15px" }} />
                                                {cartItemsLength ? (<span
                                                    className="badge rounded-pill badge-notification bg-danger count mb-2"
                                                    style={{ fontSize: "15px" }}>
                                                    {cartItemsLength}
                                                </span>) : (<span
                                                    className="badge rounded-pill badge-notification bg-danger count mb-2"
                                                    lang="es"
                                                    style={{ fontSize: "15px" }}>
                                                    0
                                                </span>)}
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to="/login"
                                        rel="noopener noreferrer"
                                        className="text-sm  text-gray-600 dark:text-gray-500 hover:underline text-reset me-3">
                                        <span
                                            className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill mb-2'
                                            style={{ fontSize: "15px" }}
                                            lang="es">
                                            <FontAwesomeIcon
                                                icon={faRightToBracket}
                                                style={{ fontSize: "15px" }} /> Ingreso &#124; Registro.
                                        </span>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </nav>
                <nav
                    className="bg-gray-50 dark:bg-gray-700">
                    <div
                        className="max-w-screen-xl px-4 py-3 mx-auto">
                        <div
                            className="flex items-center">
                            <ul
                                className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                                <li>
                                    <Link
                                        to="/"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: "15px" }}
                                        className="text-gray-900 dark:text-white hover:underline" aria-current="page">
                                        Inicio.
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/shop"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: "15px" }}
                                        className="text-gray-900 dark:text-white hover:underline">
                                        Filtrar Por.
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/blogs"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: "15px" }}
                                        className="text-gray-900 dark:text-white hover:underline">
                                        Ver Blogs.
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#FooterOption"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: "15px" }}
                                        className="text-gray-900 dark:text-white hover:underline">
                                        &Aacute;rea Legal. <FontAwesomeIcon icon={faChevronDown} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;