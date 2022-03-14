import React, {Component} from "react";

export class ProductsDynamic extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="padding-y-sm">
                <div className="container">

                    <header className="section-heading">
                        <a href="#" className="btn nks-btn btn-outline-primary float-right">Сбросить фильтры</a>
                        <h3 className="section-title">Новые модели</h3>
                    </header>

                    <div className="row">

                        {this.props.products.map(product =>

                            // TODO col-lg and etc. for adaptive design (4 to 2 elems in row)
                            <div className="col-md-3">
                                <div className="card card-product-grid" key={product.id}>

                                    <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                                        <div className="img-wrap">
                                            {console.log(process.env.REACT_APP_NKS_PHOTO_PRODUCTS_PATH + product.photo_file_name)}
                                            <img
                                                src={process.env.REACT_APP_NKS_PHOTO_PRODUCTS_PATH + product.photo_file_name}
                                                className="card-img-top"/>
                                        </div>

                                        <div className="card-body">
                                            <h6>
                                                <a href="/product"
                                                   className="title card-title card-link stretched-link">
                                                    {product.title}
                                                </a>
                                            </h6>

                                            <figcaption className="card-props-column">
                                                <div className="card-props card-text">
                                                    <span className="text-muted small">Время создания:</span>
                                                    <span className="text-muted small">{product.time_create}</span>
                                                </div>
                                                <div className="card-props card-text">
                                                    <span
                                                        className="text-muted small">Время последнего обновления:</span>
                                                    <span className="text-muted small">{product.time_update}</span>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>

                                    {/* TODO пофиксить адаптивное отображение элементов bottom-wrap для md! съезжают */}
                                    <div className="bottom-wrap d-flex p-0 align-items-baseline">
                                        <div className="widget-header col-4">
                                            <a href="#" className="icon icon-sm card-link">
                                                <i className="far fa-heart"/></a>
                                        </div>

                                        <div className="price col-4 card-text price-wrap">{product.price}</div>

                                        <div className="widget-header col-4">
                                            <a href="#" className="icon icon-sm card-link">
                                                <i className="fa fa-shopping-cart"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </section>
        )
    }
}
