import React from 'react';
import {Container} from "react-bootstrap";
import CatalogTemplate from "../CatalogTemplate";


const Tables = React.memo(() => {
    return (
        <Container>
            <header className="section-heading">
                <div className="product_description">
                    <nav>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item"><a href="/catalog">Каталог</a></li>
                            <li className="breadcrumb-item active">Столы</li>
                        </ul>
                    </nav>
                </div>
                <h3 className="section-title">Столы</h3>
            </header>

            <CatalogTemplate itemsType='tables'/>

        </Container>
    )
});

export default Tables;
