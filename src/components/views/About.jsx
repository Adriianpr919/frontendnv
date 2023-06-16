/* eslint-disable jsx-a11y/anchor-is-valid */
//import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'flowbite';
import { aboutApi } from '../../api/about/aboutApi';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const resultAbout = await aboutApi.get('/all');
      console.log(resultAbout.data);
      setAbouts(resultAbout.data);
    }

    fetchData();

  }, []);

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
                  <FontAwesomeIcon icon="fa-solid fa-gear" /> QUI&#201;NES SOMOS. :*
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
                    <Link to="#!" className="current" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-gear" /> QUI&#201;NES SOMOS. :*
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
      <div id="about-page-wrapper" className="page-padding pb-0">
        <div className="container">
          {/* About Page Content Start */}
          <div className="row">
            {/* About Text Start */}
            <div className="col-lg-12 order-last order-lg-first">
              <div className="about-text-wrap">
                <p style={{ textAlign: "justify" }} lang="es">
                  {
                    abouts.length === 0 ? (
                      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium no-data" style={{ fontSize: "15px" }}>
                          ¡.Actualmente NO Hay Acerca De.!
                        </span>
                      </div>
                    ) : (
                      <div>
                        {abouts &&
                          abouts?.map((about, index) => (
                            <div>
                              <section className="bg-white dark:bg-gray-900" key={index}>
                                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                  <div className="mr-auto place-self-center lg:col-span-7">
                                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                                      <span>
                                        {about.titleOne}
                                      </span>
                                    </h1>
                                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                      <span>
                                        {about.descriptionOne}
                                      </span>
                                    </p>
                                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                                      <span>
                                        {about.titleTwo}
                                      </span>
                                    </h1>
                                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                      <span>
                                        {about.descriptionTwo}
                                      </span>
                                    </p>
                                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                                      <span>
                                        {about.titleThree}
                                      </span>
                                    </h1>
                                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                      <span>
                                        {about.descriptionThree}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="lg:mt-0 lg:col-span-5 lg:flex">
                                    <img
                                      src={about.imageOne}
                                      className="img-responsive img-rounded mx-auto d-block img-thumbnail rounded-pill"
                                      alt={about.titleOne}
                                      title={about.titleOne} />
                                  </div>
                                </div>
                              </section>
                              <section className="bg-white dark:bg-gray-900">
                                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                                  <img
                                    src={about.imageFour}
                                    className="img-responsive img-rounded mx-auto d-block img-thumbnail rounded-pill"
                                    alt={about.titleFour}
                                    title={about.titleFour} />
                                  <div className="mt-4 md:mt-0">
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                      {about.titleFour}
                                    </h2>
                                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                                      <span>
                                        {about.descriptionFour}
                                      </span>
                                      <section className="bg-white dark:bg-gray-900">
                                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                                          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                              {about.titleFive}
                                            </h2>
                                            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                                              Fundadoras.
                                            </p>
                                          </div>
                                          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                              <a rel="noopener noreferrer">
                                                <div>
                                                  <img
                                                    src={about.imageMother}
                                                    className="img-responsive img-rounded mx-auto d-block img-thumbnail rounded-pill"
                                                    alt={about.titleFive}
                                                    title={about.titleFive} />
                                                </div>
                                              </a>
                                              <div className="p-5">
                                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                  <span>
                                                    <code>@nuryval10</code>
                                                  </span>
                                                </h3>
                                                <ul className="flex space-x-4 sm:mt-0">
                                                  <li>
                                                    {/* Instagram */}
                                                    <a className="text-reset" style={{ fontSize: "25px" }} href="https://www.instagram.com/nuryval10/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                                      <i className="fab fa-instagram" style={{ fontSize: "25px", color: "#ac2bac" }} />
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                              <a rel="noopener noreferrer">
                                                <div>
                                                  <img
                                                    src={about.imageDaughter}
                                                    className="img-responsive img-rounded mx-auto d-block img-thumbnail rounded-pill"
                                                    alt={about.titleFive}
                                                    title={about.titleFive} />
                                                </div>
                                              </a>
                                              <div className="p-5">
                                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                  <span>
                                                    <code>@marianatamayov</code>
                                                  </span>
                                                </h3>
                                                <ul className="flex space-x-4 sm:mt-0">
                                                  <li>
                                                    {/* Instagram */}
                                                    <a className="text-reset" style={{ fontSize: "25px" }} href="https://www.instagram.com/marianatamayov/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                                      <i className="fab fa-instagram" style={{ fontSize: "25px", color: "#ac2bac" }} />
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </p>
                                  </div>
                                </div>
                              </section>
                            </div>
                          ))
                        }
                      </div>
                    )
                  }
                </p>
              </div>
            </div>
            {/* About Text End */}
          </div>
          {/* About Page Content End */}
        </div>
      </div>
    </>
  );
};

export default About;
