import React from "react";

export const Footer = () => (
    <footer className="section-footer border-top footer-fixed-bottom">
        <section className="footer-top padding-y">
            <div className='container'>
                 <div className="row position-relative">

                    <a className= 'logo_company_footer col-lg-4 ' href="/">
                        <img src='assets/images/logos/logo-1.png' width="200px"
                             className="d-inline-block" alt="logo"/>
                    </a>



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

        <section className="footer-bottom row m-0">
            <div className="col-md-3">
                <p className="text-muted">2022 ООО «НПО НКС групп»</p>
            </div>
            <div className="col-md-6">
                <span><a href="mailto:zhenyaplatonov1@mail.ru">zhenyaplatonov1@mail.ru</a></span>
                <span><a href="tel: +79010485183 ">+7 (901) 048-51-83</a></span>'>
                <span>| г. Александров, ул. Южный проезд, д.6Б</span>
            </div>
        </section>

    </footer>
)
