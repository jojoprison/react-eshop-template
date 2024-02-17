import React from 'react';
import {Container} from "react-bootstrap";
import CatalogTemplate from "../CatalogTemplate";


const AllProducts = React.memo(() => {
    return (
        <Container>
            <header className="section-heading">
                <div className="product_description">
                    <nav>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item active">Каталог</li>
                        </ul>
                    </nav>
                </div>
                <h3 className="section-title">Все продукты</h3>
            </header>

            <CatalogTemplate itemsType='products'/>

        </Container>
    )
});

export default AllProducts;
