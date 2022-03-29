import React, {useEffect, useState} from "react";
import {useCart} from "react-use-cart";
import {toast} from "react-toastify";


const OrderPage = (props) => {
    const {totalItems, cartTotal, items, emptyCart} = useCart();
    let [radio, setRadio] = useState('self-delivery');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState(null);
    const [commentary, setCommentary] = useState(null);


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

    const handleSubmit = (e) => {
        e.preventDefault();
        const price = cartTotal
        radio = convertRadioValue(radio)
        const order = {name, phone, email, city, commentary, price, radio, items};

        fetch(process.env.REACT_APP_NKS_API + 'order/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then((result) => {
                    alert(result);
                    emptyCart();
                //    TODO сделать редирект на главную
                },
                (error) => {
                    alert('Заказ не оформлен');
                })
    }


    return (
        <section className="container">
            <div className="padding-y-sm">
                <form onSubmit={handleSubmit}>
                    {/*{console.log(items)}*/}

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
                                    <span
                                        className="text-muted small-info">Владимирская область, город Александров</span>
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
                                <div className="col-md-5">
                                    <div className="form-group mb-2">
                                        <p className="mb-1 text-left">ФИО</p>
                                        <input type="text" required
                                               placeholder="ФИО контактного лица"
                                               value={name}
                                               className="form-control input-box"
                                               onChange={(e) =>
                                                   setName(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group mb-1">
                                        <p className="mb-1 text-left">Контактный телефон</p>
                                        <input type="tel"
                                               placeholder="Контактный телефон" required
                                               value={phone}
                                               className="form-control input-box"
                                               onChange={(e) =>
                                                   setPhone(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-1">
                                <div className="col-md-5">
                                    <p className="mb-1 text-left">Email</p>
                                    <input type="email" required
                                           placeholder="Ваша электронная почта"
                                           value={email}
                                           className="form-control input-box"
                                           onChange={(e) =>
                                               setEmail(e.target.value)}/>
                                </div>

                                <div className="col-md-6">
                                    <p className="mb-1 text-left">Адрес доставки</p>
                                    <input type="text"
                                           placeholder="Город"
                                           value={city}
                                           className="form-control input-box"
                                           onChange={(e) =>
                                               setCity(e.target.value)}/>
                                </div>
                            </div>

                            <div className="form-group padding-top-sm">
                                <div className="col-md-8">
                                    <p className="mb-1 text-left">Комментарий к заказу</p>
                                    <textarea type="text" name="message"
                                              placeholder="Текст сообщения"
                                              value={commentary}
                                              className="form-control input-box"
                                              onChange={(e) =>
                                                  setCommentary(e.target.value)}>
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
                                                    className="text-muted small-info">Вы выбрали способ доставки:</span>
                                                </li>
                                                <li><h5>{convertRadioValue(radio)}</h5></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-left">
                                    <button type="submit" value="Оформить заказ"
                                            className="btn btn-danger download-info btn-lg">Оформить заказ
                                    </button>
                                    {/*<input onSubmit={this.handleSubmit} type="submit" value="Оформить заказ"*/}
                                    {/*       className="btn btn-danger download-info btn-lg"/>*/}
                                </div>
                            </footer>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default OrderPage;
