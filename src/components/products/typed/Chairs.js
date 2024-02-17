import React from 'react';
import {Container} from "react-bootstrap";
import CatalogTemplate from "../CatalogTemplate";


const Chairs = React.memo(() => {
    return (
        <Container>
            <header className="section-heading">
                <div className="product_description">
                    <nav>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item"><a href="/catalog">Каталог</a></li>
                            <li className="breadcrumb-item active">Стулья/Кресла/Табуреты</li>
                        </ul>
                    </nav>
                </div>
                <h3 className="section-title">Стулья/Кресла/Табуреты</h3>
            </header>

            <CatalogTemplate itemsType='chairs'/>

        </Container>
    )
});

export default Chairs;
