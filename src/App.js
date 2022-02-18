import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from './components/Nav'
import {Table} from "./components/Table";
import {Home} from "./pages/Home";
import {Header} from "./pages/Header";
import {Footer} from "./pages/Footer";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>

                <Routes>
                    {/*component={Home} dont work!*/}
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/table" element={<Table/>}/>
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
