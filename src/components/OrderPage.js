import React, {useState} from "react";
import {useCart} from "react-use-cart";
import {Col, Container, Form, Nav, Row, Image} from "react-bootstrap";


const OrderPage = (props) => {
    const {totalItems, cartTotal} = useCart();
    const [radio, setRadio] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(process.env.REACT_APP_NKS_API + 'order', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_name: event.target.client_name.value,
                client_email: event.target.client_email.value,
                // price: event.target.price.value,
                // products: event.target.products.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                    alert(result);
                },
                (error) => {
                    alert('Error while POST order ;(');
                });
    };


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

    return (
        <Container>
            {/*<div className="padding-y-sm">*/}

            {/* TODO переписать на бутстрап*/}
            <div className="padding-bottom-sm">
                <Nav>
                    {/* TODO на бутстраповские бредкрамбы */}
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Главная</a></li>
                        <li className="breadcrumb-item active">Оформить заказ</li>
                    </ul>
                </Nav>
            </div>

            <Form onSubmit={handleSubmit}>
                <div className="personal-details">
                    <Row>
                        <Form.Label as='legend' column='sm' sm={12}>
                            <aside className="col-md-4 padding-y-sm text-left">
                                <h5 className="text-gray">
                                    Шаг 1
                                </h5>
                                <h4>
                                    Выберите способ доставки
                                </h4>
                            </aside>
                        </Form.Label>


                        <Col md={{span: 3, offset: 3}}>
                            {/* TODO не получается на бутстраповскую фигуру заменить - все едет */}
                            <figure className="small-info itemside align-items-center padding-bottom-sm">

                                <Form.Group>
                                    <Form.Check
                                        type='radio'
                                        inline
                                        defaultChecked
                                        value='self-delivery'
                                        checked={radio === 'self-delivery'}
                                        name='deliveryMethodRadio'
                                        aria-label='deliveryMethod'
                                        id='form-radio-1'
                                        onChange={(e) => setRadio(e.target.value)}
                                    />
                                </Form.Group>

                                <Image className="ordering_img"
                                       src={process.env.PUBLIC_URL + '/assets/images/items/self_delivery.jpg'}/>

                                {/* TODO помжно поюзать as={Col} пока хз как добавить md */}
                                <figcaption className="col-md-6 small-info">
                                    <div className="text-wrap">
                                        <a href="#" id="ordered_link">
                                            Самовывоз
                                        </a>
                                    </div>
                                    <span
                                        className="text-muted small-info">Владимирская область, город Александров</span>
                                </figcaption>
                            </figure>
                        </Col>


                        <Col md={{span: 5, offset: 1}}>
                            <figure className="small-info itemside align-items-center padding-bottom-sm">

                                <Form.Group>
                                    <Form.Check
                                        type='radio'
                                        inline
                                        value='sdc'
                                        checked={radio === 'sdc'}
                                        name='deliveryMethodRadio'
                                        aria-label='sdc-lbl'
                                        id='form-radio-2'
                                        onChange={(e) => setRadio(e.target.value)}
                                    />
                                </Form.Group>

                                <Image className="ordering_img"
                                       src={process.env.PUBLIC_URL + '/assets/images/items/ordering_sdak.jpg'}/>


                                <figcaption className="col-md-6 small-info">
                                    <div className="text-wrap">
                                        <a href="#" id="ordered_link">«СДЭК»</a>
                                    </div>
                                    <span className="text-muted">Рассчитывается после оформления заказа и согласования
                                        всех нюансов с нашим менеджером</span>
                                </figcaption>
                            </figure>
                        </Col>

                        <Col md={{span: 4, offset: 3}}>
                            <figure className="small-info itemside align-items-center padding-bottom-sm">

                                <Form.Group>
                                    <Form.Check
                                        type='radio'
                                        inline
                                        defaultChecked
                                        value='shipping'
                                        name='deliveryMethodRadio'
                                        checked={radio === 'shipping'}
                                        aria-label='deliveryMethod'
                                        id='form-radio-3'
                                        onChange={(e) => setRadio(e.target.value)}
                                    />
                                </Form.Group>

                                <Image className="ordering_img"
                                       src={process.env.PUBLIC_URL + '/assets/images/items/shipping_1.jpg'}/>

                                <figcaption className="col-md-6 small-info">
                                    <div className="text-wrap">
                                        <a href="#" id="ordered_link">Доставка</a>
                                    </div>
                                    <span className="text-muted">Рассчитывается после оформления заказа и согласования
                                        всех нюансов с нашим менеджером</span>
                                </figcaption>
                            </figure>
                        </Col>

                        <Col md={{span: 5, offset: 0}}>
                            <figure className="small-info itemside align-items-center padding-bottom-sm">

                                <Form.Group>
                                    <Form.Check
                                        type='radio'
                                        inline
                                        defaultChecked
                                        checked={radio === 'business-lines'}
                                        value='business-lines'
                                        name='deliveryMethodRadio'
                                        aria-label='deliveryMethod'
                                        id='form-radio-4'
                                        onChange={(e) => setRadio(e.target.value)}
                                    />
                                </Form.Group>

                                <Image className="ordering_img"
                                       src={process.env.PUBLIC_URL + '/assets/images/items/business_lines.jpg'}/>


                                <figcaption className="col-md-6 small-info">
                                    <div className="text-wrap">
                                        <a href="#" id="ordered_link">«Деловые Линии»</a>
                                    </div>
                                    <span className="text-muted">Рассчитывается после оформления заказа и согласования
                                        всех нюансов с нашим менеджером</span>
                                </figcaption>
                            </figure>
                        </Col>

                    </Row>
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
                                           name="client_name"
                                           aria-required
                                           className="form-control input-box rm-border"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group mb-1">
                                    <p className="mb-1 text-left">Контактный телефон</p>
                                    <input id="name" type="tel"
                                           placeholder="Контактный телефон" required
                                           name="client_phone"
                                           aria-required
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
                                           name="client_email"
                                           aria-required
                                           className="form-control input-box rm-border"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <p className="mb-1 text-left">Наименование
                                        организации</p>
                                    <input id="name" type="text"
                                           placeholder="Наименование организации"
                                           name="client_company"
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
                                               name="client_inn"
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
                                           name="client_zip"
                                           className="form-control input-box rm-border"/>
                                </div>
                                <div className="col-md-4">
                                    <p className="mb-1 text-left">Страна</p>
                                    <select id="name" className="form-control input-box rm-border"
                                            name="client_country">
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
                                           name="client_city"
                                           className="form-control input-box rm-border"/>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-8 mb-3">
                            <p className="mb-1 text-left">Улица</p>
                            <input id="name" type="text"
                                   placeholder="Улица"
                                   name="client_street"
                                   className="form-control input-box rm-border"/>
                        </div>

                        <div className="form-group">
                            <div className="col-md-8">
                                <p className="mb-1 text-left">Комментарий к заказу</p>
                                <textarea id="message" type="text"
                                          placeholder="Текст сообщения"
                                          name="client_comment"
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
            </Form>
            {/*</div>*/}
        </Container>
    );
}

export default OrderPage;
