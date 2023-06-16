/* eslint-disable jsx-a11y/anchor-is-valid */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
///////////////////////////////////////////////////////////////////////////////////////////////
import { Swiper, SwiperSlide } from "swiper/react";
// import styles bundle
import 'swiper/css/bundle';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
///////////////////////////////////////////////////////////////////////////////////////////////
import Carousel from 'react-bootstrap/Carousel';
///////////////////////////////////////////////////////////////////////////////////////////////
import '../../style/BannerSlider.css';
///////////////////////////////////////////////////////////////////////////////////////////////
import 'flowbite';
import { bannerApi } from '../../api/banner/bannerApi';

const Intro = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [banners, setBanners] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const resultBanner = await bannerApi.get('/all');
      console.log(resultBanner.data);
      setBanners(resultBanner.data);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="b-example-divider" style={{ marginTop: '0%' }}></div>
      {
        banners.length === 0 ? (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium no-data" style={{ fontSize: "15px" }}>
              ¡.Actualmente NO Hay Carrusel Para Deslizarse.!
            </span>
          </div>
        ) : (
          <>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              grabCursor={true}
              autoplay={{
                delay: 9900,
                disableOnInteraction: false,
              }}
              pagination={{
                type: "progressbar",
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Mousewheel, Keyboard, Autoplay]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              mousewheel={true}
              keyboard={true}
              cssMode={true}
              className="mySwiper"
            >
              {banners.map((banner, index) => (
                <SwiperSlide
                  key={index}
                  className='image'
                  style={{ backgroundColor: '#bdc3c787' }}>
                  <a rel="noopener noreferrer" className="flex">
                    <div>
                      {
                        banner.code ? banner.code :
                          <img
                            src={banner.image}
                            className='d-block w-100'
                            height={700}
                            width={600}
                            alt={banner.title}
                            title={banner.title} />
                      }
                    </div>
                  </a>
                  <Carousel.Caption>
                    <p>
                      <h1 className="mb-3">
                        <span
                          className="special"
                          style={{
                            textAlign: "center",
                            color: "white",
                            borderRadius: "20px 20px",
                            padding: "2px 4px",
                            backgroundColor: 'rgb(0 0 0 / 12%)'
                          }}>
                          {banner.title}
                        </span>
                      </h1>
                      <h3 className="mb-3">
                        <span
                          className="badge badge-secondary"
                          style={{
                            textAlign: "center",
                            color: "white",
                            borderRadius: "20px 20px",
                            padding: "2px 4px",
                            backgroundColor: 'rgb(0 0 0 / 12%)'
                          }}>
                          {banner.description}
                        </span>
                      </h3>
                      <Link
                        to="/shop"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-lg m-2"
                        role="button">
                        Ver Tienda.
                      </Link>
                      <a
                        href="#blog"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-lg m-2"
                        role="button">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </a>
                    </p>
                  </Carousel.Caption>
                </SwiperSlide>
              ))}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </>  //only max latest banner
        )
      }
    </>
  );
};

export default Intro;