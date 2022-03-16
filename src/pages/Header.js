import React from "react";

export const Header = () => (
        <header className="section-header nks-bg-color">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-baseline">

                        <div className="col-lg-3 col-md-6 p-lg-0 pt-md-2">
                            <a href="/">
                                <img src='assets/images/logos/logo-new-2.png' width="250px"
                                     className="" alt="logo"/>
                            </a>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-auto m-0 order-lg-1 order-md-last">
                            <form action="#" className="search">
                                <div className="input-group w-100">
                                    <input id="search-header" type="text" className="form-control"
                                           placeholder="Поиск..."/>
                                    <div className="input-group-append">
                                        <button className="btn nks-btn" type="submit">
                                            <i className="fa fa-search"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-xl col-lg-1 col-md order-md-1 p-lg-0">
                            <a className="header-text" href="/contacts">Контакты</a>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md order-md-2 align-self-center p-lg-0 mb-md-3">
                            <div className="widget-header mr-3">
                                <a href="/basket" className="icon icon-sm rounded-circle">
                                    <i className="fa fa-shopping-cart"/></a>
                                <span className="badge badge-pill badge-danger notify">0</span>
                            </div>

                            <div className="widget-header icontext">
                                <a href="#" className="icon icon-sm rounded-circle">
                                    <i className="fa fa-user"/></a>
                                {/*<div className="text mobile-hide ">*/}
                                {/*    <div>*/}
                                {/*        <button className="btn btn-sm nks-btn mb-1" type="submit">*/}
                                {/*            Регистрация*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <button className="btn btn-sm nks-btn" type="submit">*/}
                                {/*            Вход*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </header>
);
