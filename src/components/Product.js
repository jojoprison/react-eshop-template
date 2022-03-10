import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {product: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'product')
            .then(response => response.json())
            .then(data => {
                this.setState({product: data});
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state))
            this.refreshList()
    }


    render() {
        // TODO products или catalog оставляем?
        const {product} = this.state;
        return (

            <section className="padding-y-sm">
                <div className="container">

                    <header className="section-heading">
                        <h3 className="section-title text-left">Пристенный лабораторный стол 600x600x900</h3>
                    </header>

                    <div className="col-md-3">
                        <div className="card card-product-grid">

                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                                <div className="img-wrap">
                                    <img src="../assets/images/items/table_template_1.jpg" className="card-img-top"/>
                                </div>

                                <div className="col-md">


                                    <div className="slider center">
                                        <div className="preview-carousel row">
                                            <div className="item col">
                                                <img src="../assets/images/items/table_template_1.jpg"
                                                     className="img-fluid"/>
                                            </div>

                                            <div className="item col">
                                                <img src="../assets/images/items/table_template_1.jpg"
                                                     className="img-fluid"/>
                                            </div>

                                            <div className="item col">
                                                <img src="../assets/images/items/table_template_1.jpg"
                                                     className="img-fluid"/>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="product__tab scrolly-hidden mb60">
                        <button className="tab-btn active">
                            <span>Характеристики</span>
                        </button>

                        <button className="tab-btn">
                            <span>Описание</span>
                        </button>

                        <button className="tab-btn">
                            <span>Отзывы</span>
                        </button>
                    </div>

                    <button
                        type="button"
                        className="btn btn-danger btn-floating btn-lg"
                        id="btn-back-to-top"
                    >
                        <i className="fas fa-arrow-up"></i>
                    </button>

                </div>
            </section>
        )
    }
}