import React, {Component, useEffect, useState} from 'react';
import {Button,Image, Col, Container, Form, Row} from "react-bootstrap";
import {useCart} from "react-use-cart";
import {useParams} from "react-router-dom";
import $ from 'jquery';


export default function ShoppingCart(props) {


    const params = useParams();
    const {setItems, items, emptyCart,removeItem, isEmpty, updateItemQuantity,totalItems,
        cartTotal,} = useCart();
    const [product, setProduct] = useState({});
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchInitData() {
            // const resProduct = await fetch(process.env.REACT_APP_NKS_API + `product/${params.id}`);
            // const dataProduct = await resProduct.json();

            // setProduct(dataProduct);
            // setLoading(false);
        }

        fetchInitData();
    }, []);






    const runCallback = (cb) => {
        return cb();
    }
    if(isEmpty) return <div className="empty-page"><h1 className="text-center">Your Cart is Empty</h1></div>
    function renderCartItems() {
        if (items) {

            // setLoading(false);
            return(
                <table className="table">


                    {

                        runCallback(() => {
                            const shopcart = [];
                            items.map((cartItem, index) => {


                                shopcart.push(
                                    <div key={'cart_item' + index} className="container-fluid">
                                        <div className="row">
                                            <aside className="col-lg-12">
                                                <table className="table">
                                                    <tr>
                                                        <td>
                                                            <figure className="itemside align-items-top">
                                                                <div className="aside">
                                                                    <img src={process.env.REACT_APP_NKS_PHOTO_PRODUCTS_PATH + cartItem.photo_file_name}
                                                                    className="img-md rounded card"/>
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
                                                                    <ul className="list-unstyled col-md-7">
                                                                        <div
                                                                            className="card-props card-text">
                                                                                    <span className="font-weight-bold">Артикул:</span>

                                                                            <a href="#"
                                                                               className="text-muted"><span
                                                                                className="font-weight-bold ">{cartItem.article}</span></a>
                                                                        </div>
                                                                        <div
                                                                            className="card-props card-text">
                                                                                        <span
                                                                                            className="font-weight-bold">Серия:</span>
                                                                            <span
                                                                                className=" font-weight-bold">{cartItem.series}</span>
                                                                        </div>
                                                                    </ul>

                                                                </figcaption>
                                                            </figure>

                                                        </td>
                                                        <td>

                                                            <div className="quantity_inner">
                                                                <button id={'cart_item_quantity_minus_' + cartItem.id}
                                                                        onClick ={() => updateItemQuantity(cartItem.id, cartItem.quantity-1)}
                                                                            className="bt_minus">
                                                                    <svg viewBox="0 0 24 24">
                                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                                <button type="button" disabled
                                                                        className="btn btn-outline-dark"
                                                                >  {cartItem.quantity}</button>
                                                                <button  onClick ={() => updateItemQuantity(cartItem.id, cartItem.quantity+1)}
                                                                    id={'cart_item_quantity_plus_' + cartItem.id}
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
                                                                name="item_price">{cartItem.price} ₽</var>
                                                            </div>
                                                        </td>
                                                        <td className="text-right d-none d-md-block">
                                                            {/*    <a data-original-title="Save to Wishlist" title="" href=""*/}
                                                            {/*    className="btn btn-light" data-toggle="tooltip" data-abc="true">*/}


                                                            {/*    <i className="fa fa-heart"></i>*/}
                                                            {/*</a> */}
                                                            <button onClick={() => removeItem(cartItem.id)}
                                                                className="btn btn-light"
                                                               data-abc="true"> Удалить</button>
                                                        </td>
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

                            // console.log(shopcart);
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
                                        <div className="card-body">

                                            <dl className="dlist-align">
                                                <dt className="text-left">Товаров в корзине:</dt>
                                                <dd className="text-right ml-3">{totalItems}</dd>
                                            </dl>
                                            <dl className="dlist-align">
                                                <dt className="text-left">Стоимость:</dt>
                                                <dd id="total_price" name="total_price"
                                                    className="text-right text-dark b ml-3"><strong>{cartTotal} ₽</strong>
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
                                    </form>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
    )
}
