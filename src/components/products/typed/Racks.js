import React from 'react';
import {Container} from "react-bootstrap";
import CatalogTemplate from "../CatalogTemplate";


const Racks = React.memo(() => {
    return (
        <Container>
            <header className="section-heading">
                <div className="product_description">
                    <nav>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item"><a href="/catalog">Каталог</a></li>
                            <li className="breadcrumb-item active">Стеллажи</li>
                        </ul>
                    </nav>
                </div>
                <h3 className="section-title">Стеллажи</h3>
            </header>

            <CatalogTemplate itemsType='racks'/>

        </Container>
    )
});

export default Racks;
