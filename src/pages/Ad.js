import React from 'react';

export const Ad = () => (
    <section className="bg padding-y">
        <div className="container">
            <div className="row">
                <aside className="col-md-3">
                    <nav className="card">
                        <ul className="menu-category">
                            <li><a href="#">Столы лабораторные</a></li>
                            <li><a href="#">Тумбы для столов лабораторных</a></li>
                            <li><a href="#">Столы-мойки лабораторные</a></li>
                            <li><a href="#">Шкафы лабораторные</a></li>
                            <li><a href="#">Стеллажи</a></li>
                            <li><a href="#">Стулья, табуреты, кресла</a></li>
                            <li><a href="#">Весовые столы</a></li>
                            <li><a href="#">Стеллажи для выращивания растений</a></li>
                            <li><a href="#">Дополнительное оснащение</a></li>

                            {/* TODO узнать у Эльвиры, нужно ли делать вот эту хню тут или просто в фильтрах отображать*/}
                            <li><a href="#">MML</a></li>
                            <li><a href="#">NL</a></li>
                        </ul>
                    </nav>
                </aside>
                <div className="col-md-9">
                    <div className="banner-wrap">
                        <img src="assets/images/ad_element_template_1.jpg" className="w-100 rounded"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
