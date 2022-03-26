import React, {useEffect, useState} from "react";
import {useCart} from "react-use-cart";


const OrderPage = (props) => {
    const {totalItems, cartTotal} = useCart();
    const [radio, setRadio] = useState();


    const handleSubmit = (event) =>
    {
        event.preventDefault();
        fetch(process.env.REACT_APP_NKS_API + 'order', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client: event.target.client.value,
                price: event.target.price.value,
                products: event.target.products.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                    alert(result);
                },
                (error) => {
                    alert('Type Adding Failed!');
                })
    }


    const convertRadioValue = (radio) => {
        if (radio == 'self-delivery') {
            return 'Самовывоз'
        } else if (radio == 'sdc') {
            return '«СДЭК»';
        } else if (radio == 'shipping') {
            return 'Доставка'
        } else if (radio == 'business-lines') {
            return '«Деловые линии»'
        } else {
            return 'Выберите способ доставки'
        }
    }

// render()
//     {
        return (
            <section className="container">
                <div className="padding-y-sm">

                    <div className="product_description padding-bottom-sm">
                        <nav>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Главная</a></li>
                                <li className="breadcrumb-item active">Оформить заказ</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="order-block row">
                        <div className="col-md-12">
                            <aside className="col-md-4 padding-y-sm text-left">
                                <h5 className="text-gray">Шаг 1</h5>
                                <h4> Выберите способ доставки </h4>
                            </aside>
                        </div>


                        <div className="col-md-6">
                            <figure className="small-info itemside align-items-center padding-bottom-sm">

                                <div className="form-check custom-radio">
                                    <input className="form-check-input" checked={radio === "self-delivery"}
                                           type="radio" name="flexRadioDefault"
                                           id="flexRadioDefault1" value="self-delivery"
                                           onChange={(e) => {
                                               setRadio(e.target.value)
                                           }}/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1"/>

                                </div>
                                <img className="ordering_img"
                                     src={process.env.PUBLIC_URL + '/assets/images/items/self_delivery.jpg'}/>


                                <figcaption className="col-md-9">
                                    <div className="text-wrap">
                                        <a href="#" id="ordered_link">Самовывоз</a>
                                    </div>
                                    <span className="text-muted small-info">Владимирская область, город Александров</span>
                                </figcaption>
                            </figure>
                        </div>


                        <div className="col-md-6">
                            <figure className="small-info itemside align-items-center padding-bottom-sm">

                                <div className="form-check custom-radio">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                           id="flexRadioDefault2" value="sdc" checked={radio === "sdc"}
                                           onChange={(e) => {
                                               setRadio(e.target.value)
                                           }}/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2"/>
                                </div>
                                <img className="ordering_img"
                                     src={process.env.PUBLIC_URL + '/assets/images/items/ordering_sdak.jpg'}/>


                                <figcaption className="col-md-6 small-info">
                                    <div className="text-wrap">
                                        <a href="#" id="ordered_link">«СДЭК»</a>
                                    </div>
                                    <span className="text-muted">Рассчитывается после оформления заказа и согласования
                                        всех нюансов с нашим менеджером</span>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-md-6">
                            <figure className="small-info itemside align-items-center padding-bottom-sm">

                                <div className="form-check custom-radio">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                           id="flexRadioDefault3" value="shipping"
                                           checked={radio === "shipping"}
                                           onChange={(e) => {
                                               setRadio(e.target.value)
                                           }}/>

                                    <label className="form-check-label" htmlFor="flexRadioDefault3"/>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/assets/images/items/shipping_1.jpg'}
                                     className="ordering_img"/>


                                <figcaption className="col-md-6 small-info">
                                    <div className="text-wrap">
                                        <a href="#" id="ordered_link">Самовывоз</a>
                                    </div>
                                    <span className="text-muted">Рассчитывается после оформления заказа и согласования
                                        всех нюансов с нашим менеджером</span>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-md-6">
                            <figure className="small-info itemside align-items-center padding-bottom-sm">

                                <div className="form-check custom-radio">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                           id="flexRadioDefault4" value="business-lines"
                                           checked={radio === "business-lines"}
                                           onChange={(e) => {
                                               setRadio(e.target.value)
                                           }}/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault4"/>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/assets/images/items/business_lines.jpg'}
                                     className="ordering_img"/>

                                <figcaption className="col-md-6 small-info">
                                    <div className="text-wrap">
                                        <a href="#" id="ordered_link">«Деловые Линии»</a>
                                    </div>
                                    <span className="text-muted">Рассчитывается после оформления заказа и согласования
                                        всех нюансов с нашим менеджером</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="padding-top">
                        <div className="personal-details">
                            <div className="col-md-12">
                                <aside className="col-md-6 padding-y-sm text-left">
                                    <h5 className="text-gray">Шаг 2</h5>
                                    <h4> Введите контактную информацию </h4>
                                </aside>
                            </div>

                            <div className="row m-1">
                                <div className="col-md-6">
                                    <div className="form-group mb-2">
                                        <p className="mb-1 text-left">ФИО</p>
                                        <input id="name" type="text" required
                                               placeholder="ФИО контактного лица"
                                               name="name"
                                               className="form-control input-box rm-border"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group mb-1">
                                        <p className="mb-1 text-left">Контактный телефон</p>
                                        <input id="name" type="tel"
                                               placeholder="Контактный телефон" required
                                               name="phone"
                                               className="form-control input-box rm-border"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row m-1">
                                <div className="col-md-6">
                                    <div className="form-group mb-2">
                                        <p className="mb-1 text-left">Email</p>
                                        <input id="e-mail" type="email" required
                                               placeholder="Ваша электронная почта"
                                               name="email"
                                               className="form-control input-box rm-border"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group mb-2">
                                        <p className="mb-1 text-left">Наименование
                                            организации</p>
                                        <input id="name" type="text"
                                               placeholder="Наименование организации"
                                               name="name"
                                               className="form-control input-box rm-border"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row m-1">
                                <div className="col-md-12">
                                    <div className="form-group row mb-3">
                                        <div className="col-md-6">
                                            <p className="mb-1 text-left">ИНН</p>
                                            <input id="name" type="text"
                                                   placeholder="ИНН"
                                                   name="name"
                                                   className="form-control input-box rm-border"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 padding-top-sm">
                                <h5 className="text-left mb-4">Адрес доставки:</h5>
                            </div>


                            <div className="col-md-12">
                                <div className="form-group row mb-3">

                                    <div className="col-md-4">
                                        <p className="mb-1 text-left">Почтовый индекс</p>
                                        <input id="name" type="text"
                                               placeholder="Почтовый индекс"
                                               name="name"
                                               className="form-control input-box rm-border"/>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="mb-1 text-left">Страна</p>
                                        <select id="name" className="form-control input-box rm-border"
                                                name="name">
                                            <option>Страна</option>
                                            <option value="RU">Россия</option>
                                            <option value="KZ">Казахстан</option>
                                            <option value="BY">Беларусь</option>
                                            <option value="UA">Украина</option>
                                            <option value="AM">Армения</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="mb-1 text-left">Город</p>
                                        <input id="name" type="text"
                                               placeholder="Город"
                                               name="name"
                                               className="form-control input-box rm-border"/>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-8 mb-3">
                                <p className="mb-1 text-left">Улица</p>
                                <input id="name" type="text"
                                       placeholder="Улица"
                                       name="name"
                                       className="form-control input-box rm-border"/>
                            </div>

                            <div className="form-group">
                                <div className="col-md-8">
                                    <p className="mb-1 text-left">Комментарий к заказу</p>
                                    <textarea id="message" type="text"
                                              placeholder="Текст сообщения"
                                              name="message"
                                              className="form-control input-box rm-border">
                                            </textarea>
                                </div>
                            </div>

                            <footer>
                                <div className="col-md-12 center-x">
                                    <div className="row">
                                        <div className="col-md-3 m-3">
                                            <ul className="text-left list-unstyled">
                                                <li><span
                                                    className="text-muted small-info">В вашем заказе всего товаров:</span>
                                                </li>
                                                <li><h5>{totalItems} шт.</h5></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-2 m-3">
                                            <ul className="text-left list-unstyled">
                                                <li><span
                                                    className="text-muted small-info">На общую сумму:</span>
                                                </li>
                                                <li><h5>{cartTotal} ₽</h5></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 m-3">
                                            <ul className="text-left list-unstyled">
                                                <li><span
                                                    className="text-muted small-info">Вы выбрали способ доставки::</span>
                                                </li>
                                                <li><h5>{convertRadioValue(radio)}</h5></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-left">
                                    <input type="submit" value="Оформить заказ"
                                           className="btn btn-danger download-info btn-lg"/>
                                    {/*<input onSubmit={this.handleSubmit} type="submit" value="Оформить заказ"*/}
                                    {/*       className="btn btn-danger download-info btn-lg"/>*/}
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>
        )
    // }

}

export default OrderPage;
