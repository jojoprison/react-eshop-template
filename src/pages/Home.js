import React, {useEffect, useState} from 'react';
import {Ad} from "./Ad";
import {Container} from "react-bootstrap";
import ProductsDynamic from "../components/products/ProductsDynamic";

const Home = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    let newProduct = products.slice(0, 8)

    // передавать вторым аргументом state, при изменении которого должна вызываться функция чтоб не было лишних
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
            <header className="section-heading">
                <h3 className="section-title">Новые модели</h3>
            </header>
            {!loading && (<ProductsDynamic products={newProduct}/>)}
        </Container>
    )
};

export default Home;
