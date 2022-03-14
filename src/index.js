import './css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/responsive.css';
import './css/styles.css';
// TODO мы изначально писали на 4.3 версии бустрапа, этот - 5.1; из-за чего не так что-то отрисовывается
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Header} from "./pages/Header";
import Navigation from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Table} from "./components/Table";
import {Catalog} from "./components/Catalog";
import {Product} from "./components/Product";
import {Footer} from "./pages/Footer";

ReactDOM.render(
    // <BrowserRouter>
    //     <div className="App">
    //         <Header/>
    //         <Navigation/>
    //
    //         <Routes>
    //             {/*component={Home} dont work!*/}
    //             <Route path="/" element={<Home/>} exact/>
    //             <Route path="table" element={<Table/>}/>
    //             <Route path="catalog" element={<Catalog/>}/>
    //             <Route path="product/:id" element={<Product/>}/>
    //         </Routes>
    //
    //         <Footer/>
    //     </div>
    // </BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
