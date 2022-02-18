import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Products extends Component {

    render() {
        return (
            <section className="section-name padding-y-sm">
                <div className="container">

                    <header className="section-heading">
                        <a href="#" className="btn btn-outline-primary float-right">See all</a>
                        <h3 className="section-title">Популярные продукты</h3>
                    </header>

                    <div className="row">

                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <a href="#" className="img-wrap"> <img src="assets/images/items/1.jpg"/> </a>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">Just another product name</a>
                                    <div className="price mt-1">$179.00</div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <a href="#" className="img-wrap"> <img src="assets/images/items/2.jpg"/> </a>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">Some item name here</a>
                                    <div className="price mt-1">$280.00</div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <a href="#" className="img-wrap"> <img src="assets/images/items/3.jpg"/> </a>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">Great product name here</a>
                                    <div className="price mt-1">$56.00</div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <a href="#" className="img-wrap"> <img src="assets/images/items/4.jpg"/> </a>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">Just another product name</a>
                                    <div className="price mt-1">$179.00</div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <a href="#" className="img-wrap"> <img src="assets/images/items/5.jpg"/> </a>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">Just another product name</a>
                                    <div className="price mt-1">$179.00</div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <a href="#" className="img-wrap"> <img src="assets/images/items/6.jpg"/> </a>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">Some item name here</a>
                                    <div className="price mt-1">$280.00</div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <a href="#" className="img-wrap"> <img src="assets/images/items/7.jpg"/> </a>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">Great product name here</a>
                                    <div className="price mt-1">$56.00</div>
                                </figcaption>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <a href="#" className="img-wrap"> <img src="assets/images/items/9.jpg"/> </a>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">Just another product name</a>
                                    <div className="price mt-1">$179.00</div>
                                </figcaption>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        );
    }
}
