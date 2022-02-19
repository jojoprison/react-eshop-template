import React from "react";

export const Header = () => (
        <header className="section-header nks-bg-color">
            <section className="header-main border-bottom">
                <div className="align-items-baseline">
                    <div className="container">



                        <div id="search-header-div"
                             className="col-xxl-5 col-xl-5 col-lg-5 col-md-auto m-0 order-lg-1 order-md-last">
                            <form action="#" className="search">
                                <div className="input-group w-100">
                                    <input id="search-header" type="text" className="form-control"
                                           placeholder="Search"/>
                                    <div className="input-group-append">
                                        <button className="btn nks-btn" type="submit">
                                            <i className="fa fa-search"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>


                        <div className="col-lg-1 col-md order-md-1 p-lg-0">
                            <a className="header-text" href="#">Контакты</a>
                        </div>

                        <div id="widgets_header"
                             className="col-xl-3 col-lg col-md order-md-2 align-self-start p-lg-0 mb-md-3">
                            <div className="widgets-wrap">
                                <div className="widget-header mr-3">
                                    <a href="#" className="icon icon-sm rounded-circle border">
                                        <i className="fa fa-shopping-cart"/></a>
                                    <span className="badge badge-pill badge-danger notify">0</span>
                                </div>
                                <div className="widget-header icontext">
                                    <a href="#" className="icon icon-sm rounded-circle border">
                                        <i className="fa fa-user"/></a>
                                    <div className="text mobile-hide ">
                                        <div>
                                            <button className="btn btn-sm nks-btn mb-1" type="submit">
                                                Регистрация
                                            </button>
                                        </div>
                                        <div>
                                            <button className="btn btn-sm nks-btn" type="submit">
                                                Вход
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </header>
);
