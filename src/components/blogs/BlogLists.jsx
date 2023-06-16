//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'flowbite';
import { blogApi } from '../../api/blog/blogApi';

const BlogLists = () => {

    const [blogs, setBlogs] = useState([]);

    // for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const blogsPerPage = 10;
    const pagesVisited = pageNumber * blogsPerPage;

    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {

        const fetchData = async () => {
            const resultBlog = await blogApi.get('/all');
            // i want the latest blogs to show

            const resultBlogData = resultBlog.data;

            const sortResultBlogData = resultBlogData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

            console.log(sortResultBlogData);
            setBlogs(sortResultBlogData);
        }

        fetchData();

    }, []);

    return (
        <>
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
                                        <FontAwesomeIcon icon={faInfoCircle} />  LO &#218;LTIMO DE NUESTRO BLOG.
                                    </h1>
                                    <hr className="my-4" />
                                    <a href="/blogs" rel="noopener noreferrer">
                                        <code className='badge rounded-pill badge-dark' style={{ fontSize: "15px" }}>
                                            <FontAwesomeIcon icon="fa-solid fa-repeat" /> Cargar La P&#225;gina. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "15px" }} />
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
                                            <Link to="/blogs" className="current" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faInfoCircle} />  BLOG.
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
                                                {
                                                    blogs.length === 0 ? (
                                                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                            <span className="font-medium no-data" style={{ fontSize: "15px" }}>
                                                                ¡.Actualmente NO Hay Blogs.!
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
                                                                                TITULO.
                                                                            </th>
                                                                            <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                                                                ADMIN.
                                                                            </th>
                                                                            <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                                                                FECHA.
                                                                            </th>
                                                                            <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                                                                COMENTARIOS.
                                                                            </th>
                                                                            <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                                                                                VER DETALLE.
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <>
                                                                            {
                                                                                blogs.slice(pagesVisited, pagesVisited + blogsPerPage).map((blog, index) => (
                                                                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                                                            <Link to={`/blogs/${blog._id}`} rel="noopener noreferrer">
                                                                                                <img
                                                                                                    src={blog.image}
                                                                                                    className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                                                                                                    width={200}
                                                                                                    height={200}
                                                                                                    alt={blog.title}
                                                                                                    title={blog.title} />
                                                                                            </Link>
                                                                                        </th>
                                                                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                                                            <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                                                                                {blog.title}
                                                                                            </span>
                                                                                        </td>
                                                                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                                                            <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                                                                                {blog.author}
                                                                                            </span>
                                                                                        </td>
                                                                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                                                            <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                                                                                {blog.createdAt.slice(0, 10)}
                                                                                            </span>
                                                                                        </td>
                                                                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                                                            <p className='badge badge-info mb-2 text-black' style={{ textAlign: "justify", fontSize: "15px" }}>
                                                                                                {blog.description}
                                                                                            </p>
                                                                                        </td>
                                                                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                                                            <Link to={`/blogs/${blog._id}`} rel="noopener noreferrer">
                                                                                                <span className='badge badge-secondary mb-2 text-black' style={{ fontSize: "15px" }}>
                                                                                                    <FontAwesomeIcon icon={faEye} /> VER DETALLE.
                                                                                                </span>
                                                                                            </Link>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))
                                                                            }
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
                            {/* End Shop Page Content */}
                        </div>
                    </div>
                </div>
                {/*== End Shop Page Wrapper ==*/}
            </>
        </>
    );
};

export default BlogLists;