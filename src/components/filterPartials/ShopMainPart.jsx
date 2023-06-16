/* eslint-disable jsx-a11y/anchor-is-valid */
//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'flowbite';
//////////////////////////////////////////////////////////////////////////////////
import Price from './Price';
import Search from './Search';
import Empty from './Empty';
//////////////////////////////////////////////////////////////////////////////////
import ShopProducts from '../products/ShopProducts';
//////////////////////////////////////////////////////////////////////////////////
import Category from './Category';
//////////////////////////////////////////////////////////////////////////////////
import { productApi } from '../../api/product/productApi';
import { categoryApi } from '../../api/category/categoryApi';
import { subcategoryApi } from '../../api/subcategory/subcategoryApi';
import { tripletecategoryApi } from '../../api/tripletecategory/tripletecategoryApi';
//////////////////////////////////////////////////////////////////////////////////

const ShopMainPart = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]); //default is empty, no Products
    const [category, setCategory] = useState([]); //default is empty, no Category
    const [subcategory, setSubcategory] = useState([]);    //default is empty, no Subcategory
    const [tripletecategory, setTripletecategory] = useState([]);    //default is empty, no Tripletecategory
    const [selectedPrice, setSelectedPrice] = useState([0, 9999000]); //range from 0 - 9999000

    const [list, setList] = useState(products) //get all products when fetch products

    const [inputSearch, setInputSearch] = useState(''); //for search is empty default
    const [resultsFound, setResultsFound] = useState(true);
    const [selectedCategory, setselectedCategory] = useState();
    const [selectedSubcategory, setselectedSubcategory] = useState();
    const [selectedTripletecategory, setselectedTripletecategory] = useState();

    const filterResult = (catItem) => {
        setselectedCategory(catItem);
    }

    const filterResult2 = (catItem) => {
        setselectedSubcategory(catItem);
    }

    const filterResult3 = (catItem) => {
        setselectedTripletecategory(catItem);
    }

    // change value for price
    const handleChangePrice = (value) => {
        setSelectedPrice(value);
    }

    useEffect(() => {
        //FIltering Products
        const applyFilters = () => {
            let updateProductList = products;

            // SubCategory Filters
            if (selectedCategory) {
                updateProductList = updateProductList.filter((item) => item.categoryOptions === selectedCategory);
            }

            // SubCategory Filters
            if (selectedSubcategory) {
                updateProductList = updateProductList.filter((item) => item.subcategoryOptions === selectedSubcategory);
            }

            // Tripletecategory Filters
            if (selectedTripletecategory) {
                updateProductList = updateProductList.filter((item) => item.tripletecategoryOptions === selectedTripletecategory);
            }

            // Price Filter
            const minPrice = selectedPrice[0]; //0 is index
            const maxPrice = selectedPrice[1]; //1 is index

            updateProductList = updateProductList.filter((item) => item.price >= minPrice && item.price <= maxPrice);

            // Search Filter
            if (inputSearch) {
                updateProductList = updateProductList.filter((item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1);
            }

            setList(updateProductList);

            !updateProductList.length ? setResultsFound(false) : setResultsFound(true);
        }
        applyFilters();
    }, [inputSearch, products, selectedCategory, selectedSubcategory, selectedTripletecategory, selectedPrice]);

    useEffect(() => {
        //fetch all products from db
        const fetchData = async () => {
            const resultProducts = await productApi.get('/all');

            const resultProductsData = resultProducts.data;

            //show first latest products
            const sortResultProductsData = resultProductsData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

            console.log(sortResultProductsData);
            setProducts(sortResultProductsData);

            //fetch all category
            const resultCategory = await categoryApi.get('/all');
            console.log(resultCategory.data);
            setCategory(resultCategory.data);

            //fetch all subcategory
            const resultSubcategory = await subcategoryApi.get('/all');
            console.log(resultSubcategory.data);
            setSubcategory(resultSubcategory.data);

            //fetch all Tripletecategory
            const resultTripletecategory = await tripletecategoryApi.get('/all');
            console.log(resultTripletecategory.data);
            setTripletecategory(resultTripletecategory.data);
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
                                    <FontAwesomeIcon icon="fa-solid fa-filter" /> Filtrar Por.
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
                                        <Link to="/shop" className="current" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon="fa-solid fa-filter" /> Filtrar Por.
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
            <section className="py-12">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <aside className="md:w-1/3 lg:w-1/4 px-4">
                            <a
                                className="mb-5 w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                                rel="noopener noreferrer" style={{ fontSize: "15px" }}
                            >
                                <span className="f-groupTitle badge badge-primary text-black" style={{ fontSize: "15px" }}>
                                    <FontAwesomeIcon icon="fa-solid fa-sliders" /> Filtrar Por. :*
                                </span>
                            </a>
                            <div className="md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
                                <h3 className="font-semibold mb-2">
                                    <span className="f-groupTitle badge badge-primary text-black" style={{ fontSize: "15px" }}>
                                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-plus" /> B&#250;scar. :*
                                    </span>
                                </h3>
                                <div className="grid md:grid-cols-1 gap-x-2">
                                    <div className="mb-4">
                                        <Search value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
                                <h3 className="font-semibold mb-2">
                                    <span className="f-groupTitle badge badge-success text-black" style={{ fontSize: "15px" }}>
                                        &#36; Precio. :*
                                    </span>
                                </h3>
                                <div className="grid md:grid-cols-1 gap-x-2">
                                    <div className="mb-4">
                                        <Price style={{ width: "90%" }} value={selectedPrice} changePrice={handleChangePrice} />
                                    </div>
                                </div>
                            </div>

                            <div className="md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">

                                <h3 className="font-semibold mb-2">
                                    <p style={{ fontSize: "15px" }}>
                                        <code className='hidden'>{id}</code>
                                    </p>
                                </h3>

                                <hr className="my-4" />

                                <ul className="space-y-1">
                                    <li>
                                        <label className="flex items-center">
                                            <Category category={category} filterResult={filterResult} subcategory={subcategory} filterResult2={filterResult2} tripletecategory={tripletecategory} filterResult3={filterResult3} key={id} />
                                        </label>
                                    </li>
                                </ul>

                                <hr className="my-4" />

                                <h3 className="font-semibold mb-2">
                                    <span className="f-groupTitle badge badge-primary text-black" style={{ fontSize: "15px" }}>
                                        <FontAwesomeIcon icon="fa-solid fa-repeat" /> Acc&#237;on. :*
                                    </span>
                                </h3>

                                <ul className="space-y-1">
                                    <li>
                                        <label className="flex items-center">
                                            <a href="/shop" rel="noopener noreferrer" className="f-groupTitle">
                                                <code className='badge rounded-pill badge-dark f-groupTitle' style={{ fontSize: "15px" }}>
                                                    <FontAwesomeIcon icon="fa-solid fa-repeat" /> Cargar La P&#225;gina. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "15px" }} />
                                                </code>
                                            </a>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                        <main className="md:w-2/3 lg:w-3/4 px-3">
                            <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
                                <div className="flex flex-col md:flex-row">
                                    {resultsFound ? (<ShopProducts list={list} />) : (<Empty />)}
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopMainPart;