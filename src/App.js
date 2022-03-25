import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from './components/Nav'
import {Table} from "./components/Table";
import Home from "./pages/Home";
import Header from "./components/Header";
import {Footer} from "./pages/Footer";
import {Catalog} from "./components/Catalog";
import ProductDetail from "./components/ProductDetail";
import {Contacts} from "./components/Contacts";
import './App.css';
import CatalogueFilters from "./components/products/CatalogueFilters";
import {ContactUs} from "./components/ContactUs";
import ShoppingCart from "./components/ShoppingCart";
import {CartProvider, useCart} from 'react-use-cart';
import OrderPage from "./components/OrderPage";
import Modal from "./Modal/Modal";
import Error404 from "./components/Error404";

function App() {
    const [showButton, setShowButton] = useState(false);
    const [modalActive, setModalActive] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // TODO вот тут эта ебатория проверяет на скок мы скрольнули экран И НЕ СКРЫВАЕТ КНОПКУ ОБРАТНО СУКА
            // TODO мб пробнуть screenY хз
            if (window.screenTop > 20) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <CartProvider>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Navigation/>

                    <Routes>
                        <Route path="/" element={<Home/>} exact/>
                        <Route path="/table" element={<Table/>}/>
                        <Route path="/error" element={<Error404/>}/>
                        <Route path="/catalog" element={<Catalog/>}/>
                        <Route path="/filters" element={<CatalogueFilters/>}/>
                        <Route path="/contact" element={<ContactUs/>}/>
                        {/* TODO добавить юрлу когда вмерджим с веткой карточки продукта */}
                        {/*<Route path="/product/tmp" element={<ProductTemplate/>}/>*/}
                        <Route path="/basket" element={<ShoppingCart/>}/>
                        <Route path="/product/:id" element={<ProductDetail/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/ordering" element={<OrderPage/>}/>
                    </Routes>


                    {showButton && (
                        <button onClick={scrollToTop} className='back-to-top'>
                            &#8679;
                        </button>
                    )}

                    <Footer/>
                    {/*<Modal active={modalActive} setActive={setModalActive}>*/}
                    {/*    <h5>Товар успешно добавлен в корзину!</h5>*/}
                    {/*</Modal>*/}
                </div>
            </BrowserRouter>

        </CartProvider>
    );
}

export default App;
