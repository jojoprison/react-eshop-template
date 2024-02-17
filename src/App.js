import './css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/responsive.css';
import './css/styles.css';
// TODO мы изначально писали на 4.3 версии бустрапа, этот - 5.1; из-за чего не так что-то отрисовывается
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import Navigation from './components/Nav'
import Home from "./pages/Home";
import Header from "./components/Header";
import {Footer} from "./pages/Footer";
import ProductDetail from "./components/products/ProductDetail";
import {Contacts} from "./pages/Contacts";
import './App.css';
import CatalogTemplate from "./components/products/CatalogTemplate";
import {ContactUs} from "./components/ContactUs";
import ShoppingCart from "./pages/ShoppingCart";
import {CartProvider} from 'react-use-cart';
import OrderPage from "./pages/OrderPage";
import Error404 from "./pages/Error404";
import {ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Tables from "./components/products/typed/Tables";
import Chairs from "./components/products/typed/Chairs";
import Drawers from "./components/products/typed/Drawers";
import Stands from "./components/products/typed/Stands";
import Racks from "./components/products/typed/Racks";
import Accessories from "./components/products/typed/Accessories";
import AllProducts from "./components/products/typed/AllProducts";
import Authorization from "./components/Authorization";
import {AuthChecker} from "./components/auth/AuthChecker";
import { ModalAuth } from "./components/auth/ModalAuth";


function App() {
    const [showButton, setShowButton] = useState(false);

    const [modal, setModal] = useState(false);

    const [authToken, setAuthToken] = useState(() =>
        JSON.parse(localStorage.getItem("authToken"))
    );

    const authUser = (tokenJWT) => {
        // TODO запихиваем в локальное хранилище, корзина работает так же (можно в сессию/куки)
        localStorage.setItem("authToken", JSON.stringify(tokenJWT));
        setAuthToken(tokenJWT)
    }

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
                    {/*<Header/>*/}
                    <Header setModal={setModal} modal={modal} authToken={authToken} setAuthToken={setAuthToken}
                            authUser={authUser}/>

                    <Navigation/>

                    <Routes>
                        <Route path="/login" element={<Authorization/>}/>
                        {/*<Route path="/login" element={<ModalAuth/>}/>*/}
                        {/*<AuthChecker path="/" authToken={authToken} Component={Home}/>*/}
                        {/* TODO не юзаем этот компонент, мб избавиться */}
                        <Route path="/contact" element={<ModalAuth/>}/>
                        <Route path="/basket" element={<ShoppingCart/>}/>
                        <Route path="/product/:id" element={<ProductDetail/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/ordering" element={<OrderPage/>}/>
                        <Route path="/catalog" element={<AllProducts/>}/>
                        <Route path="/tables" element={<Tables/>}/>
                        <Route path="/chairs" element={<Chairs/>}/>
                        <Route path="/drawers" element={<Drawers/>}/>
                        <Route path="/stands" element={<Stands/>}/>
                        <Route path="/racks" element={<Racks/>}/>
                        <Route path="/accessories" element={<Accessories/>}/>
                        {/*<Route path="/error" element={<Error404/>}/>*/}
                        <Route exact path="/" element={<Home/>} />
                        <Route path="*" element={<Error404/>}/>
                    </Routes>


                    {showButton && (
                        <button onClick={scrollToTop} className='back-to-top'>
                            &#8679;
                        </button>
                    )}

                    <Footer authToken={authToken} />

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
