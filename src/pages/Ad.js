import React from 'react';

export const Ad = () => (
    <section className="">
        <div className="container p-3">
            <h3 className="p-4 banner-alert">
                В связи с тем, что в стране инфляция, цены изделий могут незначительно отличаться.
                <br/>
                Для уточнения звоните по телефону, указанному на странице Контакты.
            </h3>
            <div className="row">
                <aside className="col-md-3 padding-y">

                    <nav className="card">
                        {/*<ul className="menu-category text-left">*/}
                        <ul className="menu-category">
                            <li><a href="/filters">Столы</a></li>
                            <li><a href="/filters">Тумбы</a></li>
                            <li><a href="/filters">Стулья, табуреты, кресла</a></li>
                            <li><a href="/filters">Стойки</a></li>
                            <li><a href="/filters">Стеллажи</a></li>
                            {/*<li><a href="/filters">Шкафы</a></li>*/}
                            <li><a href="/filters">Дополнительное оснащение</a></li>
                        </ul>
                    </nav>
                </aside>
                <div className="col-md-9 ">
                    <div className="row">
                        <div className="center-x col-md-12">
                            <h1>Серии</h1>
                        </div>
                    </div>

                    <div className="row">


                        <div className="card series-img col-md-6 border-light">

                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="row">
                                    <div className="img-wrap">
                                        <img src={process.env.PUBLIC_URL + 'assets/images/items/nl_photo1.jpg'}
                                             className="bg-pics img-responsive"/>
                                        <a href="/filters">NL</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card series-img col-md-6 border-light">
                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="row">
                                    <div className="img-wrap">

                                        <img src={process.env.PUBLIC_URL + 'assets/images/items/mml_photo.jpg'}
                                             className="bg-pics img-responsive"/>
                                        <a href="/filters">MML</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
