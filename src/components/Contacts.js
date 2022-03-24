import React, {Component} from 'react';
import {Maps} from "../pages/Maps";
import {Link} from "react-router-dom";

// TODO переписать все компоненты из классов на функции
export class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {contacts: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'contacts')
            .then(response => response.json())
            .then(data => {
                this.setState({contacts: data});
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(JSON.stringify(prevState) !== JSON.stringify(this.state))
            this.refreshList()
    }

    render() {
        return (
            <section className="padding-y-sm">
                <div className="container">

                    <div className="product_description">
                        <nav>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="./">Главная</a></li>
                                <li className="breadcrumb-item active">Контактная информация</li>
                            </ul>
                        </nav>
                    </div>
                <div className="col-md-12 row">
                    <div className="col-md-5">
                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="card contacts-card card-body text-left">
                                    <h2><i class="fas fa-map-marker-alt"></i>  |  Как нас найти?</h2>
                                    <p className="text-bolder"></p>
                                    <div className="flex-column">
                                        <p className="text-muted">Адрес производства:</p>
                                        <h4>г. Александров, ул. Южный проезд, д.6Б</h4>
                                    </div>
                                </div>
                            </div>


                        <div className="card contacts-card">

                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="card-body text-left">
                                    <h2><i className="fas fa-phone-alt"></i> | Телефон для связи</h2>
                                    <p className="text-bolder"></p>
                                    <div className="flex-column">
                                        <p className="text-muted">Номер телефона:</p>
                                        <h4><a href="tel: +7-910-099-04-46"> +7 (910) 099-04-46 </a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card contacts-card">

                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                                <div className="card-body text-left">
                                    <h2><i className="fa fa-envelope"></i> | Почта</h2>
                                    <p className="text-bolder"></p>
                                    <div className="flex-column">
                                        <p className="text-muted">По всем вопросам:</p>
                                        <h4><a href="mailto:nks.grupp@bk.ru"> nks.grupp@bk.ru</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">

                        <div className="text-right">
                            <Maps/>
                            <button type="button" className="btn btn-danger download-info btn-lg mr-5">
                                <a href="assets/docs/card-company.docx" download>Юридическая информация</a>
                            </button>
                        </div>
                    </div>

                </div>
                </div>
            </section>
        )

        // return (
        //     <BootstrapTable className="mt-4" striped bordered hover size="sm">
        //         <thead>
        //         <tr>
        //             <th>TableId</th>
        //             <th>TableTitle</th>
        //             <th>Options</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         {catalog.map(product =>
        //             <tr key={product.id}>
        //                 <td>{product.id}</td>
        //                 <td>{product.title}</td>
        //                 <td>Edit / Delete</td>
        //             </tr>)}
        //         </tbody>
        //     </BootstrapTable>

    }
}
