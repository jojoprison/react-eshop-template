import './App.css';

import React from "react";
import {Header} from "./components/Header";
import {Navigation} from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
        </div>
    );
}

export default App;
