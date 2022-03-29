import React, {useEffect, useState} from 'react';
import {Ad} from "./Ad";
import {Container} from "react-bootstrap";
import ProductsDynamic from "../components/products/ProductsDynamic";

const Home = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // TODO заливать сюда последние добавленные в базу 8-12 продуктов
    let newProduct = products.slice(0, 8)

    // втрым аргументом переменную, при изменении которого должна вызываться функция
    // в данном случае вызовем только при первом рендере
    useEffect(() => {
        async function fetchInitData() {
            const resProducts = await fetch(process.env.REACT_APP_NKS_API + 'products/filter');
            const dataProducts = await resProducts.json();

            setProducts(dataProducts);
            setLoading(false);
        }

        fetchInitData();
    }, []);

    return (
        <Container>
            <Ad/>

            {!loading && (
                <header className="section-heading">
                    <h3 className="section-title">Новые модели изделий</h3>
                    <ProductsDynamic products={newProduct}/>
                </header>
            )}
        </Container>
    )
};

export default Home;
