import React from "react";


const Header = () => {

    return (
        <header className="section-header nks-bg-color">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-baseline">

                        <div className="col-lg-3 col-md-6 p-lg-0 pt-md-2">
                            <a href="/">
                                <img src='assets/images/logos/logo.png' width="60" height="60"
                                     className="logo" alt=""/>
                                <span className="header-text pl-2 text">ООО «НПО НКС групп»</span>
                            </a>
                        </div>

                        <div id="search-header-div"
                             className="col-xxl-5 col-xl-5 col-lg-5 col-md-auto order-lg-1 order-md-last">
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
                            <div className="widgets-wrap float-lg-right">
                                <div className="widget-header mr-3">
                                    <a href="#" className="icon icon-sm rounded-circle border">
                                        <i className="fa fa-shopping-cart"></i></a>
                                    <span className="badge badge-pill badge-danger notify">0</span>
                                </div>
                                <div className="widget-header icontext">
                                    <a href="#" className="icon icon-sm rounded-circle border">
                                        <i className="fa fa-user"></i></a>
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
};

export default Header;
