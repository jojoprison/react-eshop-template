import React from "react";

const Footer = () => {

    return (

        <footer className="section-footer border-top bg">
            <div className="container">
                <section className="footer-top  padding-y">
                    <div style={{position: 'relative'}} className="row">
                        {/*//*/}
                        <a id='logo_company_footer' href="/">
                            <img src='assets/images/logos/logo.png' width="60" height="60"
                                 className="d-inline-block align-center col-3" alt="logo"/>
                            <span style={{fontWeight: "600"}}> ООО «НПО НКС групп» </span>
                        </a>
                        {/*//*/}
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
                                <li><a href="#"> <u>Войти в профиль</u> </a></li>
                                <li><a href="#"> <u>Зарегестрироваться</u> </a></li>
                                <li><a href="#"> <u>Моя корзина</u> </a></li>
                            </ul>
                        </aside>
                    </div>
                </section>
            </div>
        </footer>


    );
};
export default Footer;
