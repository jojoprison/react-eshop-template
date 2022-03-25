import {Button} from "react-bootstrap";
import {useCart} from "react-use-cart";

export default function ProductCard(props) {
    const {product} = props;
    const {addItem} = useCart();

    return (
        <div className="card card-product-grid p-3">

            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                <div className="img-wrap">
                    <img
                        src={process.env.REACT_APP_NKS_PHOTO_PRODUCTS_PATH + product.photo_file_name}
                        className="card-img border-img"/>
                </div>

                <div className="card-body">
                    <h6>
                        <a href={"/product/" + product.id}
                           className="title card-title card-link stretched-link">
                            {product.title}
                        </a>
                    </h6>

                    <figcaption className="card-props-column">
                        <div className="card-props card-text">
                            <span className="text-muted small">Время создания:</span>
                            <span className="text-muted small">{product.time_create}</span>
                        </div>
                        <div className="card-props card-text">
                            <span className="text-muted small">Время последнего обновления:</span>
                            <span className="text-muted small">{product.time_update}</span>
                        </div>
                    </figcaption>
                </div>
            </div>

            {/* TODO пофиксить адаптивное отображение элементов bottom-wrap для md! съезжают */}
            <div className="bottom-wrap d-flex p-0 align-items-baseline mt-auto">
                {/*TODO добавим когда сделаем личный кабинет*/}
                {/*<div className="widget-header col-4">*/}
                {/*    <a href="#" className="icon icon-sm card-link">*/}
                {/*        <i className="far fa-heart"/></a>*/}
                {/*</div>*/}

                <div className="price col card-text price-wrap">{product.price} ₽</div>

                <div className="col">
                    {/*TODO поменять цвет иконки (при наведении тоже)*/}
                    <Button variant='link' size='lg' title='Добавить в корзину'
                            onClick={() => addItem(product)}>
                        <i className="fa fa-shopping-cart"/>
                    </Button>
                </div>
            </div>
        </div>
    );
}
