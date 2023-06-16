import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'flowbite';
import { blogApi } from '../../api/blog/blogApi';

const HomeBlog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const resultBlog = await blogApi.get('/all');
            console.log(resultBlog.data);
            setBlogs(resultBlog.data);
        }

        fetchData();

    }, []);

    return (
        <>
            <section id="blog-section-wrapper">
                <div className="container" id='blog'>
                    {/* Start Section Title Area */}
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="section-title-wrap">
                                <h2>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-info" /> LO &#218;LTIMO DE NUESTRO BLOG.
                                </h2>
                                <p style={{ textAlign: "justify" }}>
                                    ¿Quieres presentar las publicaciones de la mejor manera para resaltar los momentos interesantes de tu blog? ¡Enf&#243;cate en las &#250;ltimas noticias!
                                </p>
                                <div className="hb-col" style={{ marginTop: '20px' }}>
                                    <a href="/blogs" rel='noopener noreferrer' className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' style={{ fontSize: "20px" }}>
                                        Ver M&#225;s. <FontAwesomeIcon icon={faEye} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Section Title Area */}
                    {/* Start Blog Content */}
                    <div>
                        {
                            blogs.length === 0 ? (
                                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <span className="font-medium no-data" style={{ fontSize: "15px" }}>
                                        ¡.Actualmente NO Hay Blogs.!
                                    </span>
                                </div>
                            ) : (
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
                                                    blogs.slice(-4).map((blog, index) => (
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
                                                    ))}
                                            </>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeBlog;