import React from "react";

const Ad = () => {

    return (
        <section className="section-main bg padding-y">
            <div className="container">
                <div className="row">
                    <aside className="col-md-3">
                        <nav className="card">
                            <ul className="menu-category">
                                <li><a href="#">Best clothes</a></li>
                                <li><a href="#">Automobiles</a></li>
                                <li><a href="#">Home interior</a></li>
                                <li><a href="#">Electronics</a></li>
                                <li><a href="#">Technologies</a></li>
                                <li><a href="#">Digital goods</a></li>
                                <li><a href="#">Online goods</a></li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="col-md-9">
                        <article className="banner-wrap">
                            <img src="assets/images/2.jpg" className="w-100 rounded"/>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ad;
