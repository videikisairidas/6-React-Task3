import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';


const App = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

export default App;

