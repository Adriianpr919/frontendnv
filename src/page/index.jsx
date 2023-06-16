import React from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////
import Home from '../features/Home/Home';
///////////////////////////////////////////////////////////////////////////////////////////////
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
///////////////////////////////////////////////////////////////////////////////////////////////
import AboutInfo from '../features/Layout/AboutInfo';
///////////////////////////////////////////////////////////////////////////////////////////////
import FaqInfo from '../features/views/FaqInfo';
///////////////////////////////////////////////////////////////////////////////////////////////
import Location from '../features/views/Location';
///////////////////////////////////////////////////////////////////////////////////////////////
import OptionsOne from '../features/views/OptionsOne';
import OptionsTwo from '../features/views/OptionsTwo';
///////////////////////////////////////////////////////////////////////////////////////////////
import Shop from '../features/products/Shop';
///////////////////////////////////////////////////////////////////////////////////////////////
import Login from '../features/Login/Login';
import Register from '../features/Login/Register';
import Account from '../features/Login/Account';
///////////////////////////////////////////////////////////////////////////////////////////////
import Wish from '../features/wish/Wish';
///////////////////////////////////////////////////////////////////////////////////////////////
import Cart from '../features/shopping/Cart';
///////////////////////////////////////////////////////////////////////////////////////////////
import Blog from '../features/blogs/Blog';
import BlogItem from '../components/blogs/BlogItem';
///////////////////////////////////////////////////////////////////////////////////////////////
import Product from '../features/products/Product';
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
import Order from '../features/orders/Order';
///////////////////////////////////////////////////////////////////////////////////////////////
import Message from '../features/messages/Message';
///////////////////////////////////////////////////////////////////////////////////////////////
import Page404 from '../components/page404/page404';
///////////////////////////////////////////////////////////////////////////////////////////////

const index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/abouts' element={<AboutInfo />} />
          <Route exact path='/faq' element={<FaqInfo />} />
          <Route exact path='/location' element={<Location />} />
          <Route exact path='/options1' element={<OptionsOne />} />
          <Route exact path='/options2' element={<OptionsTwo />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/shop/:id' element={<Shop />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/message' element={<Message />} />
          <Route exact path='/wish' element={<Wish />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/account' element={<Account />} />
          <Route exact path='/blogs' element={<Blog />} />
          <Route exact path='/blogs/:id' element={<BlogItem />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/order/:id' element={<Order />} />
          {/*-----------------------------------------------*/}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default index;