import React from 'react';

export const Ad = () => (
    <section className="">
        <div className="container p-3">
            <h3 className="p-4 banner-alert">
                В связи с тем, что в стране инфляция, цены товаров могут незначительно отличаться.
                <br/>
                Для уточнения звоните по телефону, указанному на
                странице <a className="banner-link" href="/contacts">Контакты</a>.
            </h3>
            <div className="row">
                <aside className="col-md-3 padding-y">

                    <nav className="card">
                        {/*<ul className="menu-category text-left">*/}
                        <ul className="menu-category">
                            <li><a href="/tables" className='link-nks-light'>Столы</a></li>
                            <li><a href="/drawers" className='link-nks-light'>Тумбы</a></li>
                            <li><a href="/chairs" className='link-nks-light'>Стулья, табуреты, кресла</a></li>
                            <li><a href="/stands" className='link-nks-light'>Стойки</a></li>
                            <li><a href="/racks" className='link-nks-light'>Стеллажи</a></li>
                            {/*<li><a href="/filters" className='link-nks'>Шкафы</a></li>*/}
                            <li><a href="/accessories" className='link-nks-light'>Дополнительное оснащение</a></li>
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
                                        <a href="/catalog" className='series-link'>NL</a>
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
                                        <a href="/catalog" className='series-link'>MML</a>
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
