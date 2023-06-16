/* eslint-disable jsx-a11y/anchor-is-valid */
//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import 'flowbite';
import { blogApi } from '../../api/blog/blogApi';

const BlogDetails = () => {

    const [blog, setBlog] = useState([]);

    const location = useLocation();
    //console.log(location);

    const id = location.pathname.split("/")[2];
    console.log(id);

    useEffect(() => {

        const fetchData = async () => {
            const resultBlog = await blogApi.get(`/find/${id}`);
            console.log(resultBlog.data);
            setBlog(resultBlog.data);
        }

        fetchData();

    }, [id]);

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
                                    <FontAwesomeIcon icon={faInfoCircle} />  BLOG DETALLE.
                                </h1>
                                <hr className="my-4" />
                                <a href="/blogs" rel="noopener noreferrer">
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
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert" key={blog._id}>
                        <header className="mb-4 lg:mb-6 not-format">
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                {blog.title}
                            </h1>
                        </header>
                        <figure>
                            <img
                                src={blog.image}
                                className="img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail"
                                width={300}
                                height={300}
                                alt={blog.title}
                                title={blog.title} />
                            <figcaption style={{ textAlign: "center" }}>{blog.title}</figcaption>
                        </figure>
                        <div className="post-meta">
                            <div className="post-info">
                                <a rel="noopener noreferrer">
                                    <FontAwesomeIcon icon="fa-solid fa-user-tie" /> <span>{blog.author}</span>
                                </a>
                                <a rel="noopener noreferrer">
                                    <FontAwesomeIcon icon="fa-solid fa-calendar-days" /> <span>{blog.createdAt?.slice(0, 10)}</span>
                                </a>
                            </div>
                        </div>
                        <blockquote>
                            <div>
                                <p className="blog-desc" style={{ textAlign: "justify" }}>
                                    <span>
                                        {blog.description}
                                    </span>
                                </p>
                            </div>
                        </blockquote>
                        <div>
                            <p>
                                <div className="post-footer d-block d-sm-flex justify-content-sm-between align-items-center">
                                    <ul className="tags">
                                        <li>
                                            <a rel="noopener noreferrer">
                                                <FontAwesomeIcon icon="fa-solid fa-user-tie" /> <span>{blog.author}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer">
                                                <FontAwesomeIcon icon="fa-solid fa-calendar-days" /> <span>
                                                    {blog.createdAt?.slice(0, 10)}
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="post-share mt-3 mt-sm-0">
                                        <a className="text-reset" style={{ fontSize: "25px" }} href="https://www.instagram.com/nuryvalenzuelajoyeria/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                            <i className="fab fa-instagram" style={{ fontSize: "25px", color: "#ac2bac" }} />
                                        </a>
                                        <a className="text-reset" style={{ fontSize: "25px" }} href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                            <i className="fab fa-whatsapp" style={{ fontSize: "25px", color: "#008000" }} />
                                        </a>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </article>
                </div>
            </main>
        </>
    );
};

export default BlogDetails;