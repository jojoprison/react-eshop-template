import React from "react";

export const Footer = () => (
    <footer className="section-footer border-top bg">
            <section className="footer-top padding-y">
                <div className='container'>
                <div style={{position: 'relative'}} className="row">




                    <aside className="col-4">
                        <a id='logo_company_footer' href="/">
                            <img src='assets/images/logos/logo-1.png' width="200px"
                                 className="d-inline-block" alt="logo"/>
                        </a>
                    </aside>




                    <aside id='footer_comp' className="col-md col-ld-4 col-12">
                        <h6 className="title">Компания</h6>
                        <ul className="list-unstyled col-12">
                            <li><a href="#"> <u>Каталог</u> </a></li>
                            <li><a href="#"> <u>Контакты</u> </a></li>
                            <li><a href="#"> <u>Доставка</u> </a></li>
                        </ul>
                    </aside>

                    <aside className="col-md col-ld-4 col-12">
                        <h6 className="title">Профиль</h6>
                        <ul className="list-unstyled col-12">
                            <li><a href="#"> <u>Вход</u> </a></li>
                            <li><a href="#"> <u>Регистрация</u> </a></li>
                            <li><a href="#"> <u>Корзина</u> </a></li>
                        </ul>
                    </aside>
                    </div>
                </div>
            </section>

            <section className="footer-bottom row">
                <div className="col-md-2">
                    <p className="text-muted">2022 ООО «НПО НКС групп»</p>
                </div>
                <div className="col-md-8 text-md-center">
                    <span>nks.grupp@bk.ru | </span>
                    <span>+7-910-099-04-46 </span>
                    <span>| г. Александров, ул. Южный проезд, д.6Б</span>
                </div>
            </section>

    </footer>
)
