import React from 'react';

export const Ad = () => (
    <section className="">
        <div className="container p-3">
                <h3 className="p-4 banner-alert">
                    В связи с тем, что в стране инфляция , уточняйте цену при заказе!<br/>
                    Все цены примерные и могут незначительно меняться.
                </h3>
            <div className="row">
                <aside className="col-md-3 padding-y">

                    <nav className="card">
                        <ul className="menu-category text-left">
                            <li><a href="#">Столы лабораторные</a></li>
                            <li><a href="#">Тумбы для столов лабораторных</a></li>
                            {/*<li><a href="#">Столы-мойки лабораторные</a></li>*/}
                            <li><a href="#">Шкафы лабораторные</a></li>
                            <li><a href="#">Стеллажи</a></li>
                            <li><a href="#">Стулья, табуреты, кресла</a></li>
                            {/*<li><a href="#">Весовые столы</a></li>*/}
                            {/*<li><a href="#">Стеллажи для выращивания растений</a></li>*/}
                            <li><a href="#">Дополнительное оснащение</a></li>

                            {/* TODO узнать у Эльвиры, нужно ли делать вот эту хню тут или просто в фильтрах отображать*/}

                        </ul>
                    </nav>
                </aside>
                <div className="col-md-9 ">
                    <div className="row">
                        <div className="center-x col-md-12">
                            <h2>Серии</h2>
                        </div>
                    </div>

                    <div className="row">


                        <div className="card series-img col-md-6 border-light">

                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="row">
                                    <div className="img-wrap">
                                        <img src="assets/images/items/nl_photo1.jpg" className="bg-pics img-responsive"/>
                                            <a href="#">NL</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card series-img col-md-6 border-light">
                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="row">
                                    <div className="img-wrap">

                                        <img src="assets/images/items/mml_photo.jpg" className="bg-pics img-responsive"/>
                                        <a href="#">MML</a>
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
