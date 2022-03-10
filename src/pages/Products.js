import React from 'react';
import {Link} from 'react-router-dom';

export const Products = () => (
    <section className="padding-y-sm">
        <div className="container">

            <header className="section-heading">
                <a href="#" className="btn nks-btn btn-outline-primary float-right">Посмотреть все</a>
                <h3 className="section-title">Новые модели</h3>
            </header>

            <div className="row">

                {/* TODO col-lg and etc. for adaptive design (4 to 2 elems in row) */}
                <div className="col-md-3">
                    <div className="card card-product-grid">

                        <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                            <div className="img-wrap">
                                <img src="assets/images/items/table_template_1.jpg" className="card-img-top"/>
                            </div>

                            <div className="card-body">
                                <h6>
                                    <Link to={'product/' + 1}  className="title card-title card-link stretched-link">
                                        Пристенный лабораторный стол 600x600x900, NL
                                    </Link>
                                </h6>

                                <figcaption className="card-props-column">
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал столешницы:</span>
                                        <span className="text-muted small">DOD</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал исполнения:</span>
                                        <span className="text-muted small">DOD</span>
                                    </div>
                                </figcaption>
                            </div>
                        </div>

                        {/* TODO пофиксить адаптивное отображение элементов bottom-wrap для md! съезжают */}
                        <div className="bottom-wrap d-flex p-0 align-items-baseline">
                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="far fa-heart"/></a>
                            </div>

                            <div className="price col-4 card-text price-wrap">4100 Р</div>

                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-product-grid">

                        <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                            <div className="img-wrap">
                                <img src="assets/images/items/cupboard_template_1.jpg" className="card-img-top"/>
                            </div>

                            <div className="card-body">
                                <h6>
                                    <a href="/product" className="title card-title card-link stretched-link">
                                        Шкаф лабораторный навесной 600x380x400, NL
                                    </a>
                                </h6>

                                <figcaption className="card-props-column">
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Оснащение:</span>
                                        <span className="text-muted small">Дверцы из ЛДСП</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал исполнения:</span>
                                        <span className="text-muted small">ЛДСП</span>
                                    </div>
                                </figcaption>
                            </div>
                        </div>

                        {/* TODO пофиксить адаптивное отображение элементов bottom-wrap для md! съезжают */}
                        <div className="bottom-wrap d-flex p-0 align-items-baseline">
                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="far fa-heart"/></a>
                            </div>

                            <div className="price col-4 card-text price-wrap">6600 Р</div>

                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-product-grid">

                        <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                            <div className="img-wrap">
                                <img src="assets/images/items/table_template_2.jpg" className="card-img-top"/>
                            </div>

                            <div className="card-body">
                                <h6>
                                    <a href="" className="title card-title card-link stretched-link">
                                        Химический пристенный лабораторный стол 1200x600x900/1600, MML
                                    </a>
                                </h6>

                                <figcaption className="card-props-column">
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал столешницы:</span>
                                        <span className="text-muted small">Пластик типа ЛАБ (П)</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал исполнения:</span>
                                        <span className="text-muted small">Металл</span>
                                    </div>
                                </figcaption>
                            </div>
                        </div>

                        {/* TODO пофиксить адаптивное отображение элементов bottom-wrap для md! съезжают */}
                        <div className="bottom-wrap d-flex p-0 align-items-baseline">
                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="far fa-heart"/></a>
                            </div>

                            <div className="price col-4 card-text price-wrap">32700 Р</div>

                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-product-grid">

                        <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                            <div className="img-wrap">
                                <img src="assets/images/items/stellage_template_1.jpg" className="card-img-top"/>
                            </div>

                            <div className="card-body">
                                <h6>
                                    <a href="" className="title card-title card-link stretched-link">
                                        Стеллаж лабораторный 400x600x2000, NL
                                    </a>
                                </h6>

                                <figcaption className="card-props-column">
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Полки:</span>
                                        <span className="text-muted small">Металлические (5)</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал исполнения:</span>
                                        <span className="text-muted small">Металл</span>
                                    </div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="bottom-wrap d-flex p-0 align-items-baseline">
                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="far fa-heart"/></a>
                            </div>

                            <div className="price col-4 card-text price-wrap">10 503 Р</div>

                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-product-grid">

                        <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                            <div className="img-wrap">
                                <img src="assets/images/items/cupboard_template_2.jpg" className="card-img-top"/>
                            </div>

                            <div className="card-body">
                                <h6>
                                    <a href="" className="title card-title card-link stretched-link">
                                        Шкаф вытяжной с рабочей камерой 1000x840x2280, NL
                                    </a>
                                </h6>

                                <figcaption className="card-props-column">
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал столешницы:</span>
                                        <span className="text-muted small">Керамогранит (К)</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал рабочей камеры:</span>
                                        <span className="text-muted small">Металл</span>
                                    </div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="bottom-wrap d-flex p-0 align-items-baseline">
                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="far fa-heart"/></a>
                            </div>

                            <div className="price col-4 card-text price-wrap">57 700 Р</div>

                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-product-grid">

                        <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                            <div className="img-wrap">
                                <img src="assets/images/items/table_template_3.jpg" className="card-img-top"/>
                            </div>

                            <div className="card-body">
                                <h6>
                                    <a href="" className="title card-title card-link stretched-link">
                                        Стол-мойка 800x600x900, двухчашевая накладная раковина HC, NL
                                    </a>
                                </h6>

                                <figcaption className="card-props-column">
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал столешницы:</span>
                                        <span className="text-muted small">Нержавеющая сталь (Н)</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Расположение:</span>
                                        <span className="text-muted small">Пристенное</span>
                                    </div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="bottom-wrap d-flex p-0 align-items-baseline">
                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="far fa-heart"/></a>
                            </div>

                            <div className="price col-4 card-text price-wrap">16 900 Р</div>

                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-product-grid">

                        <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                            <div className="img-wrap">
                                <img src="assets/images/items/table_template_4.jpg" className="card-img-top"/>
                            </div>

                            <div className="card-body">
                                <h6>
                                    <a href="" className="title card-title card-link stretched-link">
                                        Подкатной лабораторный стол 1800x700x900 на колесах, NL
                                    </a>
                                </h6>

                                <figcaption className="card-props-column">
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал столешницы:</span>
                                        <span className="text-muted small">Пластик типа ЛАБ (П)</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Количество полок:</span>
                                        <span className="text-muted small">1 (Одна)</span>
                                    </div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="bottom-wrap d-flex p-0 align-items-baseline">
                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="far fa-heart"/></a>
                            </div>

                            <div className="price col-4 card-text price-wrap">9 700 Р</div>

                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-product-grid">

                        <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                            <div className="img-wrap">
                                <img src="assets/images/items/table_template_5.jpg" className="card-img-top"/>
                            </div>

                            <div className="card-body">
                                <h6>
                                    <a href="" className="title card-title card-link stretched-link">
                                        Торцевой лабораторный стол 1200x790x900, NL
                                    </a>
                                </h6>

                                <figcaption className="card-props-column">
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Материал столешницы:</span>
                                        <span className="text-muted small">Пластик типа ЛАБ (П)</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="text-muted small">Назначение:</span>
                                        <span className="text-muted small">Лабораторный</span>
                                    </div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="bottom-wrap d-flex p-0 align-items-baseline">
                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="far fa-heart"/></a>
                            </div>

                            <div className="price col-4 card-text price-wrap">14 100 Р</div>

                            <div className="widget-header col-4">
                                <a href="#" className="icon icon-sm card-link">
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </section>
);
