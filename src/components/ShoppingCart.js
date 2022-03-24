import React, {Component, useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useCart} from "react-use-cart";
import $ from 'jquery';


export default function ShoppingCart(props) {
    // id={'cart_item_quantity_plus_' + cartItem.id}

    // const shopCart = [];
    // items.map((filterSelect, index) =>
        // TODO col-lg and etc. for adaptive design (4 to 2 elems in row)
    //     shopCart.push(
    //         <div className="col-md-3" key={filterSelect.product_prop + '_' + index}>
    //             <div>
    //                 name={filterSelect.product_prop}
    //                 quantity={}
    //                 price={}
    //                 features={}
    //             </div>
    //             />
    //         </div>)
    // );


    const {setItems, items, emptyCart} = useCart();


    // передавать вторым аргументом state, при изменении которого должна вызываться функция чтоб не было лишних
    useEffect(() => {
        const cartItems = [
            {
                id: '1',
                title: "Стол",
                depth: 900,
                width: 600,
                height: 900,
                price: 1,
            },
            {
                id: '125',
                title: "Стеллаж",
                depth: 333,
                width: 100,
                height: 800,
                price: 788,
            },
        ];



        setItems(cartItems);
    }, [])

    console.log(items);


    const runCallback = (cb) => {
        return cb();
    }

    function renderCartItems() {
        if (items) {

            // setLoading(false);
            return(
                <table className="table">


                    {

                        runCallback(() => {
                            const shopcart = [];
                            items.map((cartItem, index) => {


                                $('#cart_item_quantity_plus_' + cartItem.id).unbind('click').bind('click', function () {
                                    let value = $('#number_quantity_' + cartItem.id).val();

                                    if (value < 5) {
                                        value++;
                                        $('#number_quantity_' + cartItem.id).val(value);
                                    }
                                });

                                $('#cart_item_quantity_minus_' + cartItem.id).unbind('click').bind('click', function () {
                                    let value = $('#number_quantity_' + cartItem.id).val();

                                    if (value > 1) {
                                        value--;
                                        $('#number_quantity_' + cartItem.id).val(value);
                                    }
                                });

                                $('#number_quantity_' + cartItem.id).bind('click', function () {
                                    if (this.value > 0) {
                                        if (this.value >= ($('.quantity'))){
                                            this.value = 5;
                                        }
                                    }
                                });


                                shopcart.push(
                                    <div key={'cart_item' + index} className="container-fluid">
                                        <div className="row">
                                            <aside className="col-lg-12">
                                                <table className="table">
                                                    <tr>
                                                        <td>
                                                            <figure className="itemside align-items-top">
                                                                <div className="aside card">
                                                                    <img
                                                                        src="../assets/images/items/table_template_1.jpg"
                                                                        className="img-md"/>
                                                                    <div className="container">
                                                                    </div>
                                                                </div>

                                                                <figcaption className="info">


                                                                    <div className="row">
                                                                        <a href="#"
                                                                           className="title align-top font-weight-bolder"
                                                                           data-abc="true">{cartItem.title}</a>
                                                                        <button type="button"
                                                                                className="btn btn-sm dropdown-toggle
                                                                        dropdown-toggle-split"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target={'#description_' + cartItem.id}
                                                                                aria-expanded="true"
                                                                                aria-controls="collapseOne">
                                                                            <span className="sr-only">Toggle Dropdown</span>
                                                                        </button>
                                                                    </div>
                                                                    <ul className="list-unstyled ">
                                                                        <div
                                                                            className="card-props card-text">
                                                                                    <span className="font-weight-bold">Артикул:</span>

                                                                            <a href="#"
                                                                               className="text-muted"><span
                                                                                className="font-weight-bold ">NL (NeatLab)</span></a>
                                                                        </div>
                                                                        <div
                                                                            className="card-props card-text">
                                                                                        <span
                                                                                            className="font-weight-bold">Серия:</span>
                                                                            <span
                                                                                className=" font-weight-bold">NL-10-12-0П</span>
                                                                        </div>
                                                                    </ul>

                                                                </figcaption>
                                                            </figure>

                                                        </td>
                                                        <td>

                                                            <div className="quantity_inner">
                                                                <button id={'cart_item_quantity_minus_' + cartItem.id}
                                                                        className="bt_minus">
                                                                    <svg viewBox="0 0 24 24">
                                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                                <input id={'number_quantity_' + cartItem.id} type="text"
                                                                       value="1" size="2" className="quantity"
                                                                        name="quantity_prod"/>
                                                                <button id={'cart_item_quantity_plus_' + cartItem.id}
                                                                        className="bt_plus">
                                                                    <svg viewBox="0 0 24 24">
                                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                            </div>

                                                        </td>
                                                        <td>
                                                            <div className="price-wrap"><var
                                                                className="item_price" id={'item_price_' + cartItem.id}
                                                                name="item_price">{cartItem.price}</var>
                                                            </div>
                                                        </td>
                                                        <td className="text-right d-none d-md-block">
                                                            {/*    <a data-original-title="Save to Wishlist" title="" href=""*/}
                                                            {/*    className="btn btn-light" data-toggle="tooltip" data-abc="true">*/}


                                                            {/*    <i className="fa fa-heart"></i>*/}
                                                            {/*</a> */}
                                                            <a href="" className="btn btn-light"
                                                               data-abc="true"> Удалить</a></td>
                                                    </tr>


                                                    <div className="container series-img">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <div id={'description_' + cartItem.id}
                                                                     className="accordion-collapse collapse"
                                                                     aria-labelledby="headingOne"
                                                                     data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div
                                                                            className="card-props card-text">
                                                                                        <span
                                                                                            className="font-weight-bolder ">Ширина</span>
                                                                            <span
                                                                                className="font-weight-bold">{cartItem.width}</span>
                                                                        </div>
                                                                        <div
                                                                            className="card-props card-text">
                                                                                        <span
                                                                                            className="font-weight-bolder">Глубина</span>
                                                                            <span
                                                                                className="font-weight-bold">{cartItem.depth}</span>
                                                                        </div>
                                                                        <div
                                                                            className="card-props card-text">
                                                                                        <span
                                                                                            className="font-weight-bolder">Высота</span>
                                                                            <span
                                                                                className="font-weight-bold">{cartItem.height}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </table>
                                            </aside>
                                        </div>
                                    </div>
                                );


                            })

                            console.log(shopcart);
                            return shopcart;
                        })
                    }
                </table>
            );
        }

        return null;
    }



    return (
        <div className="padding-y">
            <div className="container-fluid">
                <div className="row ">
                    <aside className="col-lg-9">

                        <div className="card">
                            { renderCartItems() }
                        </div>

                    </aside>
                    <aside className="col-lg-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <form>
                                    <div className="card">
                                        <div className="card-body">

                                            <dl className="dlist-align">
                                                <dt className="text-left">Товаров в корзине:</dt>
                                                <dd className="text-right ml-3">3</dd>
                                            </dl>
                                            <dl className="dlist-align">
                                                <dt className="text-left">Стоимость:</dt>
                                                <dd id="total_price" name="total_price"
                                                    className="text-right text-dark b ml-3"><strong>12.000</strong>
                                                </dd>
                                            </dl>
                                            <hr/>
                                            <div className="row">
                                                    <a href="/ordering" className="btn btn-out btn-primary btn-square
                                                    btn-main mb-2" data-abc="true"> Оформить заказ </a>

                                                    <button onClick={() => emptyCart()} className="btn btn-out btn-main
                                                    btn-success">Очистить корзину</button>
                                            </div>

                                        </div>
                                    </div>

                                    {/*<div className="form-check text-left">*/}
                                    {/*    <input className="form-check-input" type="radio" name="flexRadioDefault"*/}
                                    {/*           id="flexRadioDefault1" checked/>*/}
                                    {/*    <label className="form-check-label" htmlFor="flexRadioDefault1">*/}
                                    {/*        Самовывоз*/}
                                    {/*    </label>*/}
                                    {/*</div>*/}

                                    {/*<div className="form-check text-left">*/}
                                    {/*    <input className="form-check-input" type="radio" name="flexRadioDefault"*/}
                                    {/*           id="flexRadioDefault2" />*/}
                                    {/*    <label className="form-check-label" htmlFor="flexRadioDefault2">*/}
                                    {/*        Доставка*/}
                                    {/*    </label>*/}
                                    {/*</div>*/}

                                </form>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    )
}
