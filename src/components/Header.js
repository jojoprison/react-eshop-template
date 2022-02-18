import React from "react";


const Header = () => {


    return (
        <div className="App">
    <header className="section-header">
        <section className="header-main border-bottom">
            <div className="container">
                <div className="row no-gutters align-items-center">
                    <div className="col-xxl-3 col-lg-4 col-md-2 col-sm-2 col-12">
                        {/*TODO мб убрать navbar-brand*/}
                        <a  href="/">
                            <img src='assets/images/logos/logo.png' width="60" height="60"
                                 className="d-inline-block align-center " alt=""/>
                          <span style={{fontWeight: "600"}}> ООО «НПО НКС групп» </span>
                        </a>
                    </div>


                    <div id="search-header-div" className="col-xxl-5 col-xl-5 col-lg-3 col-md-2 col-sm-1">
                        <form action="#" className="search">
                            <div className="input-group w-100">
                                <input id="search-header" type="text" className="form-control" placeholder="Search"/>
                                <div className="input-group-append">
                                    <button className="btn nks-btn" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-2 col-12">
                        <a className="nav-link contact" href="#">Телефон</a>
                    </div>


                <div className="col-xxl-3 col-lg-4 col-md-4 col-sm-2 col-12">
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
