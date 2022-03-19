import React, {Component, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useCart} from "react-use-cart";




export default function ShoppingCart(props) {
    const [state, setState] = useState(
        {filters: [], searchFilters: {}, products: []}
    );



    const { items } = useCart();
    const runCallback = (cb) => {
        return cb();
    }

    return (
        <div className="padding-y">
            <div className="container-fluid">
                <div className="row ">
                    <aside className="col-lg-9">

                        <div className="card">
                            <table className="table">

                                {
                                    runCallback(() => {
                                        const selects = [];
                                        const shopcart = [];
                                        for (let i = 0; i < 2; i++) {
                                            shopcart.push(
                                                <div className="container-fluid">
                                                    <div className="row ">
                                                        <aside className="col-lg-12">
                                                            <table className="table">
                                                                <tr>
                                                                    <td>
                                                                        <figure className="itemside align-items-top">
                                                                            <div className="aside card">
                                                                                <img src="../assets/images/items/table_template_1.jpg"
                                                                                     className="img-md"/>
                                                                                <div className="container">
                                                                                </div>
                                                                            </div>

                                                                            <figcaption className="info">


                                                                                <div className="row">
                                                                                    <a href="#" className="title align-top font-weight-bolder"
                                                                                       data-abc="true">Пристенный лабораторный стол</a>
                                                                                    <button type="button"
                                                                                            className="btn btn-sm dropdown-toggle
                                                                        dropdown-toggle-split"
                                                                                            data-bs-toggle="collapse"
                                                                                            data-bs-target="#firstProd" aria-expanded="true"
                                                                                            aria-controls="collapseOne">
                                                                                        <span className="sr-only">Toggle Dropdown</span>
                                                                                    </button>
                                                                                </div>
                                                                                <ul className="list-unstyled ">
                                                                                    <div className="card-props card-text">
                                                                                        <span className="font-weight-bold">Артикул:</span>

                                                                                        <a href="#" className="text-muted"><span
                                                                                            className="font-weight-bold ">NL (NeatLab)</span></a>
                                                                                    </div>
                                                                                    <div className="card-props card-text">
                                                                                        <span className="font-weight-bold">Серия:</span>
                                                                                        <span className=" font-weight-bold">NL-10-12-0П</span>
                                                                                    </div>
                                                                                </ul>

                                                                            </figcaption>
                                                                        </figure>

                                                                    </td>
                                                                    <td><select className="form-control">
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                    </select></td>
                                                                    <td>
                                                                        <div className="price-wrap"><var className="price">$10.00</var> <small
                                                                            className="text-muted"> $9.20 each </small></div>
                                                                    </td>
                                                                    <td className="text-right d-none d-md-block">
                                                                        {/*    <a data-original-title="Save to Wishlist" title="" href=""*/}
                                                                        {/*    className="btn btn-light" data-toggle="tooltip" data-abc="true">*/}


                                                                        {/*    <i className="fa fa-heart"></i>*/}
                                                                        {/*</a> */}
                                                                        <a href="" className="btn btn-light" data-abc="true"> Удалить</a></td>
                                                                </tr>


                                                                <div className="container series-img">
                                                                    <div className="accordion" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <div id="firstProd" className="accordion-collapse collapse"
                                                                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body ">
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
                                        }

                                        return [selects, shopcart];
                                    })

                                }



                                <div className="container series-img">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <div id="thirdProd" className="accordion-collapse collapse"
                                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body ">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </table>
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
                                                <dd className="text-right text-dark b ml-3"><strong>12.000Р</strong></dd>
                                            </dl>
                                            <hr/><a href="#" className="btn btn-out btn-primary btn-square btn-main"
                                                    data-abc="true"> Оформить заказ </a> <a href="#"
                                                                                            className="btn btn-out btn-success btn-square btn-main mt-2"
                                                                                            data-abc="true">Продолжить покупки</a>
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
