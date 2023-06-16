import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import 'flowbite';

const ShopProducts = ({ list }) => {

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const blogsPerPage = 21;
  const pagesVisited = pageNumber * blogsPerPage;

  const pageCount = Math.ceil(list.length / blogsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <>
      {/*== Start Shop Page Wrapper ==*/}
      <div id="shop-page-wrapper" className="page-padding">
        <div className="container">
          <div className="row">
            {/* Start Shop Page Content */}
            <div className="col-lg-12 order-first order-lg-last">
              <div className="shop-page-content-wrap">
                <div className="shop-page-products-wrap">
                  <div className="products-wrapper">
                    <div className="row">
                      <div>
                        {
                          list.length === 0 ? (
                            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                              <span className="font-medium no-data" style={{ fontSize: "15px" }}>
                                ¡.Actualmente NO Hay Productos.!
                              </span>
                            </div>
                          ) : (
                            <>
                              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                      <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                        IMAGEN.
                                      </th>
                                      <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                        NOMBRE.
                                      </th>
                                      <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                        CATEGOR&#205;AS.
                                      </th>
                                      <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                        CANTIDAD.
                                      </th>
                                      <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                        PRECIO.
                                      </th>
                                      <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                        VER PRODUCTO.
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <>
                                      {
                                        list.slice(pagesVisited, pagesVisited + blogsPerPage).map((product, index) => (
                                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                              <Link to={`/product/${product._id}`} rel="noopener noreferrer">
                                                <img
                                                  src={product.image}
                                                  className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                                                  width={200}
                                                  height={200}
                                                  alt={product.title}
                                                  title={product.title} />
                                              </Link>
                                            </th>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                              <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                                {product.title}
                                              </span>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                              <div className="pl-3">
                                                <div className="text-base font-semibold">
                                                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                                    {product.categoryOptions}
                                                  </span>
                                                </div>
                                                <div className="font-normal text-gray-500">
                                                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                                    {product.subcategoryOptions}
                                                  </span>
                                                </div>
                                                <div className="font-normal text-gray-500">
                                                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                                    {product.tripletecategoryOptions}
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                              <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                                {product.countInStock > 0 ? 'EN STOCK.' : 'AGOTADO.'}
                                              </span>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                              <span className="price">
                                                <em>
                                                  <b style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                    {(product.price).toLocaleString('es-CO', {
                                                      style: 'currency',
                                                      currency: 'COP',
                                                    })}
                                                  </b>
                                                </em>
                                              </span>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                              <Link to={`/product/${product._id}`} rel="noopener noreferrer">
                                                <span className='badge badge-secondary mb-2 text-black' style={{ fontSize: "15px" }}>
                                                  <FontAwesomeIcon icon={faEye} /> VER PRODUCTO.
                                                </span>
                                              </Link>
                                            </td>
                                          </tr>
                                        ))}
                                    </>
                                  </tbody>
                                </table>
                              </div>
                              <ReactPaginate className='filter-pagination'
                                previousLabel={"<"}
                                nextLabel={">"}
                                breakLabel={"..."}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick}
                                pageClassName={"pagi-item"}
                                pageLinkClassName={"pagi-link"}
                                activeClassName={"pagi-active"}
                                activeLinkClassName={"pagi-active-link"}
                                previousClassName={"pagi-item"}
                                previousLinkClassName={"pagi-link"}
                                nextClassName={"pagi-item"}
                                nextLinkClassName={"pagi-link"}
                                breakClassName={"pagi-item"}
                                breakLinkClassName={"pagi-link"}
                                disabledClassName={"disabledPagi"}
                              />
                            </>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Shop Page Content */}
          </div>
        </div>
      </div>
      {/*== End Shop Page Wrapper ==*/}
    </>
  );
};

export default ShopProducts;