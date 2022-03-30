import {Button, Col} from "react-bootstrap";
import {useCart} from "react-use-cart";
import {toast} from "react-toastify";
import React from "react";

const ProductCard = (props) => {
    const {product} = props;
    const {addItem} = useCart();

    const addProductToCart = () => {
        addItem(product);

        toast.info('Товар добавлен в корзину', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
        });
    }

    return (
        <div className="card card-product-grid product-card">

            <div style={{transform: "rotate(0)"}}>

                <div className="img-wrap">
                    <img
                        src={process.env.REACT_APP_NKS_PHOTO_PRODUCTS_PATH + product.photo_file_name}
                        className="card-img border-img"/>
                </div>

                <div className="card-body">
                    <h6>
                        <a href={"/product/" + product.id}
                           className="title card-title card-link stretched-link product-link">
                            {product.title}
                        </a>
                    </h6>

                    <figcaption className="card-props-column features-text">
                        <div className="card-props card-text">
                            <span className="text-muted small">Артикул:</span>
                            <span className="text-muted small">{product.article}</span>
                        </div>
                        <div className="card-props card-text">
                            <span className="text-muted small">Тип:</span>
                            <span className="text-muted small">{product.type}</span>
                        </div>
                        <div className="card-props card-text">
                            <span className="text-muted small">Материал исполнения:</span>
                            <span className="text-muted small">{product.execution_material}</span>
                        </div>
                    </figcaption>
                </div>
            </div>

            {/* TODO пофиксить адаптивное отображение элементов bottom-wrap для md! съезжают */}
            <div className="bottom-wrap d-inline-flex p-0 align-items-center mt-auto">
                {/*TODO добавим когда сделаем личный кабинет*/}
                {/*<div className="widget-header col-4">*/}
                {/*    <a href="#" className="icon icon-sm card-link">*/}
                {/*        <i className="far fa-heart"/></a>*/}
                {/*</div>*/}

                <Col xl={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} className='price-card card-text price-wrap'>
                    {product.price} ₽
                </Col>

                <Col xl={{ span: 3, offset: 0 }} lg={3}>
                    {/*TODO поменять цвет иконки (при наведении тоже)*/}
                    <Button variant='link' size='lg' title='Добавить в корзину'
                            className='btn-link-nks'
                            onClick={addProductToCart}>
                        <i className="fa fa-shopping-cart"/>
                    </Button>
                </Col>
            </div>
        </div>
    );
}

export default ProductCard;
