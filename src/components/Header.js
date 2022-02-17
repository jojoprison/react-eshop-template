import React from "react";


const Header = () => {


    return (
        <div className="App">
    <header className="section-header">
        <section className="header-main border-bottom">
            <div className="container containerMain">
                <div className="row align-items-center">
                        <a className="navbar-brand nav-item" href="#">
                            <img src='assets/images/logos/logo.png' width="60" height="60"
    className="d-inline-block align-center " alt=""/>
                              ООО «НПО НКС групп» </a>
                    <div className="col-lg-3 col-sm-9">
                        <form action="#" className="search">
                            <div className="input-group w-100">
                                <input id="search-header" type="text" className="form-control" placeholder="Search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                        <a className="nav-link contact" href="#">Телефон</a>
                <div className="col-lg-4 col-sm-6 col-12">
                        <div className="widgets-wrap float-md-right rightside">
                            <div className="widget-header  mr-3">
                                <a href="#" className="icon icon-sm rounded-circle border"><i
                                    className="fa fa-shopping-cart"></i></a>
                                <span className="badge badge-pill badge-danger notify">0</span>
                            </div>
                            <div className="widget-header icontext">
                                <a href="#" className="icon icon-sm rounded-circle border"><i
                                    className="fa fa-user"></i></a>
                                <div className="text">
                                    <span className="text-black-50">Welcome!</span>
                                    <div>
                                        <a href="#">Sign in</a> |
                                        <a href="#"> Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>
</div>
    );
};

export default Header;
