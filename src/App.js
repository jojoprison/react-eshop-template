import './css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/responsive.css';
import './css/styles.css';
// TODO мы изначально писали на 4.3 версии бустрапа, этот - 5.1; из-за чего не так что-то отрисовывается
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from './components/Nav'
import Home from "./pages/Home";
import Header from "./components/Header";
import {Footer} from "./pages/Footer";
import {Catalog} from "./components/Catalog";
import ProductDetail from "./components/products/ProductDetail";
import {Contacts} from "./components/Contacts";
import './App.css';
import CatalogueFilters from "./components/products/CatalogueFilters";
import {ContactUs} from "./components/ContactUs";
import ShoppingCart from "./components/ShoppingCart";
import {CartProvider} from 'react-use-cart';
import OrderPage from "./components/OrderPage";
import Error404 from "./components/Error404";
import {ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [showButton, setShowButton] = useState(false);

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
                        <Route path="/table" element={<CatalogueFilters/>}/>
                        <Route path="/error" element={<Error404/>}/>
                        <Route path="/catalog" element={<Catalog/>}/>
                        <Route path="/filters" element={<CatalogueFilters/>}/>
                        <Route path="/contact" element={<ContactUs/>}/>
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

                    <ToastContainer
                        position="top-left"
                        autoClose={1000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                        theme="colored"
                        limit={2}
                        transition={Zoom}
                    />
                </div>
            </BrowserRouter>

        </CartProvider>
    );
}

export default App;
