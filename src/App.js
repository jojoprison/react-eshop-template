import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from './components/Nav'
import {Table} from "./components/Table";
import {Home} from "./pages/Home";
import {Header} from "./pages/Header";
import {Footer} from "./pages/Footer";
import {Catalog} from "./components/Catalog";
import {Product} from "./components/Product";
import {Contacts} from "./components/Contacts";
import './App.css';
import {CatalogueFilters} from "./components/CatalogueFilters";

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
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>

                <Routes>
                    {/*component={Home} dont work!*/}
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/table" element={<Table/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/filters" element={<CatalogueFilters/>}/>
                    {/* TODO добавить юрлу когда вмерджим с веткой карточки продукта */}
                    {/*<Route path="/product/tmp" element={<ProductTemplate/>}/>*/}

                    <Route path="/product" element={<Product/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>

                {showButton && (
                    <button onClick={scrollToTop} className='back-to-top'>
                        &#8679;
                    </button>
                )}

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
