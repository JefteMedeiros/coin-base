import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}

export default Layout;