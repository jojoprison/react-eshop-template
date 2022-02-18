import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterHTML = () => {

    return (
        <footer className="section-footer border-top bg">
            <div className="container">

                <section className="footer-top  padding-y">
                    <div style={{position: 'relative'}} className="row">

                        <a id='logo_company_footer' href="/">
                            <img src='assets/images/logos/logo.png' width="60" height="60"
                                 className="d-inline-block align-center col-3" alt="logo"/>
                            <span style={{fontWeight: "600"}}> ООО «НПО НКС групп» </span>
                        </a>

                        <aside className="col-md col-ld-4 col-12">
                            <h6 className="title">Компания</h6>
                            <ul className="list-unstyled col-12">
                                <li><a href="#"> <u>Контакты</u> </a></li>
                                <li><a href="#"> <u>Доставка</u> </a></li>
                                <li><a href="#"> <u>Каталог</u> </a></li>
                            </ul>
                        </aside>

                        <aside className="col-md col-ld-4 col-12">
                            <h6 className="title">Профиль</h6>
                            <ul className="list-unstyled">
                                <li><a href="#"> <u>Вход</u> </a></li>
                                <li><a href="#"> <u>Регистрация</u> </a></li>
                                <li><a href="#"> <u>Корзина</u> </a></li>
                            </ul>
                        </aside>

                    </div>
                </section>

                <section className="footer-bottom row">
                    <div className="col-md-2">
                        <p className="text-muted"> 2021 Company name </p>
                    </div>
                    <div className="col-md-8 text-md-center">
                        <span className="px-2">info@com</span>
                        <span className="px-2">+000-000-0000</span>
                        <span className="px-2">Street name 123, ABC</span>
                    </div>
                    <div className="col-md-2 text-md-right text-muted">
                        <i className="fab fa-lg fa-cc-visa"></i>
                        <i className="fab fa-lg fa-cc-paypal"></i>
                        <i className="fab fa-lg fa-cc-mastercard"></i>
                    </div>
                </section>

            </div>
        </footer>
    );
};

export default FooterHTML;

export class Footer extends Component {

    render() {
        return (
            <footer className="section-footer border-top bg">
                <div className="container">

                    <section className="footer-top  padding-y">
                        <div style={{position: 'relative'}} className="row">

                            <a id='logo_company_footer' href="/">
                                <img src='assets/images/logos/logo.png' width="60" height="60"
                                     className="d-inline-block align-center col-3" alt="logo"/>
                                <span style={{fontWeight: "600"}}> ООО «НПО НКС групп» </span>
                            </a>

                            <aside className="col-md col-ld-4 col-12">
                                <h6 className="title">Компания</h6>
                                <ul className="list-unstyled col-12">
                                    <li><a href="#"> <u>Контакты</u> </a></li>
                                    <li><a href="#"> <u>Доставка</u> </a></li>
                                    <li><a href="#"> <u>Каталог</u> </a></li>
                                </ul>
                            </aside>

                            <aside className="col-md col-ld-4 col-12">
                                <h6 className="title">Профиль</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#"> <u>Вход</u> </a></li>
                                    <li><a href="#"> <u>Регистрация</u> </a></li>
                                    <li><a href="#"> <u>Корзина</u> </a></li>
                                </ul>
                            </aside>

                        </div>
                    </section>

                    <section className="footer-bottom row">
                        <div className="col-md-2">
                            <p className="text-muted"> 2021 Company name </p>
                        </div>
                        <div className="col-md-8 text-md-center">
                            <span className="px-2">info@com</span>
                            <span className="px-2">+000-000-0000</span>
                            <span className="px-2">Street name 123, ABC</span>
                        </div>
                        <div className="col-md-2 text-md-right text-muted">
                            <i className="fab fa-lg fa-cc-visa"/>
                            <i className="fab fa-lg fa-cc-paypal"/>
                            <i className="fab fa-lg fa-cc-mastercard"/>
                        </div>
                    </section>

                </div>
            </footer>
        );
    }
}
