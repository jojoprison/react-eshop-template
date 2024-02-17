import React from 'react';
import {Container} from "react-bootstrap";
import CatalogTemplate from "../CatalogTemplate";


const Stands = React.memo(() => {
    return (
        <Container>
            <header className="section-heading">
                <div className="product_description">
                    <nav>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item"><a href="/catalog">Каталог</a></li>
                            <li className="breadcrumb-item active">Стойки</li>
                        </ul>
                    </nav>
                </div>
                <h3 className="section-title">Стойки</h3>
            </header>

            <CatalogTemplate itemsType='stands'/>

        </Container>
    )
});

export default Stands;
