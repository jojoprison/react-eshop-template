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
                        {/*<Route exact path="/" element={<AuthChecker/>}>*/}
                        {/*    <Route exact path='/' element={<Home/>}/>*/}
                        {/*</Route>*/}
                        <Route exact path="/"
                               element={<AuthChecker Component={Home} authToken={authToken} />}
                        />
                        {/*<Route path="/error" element={<Error404/>}/>*/}
                        <Route path="*" element={<Error404/>}/>
                        <Route path="/login" element={<Authorization/>}/>
                        {/* TODO не юзаем этот компонент, мб избавиться */}
                        <Route path="/contact" element={<ContactUs/>}/>
                        <Route exact path="/"
                               element={<AuthChecker Component={Home} authToken={authToken} />}
                        />
                        <Route path="/basket"
                               element={<AuthChecker Component={ShoppingCart} authToken={authToken} />}
                        />
                        <Route exact path="/product/:id"
                               element={<AuthChecker Component={ProductDetail} authToken={authToken} />}
                        />
                        <Route path="/contacts"
                               element={<AuthChecker Component={Contacts} authToken={authToken} />}
                        />
                        <Route path="/ordering"
                               element={<AuthChecker Component={OrderPage} authToken={authToken} />}
                        />
                        <Route path="/catalog"
                               element={<AuthChecker Component={AllProducts} authToken={authToken} />}
                        />
                        <Route path="/tables"
                               element={<AuthChecker Component={Tables} authToken={authToken} />}
                        />
                        <Route path="/chairs"
                               element={<AuthChecker Component={Chairs} authToken={authToken} />}
                        />
                        <Route path="/drawers"
                               element={<AuthChecker Component={Drawers} authToken={authToken} />}
                        />
                        <Route path="/stands"
                               element={<AuthChecker Component={Stands} authToken={authToken} />}
                        />
                        <Route path="/racks"
                               element={<AuthChecker Component={Racks} authToken={authToken} />}
                        />
                        <Route path="/accessories"
                               element={<AuthChecker Component={Accessories} authToken={authToken} />}
                        />
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
