import React from 'react';

export const Ad = () => (
    <section className="">
        <div className="container ">
            <div className="row">
                <aside className="col-md-3 bg padding-y">
                    <nav className="card">
                        <ul className="menu-category">
                            <li><a href="#">Столы лабораторные</a></li>
                            <li><a href="#">Тумбы для столов лабораторных</a></li>
                            {/*<li><a href="#">Столы-мойки лабораторные</a></li>*/}
                            <li><a href="#">Шкафы лабораторные</a></li>
                            <li><a href="#">Стеллажи</a></li>
                            <li><a href="#">Стулья, табуреты, кресла</a></li>
                            {/*<li><a href="#">Весовые столы</a></li>*/}
                            <li><a href="#">Стеллажи для выращивания растений</a></li>
                            <li><a href="#">Дополнительное оснащение</a></li>

                            {/* TODO узнать у Эльвиры, нужно ли делать вот эту хню тут или просто в фильтрах отображать*/}

                        </ul>
                    </nav>
                </aside>
                <div className="col-md-9 jtpad">
                        <div className="center-x card card-product-grid col-md-2 border-gray">
                            <h2>Серии</h2>
                        </div>

                    <div className="row">


                        <div className="card card-product-grid col-md-6 border-light">

                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="row">
                                    <div className="text-image">
                                        <img src="assets/images/items/nl_photo1.jpg" className="bg-pics img-responsive"/>
                                            <a href="#">NL</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card card-product-grid col-md-6 border-light">
                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="row">
                                    <div className="text-image">
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
