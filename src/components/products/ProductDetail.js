import React, {useEffect, useState} from 'react';
import {useCart} from "react-use-cart";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";


const ProductDetail = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {addItem} = useCart();

    useEffect(() => {
        async function fetchInitData() {
            const resProduct = await fetch(process.env.REACT_APP_NKS_API + `products/${params.id}`);
            const dataProduct = await resProduct.json();

            setProduct(dataProduct);
            setLoading(false);
            // тестил почему не робит, фишинг данные
            // setProduct({title: 'adadad', price: 1, article: 'ada', series: 'adad', })
        }

        fetchInitData();
    }, []);

    const addProductToCart = () => {
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

        addItem(product);
    }

    const fillContent = () => {
        console.log('FILL_CONTENT');


        return (
            <div>
                <div className="product_description">
                    <nav>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item"><a href="/filters">Каталог товаров</a></li>
                            <li className="breadcrumb-item"><a href="#">Столы лабораторные</a></li>
                            <li className="breadcrumb-item active">{product.title}
                            </li>
                        </ul>
                    </nav>
                </div>

                <header className="section-heading">
                    <h3 className="section-title text-left">
                        {product.title}
                    </h3>
                </header>

                <div className="col-md-12 row">

                    <div className="col-md-3">

                        <div className="img-wrap card">
                            <img src={process.env.REACT_APP_NKS_PHOTO_PRODUCTS_PATH + product.photo_file_name}
                                 className="card-img-top"/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="bottom-wrap d-flex p-0 align-items-baseline">
                            <div className="col-4 card-text price-detail">{product.price} ₽</div>

                            <div className="col-3 row">
                                <aside className="col">
                                    <ul className="list-unstyled ">
                                        <div className="card-props card-text">
                                            <span className="font-weight-bolder">Артикул:</span>

                                            <a href="#" className="text-muted"><span
                                                className="font-weight-bold ">{product.article}</span></a>
                                        </div>
                                        <div className="card-props card-text">
                                            <span className="font-weight-bolder">Серия:</span>
                                            <span className=" font-weight-bold">{product.series}</span>
                                        </div>
                                    </ul>
                                </aside>
                            </div>

                            <div className="row product-bottom col-5">
                                <button className="btn btn-nks btn-lg margbutton"
                                        onClick={addProductToCart}>
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5 col-12">
                    <nav>
                        {/* TODO Tabs */}
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                            <button className="nav-link col-6 active" id="nav-feature-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-feature" type="button" role="tab"
                                    aria-controls="nav-feature"
                                    aria-selected="True">
                                Характеристики
                            </button>

                            <button className="nav-link col-6" id="nav-description-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-description" type="button" role="tab"
                                    aria-controls="nav-description"
                                    aria-selected="False">
                                Описание
                            </button>
                        </div>
                    </nav>


                    <div className="tab-content padding-y-sm" id="tab-tabContent">

                        <div className="tab-pane show active fade p-3" id="nav-feature" role="tabpanel"
                             aria-labelledby="nav-feature-tab">
                            <div className="col-md-6">
                                <figcaption className="card-props-column features-text">
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Ширина</span>
                                        <span className="font-weight-bold">{product.width}</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Глубина</span>
                                        <span className="font-weight-bold">{product.depth}</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Высота</span>
                                        <span className="font-weight-bold">{product.height}</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder ">Материал столешницы</span>
                                        <span className="font-weight-bold">Пластик типа ЛАБ (П)</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Расположение</span>
                                        <span className="font-weight-bold">Пристенное</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Материал исполнения</span>
                                        <span className="font-weight-bold">{product.execution_material}</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Тип тумбы</span>
                                        <span className="font-weight-bold">Мобильная/Подвесная</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Материал столешницы</span>
                                        <span className="font-weight-bold">Пластик типа ЛАБ (П)</span>
                                    </div>

                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Назначение</span>
                                        <span className="font-weight-bold">Лабораторный</span>
                                    </div>
                                </figcaption>
                            </div>

                        </div>

                        <div className="tab-pane fade p-3" id="nav-description" role="tabpanel"
                             aria-labelledby="nav-description-tab">

                            <h2 className="text-left">Описание товара:</h2>

                            <p className="text-left description-text">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <section className="padding-y-sm">
            <div className="container">

                {!loading && (
                    fillContent()
                )}
            </div>
        </section>
    )
};

export default ProductDetail;
