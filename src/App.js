import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import Itemdetailcontainer from './components/Itemdetailcontainer/Itemdetailcontainer'
import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './components/Cart/Cart'
import MyProvider from './context/CartContext';
import Indexcontainer from './components/Indexcontainer/Indexcontainer'
import { Checkoutend } from './components/Checkout/Checkout';


function App() {
    return (
            <BrowserRouter>
                 <div className='app__container'>
                    <MyProvider>                      
                        <Header />
                        <Routes> 
                            <Route path="/" element={ < Indexcontainer />}/>
                            <Route path="/products" element={ < Itemlistcontainer />}/>
                            <Route path="/type/:type" element={ < Itemlistcontainer />}/>
                            <Route path="/producto/:id" element={< Itemdetailcontainer />}/>
                            <Route path="/cart" element={ <Cart/> } />
                            <Route path="/checkout" element={<Checkout/>}/>
                            <Route path="/checkout/:orderid" element={<Checkoutend/>}/>
                            <Route path="*" element={ <h1> 404: Page Not Found</h1> } />
                        </Routes>                  
                    </MyProvider>
                </div>
                <Footer/>
            </BrowserRouter>
    );
}

export default App;

