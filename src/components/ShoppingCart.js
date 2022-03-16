import React, {Component} from 'react';


export class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {product: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'basket')
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
            <div className="container-fluid">
                <div className="row">
                    <aside className="col-lg-9">
                        <div className="card">
                            <div className="table-responsive">
                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                    <tr className="small text-uppercase">
                                        <th scope="col">Продукт</th>
                                        <th scope="col" width="120">Количество</th>
                                        <th scope="col" width="120">Стоимость</th>
                                        <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <figure className="itemside align-items-center">
                                                <div className="aside"><img src="https://i.imgur.com/1eq5kmC.png"
                                                                            className="img-sm"/></div>
                                                <figcaption className="info"><a href="#" className="title text-dark"
                                                                                data-abc="true">Tshirt with round
                                                    nect</a>
                                                    <p className="text-muted small">SIZE: L <br/> Brand: MAXTRA</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td><select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select></td>
                                        <td>
                                            <div className="price-wrap"><var className="price">$10.00</var> <small
                                                className="text-muted"> $9.20 each </small></div>
                                        </td>
                                        <td className="text-right d-none d-md-block">
                                            <a data-original-title="Save to Wishlist" title="" href=""
                                            className="btn btn-light" data-toggle="tooltip" data-abc="true">

                                            <i className="fa fa-heart"></i>
                                        </a> <a href="" className="btn btn-light" data-abc="true"> Удалить</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <figure className="itemside align-items-center">
                                                <div className="aside"><img src="https://i.imgur.com/hqiAldf.jpg"
                                                                            className="img-sm"/></div>
                                                <figcaption className="info"><a href="#" className="title text-dark"
                                                                                data-abc="true">Flower Formal
                                                    T-shirt</a>
                                                    <p className="text-muted small">SIZE: L <br/> Brand: ADDA</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td><select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select></td>
                                        <td>
                                            <div className="price-wrap"><var className="price">$15</var> <small
                                                className="text-muted"> $12 each </small></div>
                                        </td>
                                        <td className="text-right d-none d-md-block"><a
                                            data-original-title="Save to Wishlist" title="" href=""
                                            className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i
                                            className="fa fa-heart"></i></a> <a href=""
                                                                                className="btn btn-light btn-round"
                                                                                data-abc="true"> Удалить</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <figure className="itemside align-items-center">
                                                <div className="aside"><img src="https://i.imgur.com/UwvU0cT.jpg"
                                                                            className="img-sm"/></div>
                                                <figcaption className="info"><a href="#" className="title text-dark"
                                                                                data-abc="true">Printed White Tshirt</a>
                                                    <p className="small text-muted">SIZE:M <br/> Brand: Cantabil</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td><select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select></td>
                                        <td>
                                            <div className="price-wrap"><var className="price">$9</var> <small
                                                className="text-muted"> $6 each</small></div>
                                        </td>
                                        <td className="text-right d-none d-md-block"><a
                                            data-original-title="Save to Wishlist" title="" href=""
                                            className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i
                                            className="fa fa-heart"></i></a> <a href=""
                                                                                className="btn btn-light btn-round"
                                                                                data-abc="true"> Удалить</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </aside>
                    <aside className="col-lg-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <form>
                                    <div className="card">
                                        <div className="card-body">
                                            <dl className="dlist-align">
                                                <dt>Total price:</dt>
                                                <dd className="text-right ml-3">$69.97</dd>
                                            </dl>
                                            <dl className="dlist-align">
                                                <dt>Discount:</dt>
                                                <dd className="text-right text-danger ml-3">- $10.00</dd>
                                            </dl>
                                            <dl className="dlist-align">
                                                <dt>Total:</dt>
                                                <dd className="text-right text-dark b ml-3"><strong>$59.97</strong></dd>
                                            </dl>
                                            <hr/><a href="#" className="btn btn-out btn-primary btn-square btn-main"
                                                    data-abc="true"> Оформить заказ </a> <a href="#"
                                                                                           className="btn btn-out btn-success btn-square btn-main mt-2"
                                                                                           data-abc="true">Продолжить покупки</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        )
    }
}
