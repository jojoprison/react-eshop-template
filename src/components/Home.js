import React, {Component} from 'react';
import {Products} from "./Products";
import {Ad} from "./Ad";
import FooterHTML from "./Footer";

export class Home extends Component {

    render() {
        return(
            <div className="container">
                <Ad/>

                <Products/>

                <FooterHTML/>
            </div>
        );
    }
}

export default Home;
