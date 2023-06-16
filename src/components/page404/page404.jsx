import React from 'react';
import 'flowbite';

const page404 = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            Error HTTP: - .404.
          </h1>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
              Lo sentimos, no podemos encontrar esa p&#225;gina.<br /> Encontrar&#225; mucho para explorar<br /> en la p&#225;gina de inicio.
            </span>
          </p>
          <a href="/" rel="noopener noreferrer" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
            <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
              <i className="fa-solid fa-globe"></i> VOLVER LA P&#193;GINA PRINCIPAL.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default page404;