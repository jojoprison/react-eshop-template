import React from "react";
import {Link} from "react-router-dom";

export const Footer = ({authToken}) => (
    <footer className="section-footer border-top footer-fixed-bottom">
        <section className="padding-y">

            <div className="container">
                <div className="row">

                    <div className="col-7 offset-1">
                        <aside className="logo_company_footer">
                            <a href="/">
                                <img src={process.env.PUBLIC_URL + '/assets/images/logos/logo-new-2.png'}
                                     width="250px" className="float-lg-left" alt="logo"/>
                            </a>
                        </aside>
                    </div>

                    <div className="col row">
                        <aside className="col">
                            <h6 className="title">Компания</h6>
                            <ul className="list-unstyled col-12">
                                <li>
                                    <a href='/catalog'>Каталог</a>
                                </li>
                                <li><a href="/contacts">Контакты</a></li>
                                {/*<li><a href="#"> <u>Доставка</u> </a></li>*/}
                            </ul>
                        </aside>

                        <aside className="col">
                            <h6 className="title">Профиль</h6>
                            <ul className="list-unstyled col-12">

                                {/* TODO обработать чтоб перебрасывало на главную в случае успеха */}
                                { authToken ? null : <li><a href="/login"> <u>Вход</u> </a></li> }

                                <li><a href="/basket">Корзина</a></li>
                                {/*<li><a href="#"> <u>Избранное</u> </a></li>*/}
                            </ul>
                        </aside>

                        <span className="col-1"/>
                    </div>
                </div>
            </div>
        </section>

        {/*создает второй контейнер*/}
        <div className='container'>
            <div style={{paddingBottom: '1%'}} className="container-fluid">
                <div className="row">

                    <div className="col-sm-3 col-md-6 col-lg-3 align-items-center">
                        <p className="text-muted">2022 ООО «НПО НКС групп»</p>
                    </div>

                    <div style={{textAlign: 'left'}} className="col-sm-9 col-md-6 col-lg-8 text-left">
                        <span><a href="mailto:nks.grupp@bk.ru">nks.grupp@bk.ru |</a></span>
                        {/*TODO скрываем телефон во избежании лишнего*/}
                        {/*<span><a href="tel: +7-910-185-65-91"> +7 (910) 185-65-91 </a></span>*/}
                        <span>| Владимирская обл., г. Александров, ул. Южный проезд, д. 6Б</span>
                    </div>

                </div>
            </div>
        </div>
    </footer>
)
