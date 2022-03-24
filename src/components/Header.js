import React from "react";
import {useCart} from "react-use-cart";
import {Button} from "react-bootstrap";

const Header = () => {
    const {totalItems, emptyCart} = useCart();

    return (
        <header className="section-header nks-bg-color">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-baseline">

                        <div className="col-lg-3 col-md-6 p-lg-0 pt-md-2">
                            <a href="/">
                                {/* TODO BUG картинка подгружается после рендера всего остального в хедере */}
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
                                <span className="badge badge-pill badge-danger notify">{totalItems}</span>
                            </div>

                            <div className="widget-header icontext">
                                <a href="#" className="icon icon-sm rounded-circle">
                                    <i className="fa fa-user"/></a>
                            </div>

                            <Button variant='link' size='lg' title='Очистить'
                                    onClick={() => emptyCart()}>
                                <i className="fa fa-shopping-cart"/>
                            </Button>
                        </div>

                    </div>
                </div>
            </section>
        </header>
    );
};

export default React.memo(Header);
