import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import MessageAdd from '../../components/messages/MessageAdd';
import Scroll from '../../components/widget/Scroll';

const Message = () => {
  return (
    <>
      <Header />
      <MessageAdd />
      <Footer />
      <Scroll />
    </>
  );
}

export default Message;