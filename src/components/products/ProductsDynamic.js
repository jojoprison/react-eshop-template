import {useCart} from "react-use-cart";
import ProductCard from "./ProductCard";
import React from "react";

// TODO заменили на пагинационный продукт - удалить
const ProductsDynamic = React.memo(({products}) => {
    console.log(products);
    // const { items } = useCart();

    return (
        <section className="padding-y-sm">
            <div className="container">

                <div className="row">
                    {products.map(product =>
                        // TODO col-lg and etc. for adaptive design (4 to 2 elems in row)
                        <div className="col-md-3 padding-bottom-sm" key={product.id}>
                            <ProductCard product={product}/>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
});

export default ProductsDynamic;
