import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Similarprod} from "../pages/Similarprod";
import {ContactUs} from "./ContactUs";


export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {product: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'product')
            .then(response => response.json())
            .then(data => {
                this.setState({product: data});
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state))
            this.refreshList()
    }


    render() {
        // TODO products или catalog оставляем?
        const {product} = this.state;

        return (

            <section className="padding-y-sm">
                <div className="container">

                    <div className="product_description">
                        <nav>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Главная</a></li>
                                <li className="breadcrumb-item"><a href="#">Каталог товаров</a></li>
                                <li className="breadcrumb-item"><a href="#">Столы лабораторные</a></li>
                                <li className="breadcrumb-item active">Пристенный лабораторный стол
                                    600x600x900, NL, LabGrade</li>
                            </ul>
                        </nav>
                    </div>

                    <header className="section-heading">
                        <h3 className="section-title text-left">Пристенный лабораторный стол 600x600x900, NL,
                            LabGrade</h3>
                    </header>

                <div className="col-md-12 row">

                    <div className="col-md-3">



                                <div className="img-wrap">
                                    <img src="../assets/images/items/table_template_1.jpg" className="card-img-top"/>
                                </div>

                                <div className="col-md">


                                    <div className="slider center">
                                        <div className="preview-carousel row">
                                            <div className="item col">
                                                <img src="../assets/images/items/table_template_1.jpg"
                                                     className="img-fluid"/>
                                            </div>

                                            <div className="item col">
                                                <img src="../assets/images/items/table_template_2.jpg"
                                                     className="img-fluid"/>
                                            </div>

                                            <div className="item col">
                                                <img src="../assets/images/items/table_template_3.jpg"
                                                     className="img-fluid"/>
                                            </div>

                                        </div>


                            </div>
                        </div>
                    </div>
                <div className="col-md-7">
                    <div className="bottom-wrap d-flex p-0 align-items-baseline">
                        <div className="col-4 card-text priceprod">4100 ₽</div>



                            <div className="col-3 row">
                                <aside className="col">
                                    <ul className="list-unstyled ">
                                        <div className="card-props card-text">
                                            <span className="font-weight-bolder">Артикул:</span>

                                            <a href="#" className="text-muted"><span
                                                className="font-weight-bold ">NL (NeatLab)</span></a>
                                        </div>
                                        <div className="card-props card-text">
                                            <span className="font-weight-bolder">Серия:</span>
                                            <span className=" font-weight-bold">NL-10-12-0П</span>
                                        </div>
                                    </ul>
                                </aside>
                            </div>
                        <div className="row product-bottom">
                            <button type="button" className="btn btn-primary margbutton btn-lg">В корзину</button>
                            <button type="button" className="btn btn-primary margbutton btn-lg">Быстрый заказ</button>
                        </div>
                    </div>
                </div>
                </div>

                    <div className="container my-5 col-12">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link col-6 active" id="nav-feature-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-feature" type="button" role="tab"
                                        aria-controls="nav-feature"
                                        aria-selected="True">Характеристики
                                </button>

                                <button className="nav-link col-6  " id="nav-description-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-description" type="button" role="tab"
                                        aria-controls="nav-description"
                                        aria-selected="False">Описание
                                </button>


                            </div>
                        </nav>


                        <div className="tab-content padding-y-sm" id="tab-tabContent">

                            <div className="tab-pane show active fade p-3" id="nav-feature" role="tabpanel"
                                 aria-labelledby="nav-feature-tab">
                                    <div className="col-md-6">
                                <figcaption className="card-props-column ">
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder ">Ширина</span>
                                        <span className="font-weight-bold">600</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Глубина</span>
                                        <span className="font-weight-bold">600</span>
                                    </div>
                                    <div className="card-props card-text">
                                        <span className="font-weight-bolder">Высота</span>
                                        <span className="font-weight-bold">900</span>
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
                                        <span className="font-weight-bold">Металл</span>
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
                                <h2 className="text-left ">Описание товара:</h2>
                                <p className="text-left product-text">Для организации комфортного рабочего места
                                    предлагаем надёжный и функциональный стол
                                    серии NL. Пристенный лабораторный стол 600x600x900, NL, LabGrade имеет
                                    сборно-разборный объёмный каркас и столешницу Пластик типа ЛАБ (П). Долговечный
                                    металлический каркас состоит из опорных ног замкнутого типа, соединительной рамы и
                                    панели-стяжки. Пристенный лабораторный стол 600x600x900, NL, LabGrade имеет элементы
                                    каркаса, которые изготавливаются из стальных профильных труб сечением 40х25х1,5мм,
                                    стальных уголков 25х25х3мм и листового металла. В опорных ногах предусмотрена
                                    возможность регулировки стола NL-10-12-0П по высоте для установки его в строго
                                    горизонтальном положении при неровности пола до 30мм.<br/><br/>

                                    Стол лабораторный NL-10-12-0П имеет столешницу Пластик типа ЛАБ (П).<br/><br/>

                                    Пристенный лабораторный стол 600x600x900, NL, LabGrade укомплектован столешницей,
                                    которая представляет собой влагостойкую ДСП (толщиной 16мм), покрытую
                                    лабораторным пластиком (толщиной 0,8-1,0 мм) с рабочей стороны и компенсирующим
                                    пластиком с обратной стороны. По периметру столешница модели NL-10-12-0П
                                    окантована 2 мм кромкой АБС. Материал обладает высокой стойкостью к воздействию
                                    основных растворителей, кислот и других химреактивов, относительно
                                    негигроскопичен. Цвет пластика - светло-серый.<br/><br/>

                                    Смонтированная на металлокаркасе, столешница образует собой рабочую поверхность
                                    выполнения повседневных работ.<br/><br/>

                                    Дополнительно стол пристенный лабораторный металлический NL-10-12-0П может
                                    комплектоваться подвесными или подкатными тумбами с ящиками или дверями.<br/>
                                    <br/>

                                    Для увеличения срока эксплуатации на металлические части стола наносится защитный
                                    слой из порошковой глянцевой эпоксиполиэфирной композицией (производства фирмы
                                    EUROPOLVERI S.p.a., Испания) стандартного светло-серого цвета (RAL 7035).
                                    После сушки окрашенных деталей в термокамере при температуре 180-200 °C на них
                                    образуется твердое защитное покрытие. Перед покраской все металлические
                                    поверхности обязательно зачищаем и обезжириваем.<br/><br/>

                                    Мы оснащаем лаборатории различной направленности, в том числе медицинских
                                    учреждений и поставляем только качественную и безопасную мебель. Наша продукция
                                    уже долгие годы используется во многих учебных классах образовательных
                                    учреждений, а также в суровых условиях промышленных предприятий.<br/><br/>

                                    Наша мебель поставляется по всей России. Поэтому познакомиться с ней очень просто
                                    и быстро, не покидая ваш регион. Мы сообщим адреса, где можно посмотреть нашу
                                    мебель в работе. Также можно лично оценить качество нашей мебели и используемых
                                    материалов, посетив наш мебельный шоурум.<br/><br/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <Similarprod/>


                </div>
            </section>
        )
    }
}
