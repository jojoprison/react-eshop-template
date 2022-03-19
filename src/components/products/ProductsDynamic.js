import {useCart} from "react-use-cart";
import ProductCard from "./ProductCard";

export default function ProductsDynamic(props) {
    const { items } = useCart();

    return (
        <section className="padding-y-sm">
            <div className="container">

                <div className="row">

                    {props.products.map(product =>
                        // TODO col-lg and etc. for adaptive design (4 to 2 elems in row)
                        <div className="col-md-3" key={product.id}>
                            <ProductCard product={product}/>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
