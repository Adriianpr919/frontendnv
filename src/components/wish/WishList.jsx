import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../../utils/Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'flowbite';

const WishList = () => {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wish: { wishItems } } = state;

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: 'REMOVE_FROM_WISH',
      payload: item,
    });
    toast.success('¡.Has Eliminado Con Éxito El Producto De La Lista De Deseos.!');
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
                  <i className="fa-solid fa-heart"></i> LISTA DE DESEOS.
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
                    <Link to="/wish" className="current" rel="noopener noreferrer">
                      <i className="fa-solid fa-heart"></i> LISTA DE DESEOS.
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
      <div id="wishlist-page-wrapper" className="page-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="pro-thumbnail">IMAGEN. :*</th>
                      <th className="pro-title">NOMBRE. :*</th>
                      <th className="pro-price">CATEGOR&#205;AS. :*</th>
                      <th className="pro-price">CANTIDAD. :*</th>
                      <th className="pro-subtotal">PRECIO. :*</th>
                      <th className="pro-remove">ACCI&#211;N. :*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      wishItems.length === 0 ? (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                          <span className="font-medium no-data" style={{ fontSize: "15px" }}>
                            ¡.NO Has Añadido Ning&#250;n Producto A La Lista De Deseos.!
                          </span>
                        </div>
                      ) : (
                        <>
                          {
                            wishItems.map((item, index) => (
                              <tr key={index}>
                                <td className="pro-thumbnail">
                                  <Link to={`/product/${item._id}`} rel="noopener noreferrer">
                                    <img
                                      src={item.image}
                                      className="card-img-top img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail"
                                      alt={item.title}
                                      title={item.title} />
                                  </Link>
                                </td>
                                <td className="pro-title">
                                  <span className='badge badge-secondary mb-2 text-black' style={{ fontSize: "15px" }}>
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
                                <td className="pro-price">
                                  <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                    {item.countInStock > 0 ? 'EN STOCK.' : 'AGOTADO.'}
                                  </span>
                                </td>
                                <td className="pro-price">
                                  <span>
                                    <em>
                                      <b style={{ color: "green", fontSize: "20px" }} className="badge badge-success mb-2">
                                        {(item.price).toLocaleString('es-CO', {
                                          style: 'currency',
                                          currency: 'COP',
                                        })}
                                      </b>
                                    </em>
                                  </span>
                                </td>
                                <td className="pro-remove">
                                  <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => removeItemHandler(item)}>
                                    <span style={{ fontSize: "20px" }} alt='Eliminar.' title='Eliminar.'>
                                      <i className="fa-solid fa-trash"></i>
                                    </span>
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;