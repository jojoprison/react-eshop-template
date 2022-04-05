import React, {Component} from 'react';
import Maps from "./Maps";

// TODO переписать все компоненты из классов на функции
export class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {contacts: []}
    }

    render() {
        return (
            <section className="padding-y-sm">
                <div className="container">

                    <div className="product_description">
                        <nav>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item active">Контактная информация</li>
                            </ul>
                        </nav>
                    </div>
                <div className="col-md-12 row">
                    <div className="col-md-5">
                        <div className="card contacts-card">
                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="card-body text-left">
                                    <h2><i className="fas fa-map-marker-alt"/>  |  Как нас найти?</h2>
                                    <p className="text-bolder"/>
                                    <div className="flex-column">
                                        <p className="text-muted">Адрес производства:</p>
                                        <h4>г. Александров, ул. Южный проезд, д. 6Б</h4>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card contacts-card">

                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>
                                <div className="card-body text-left">
                                    <h2><i className="fas fa-phone-alt"/> | Телефон для связи</h2>
                                    <p className="text-bolder"/>
                                    <div className="flex-column">
                                        <p className="text-muted">Номер телефона:</p>
                                        <h4><a href="tel: +7-910-099-04-46" className='link-nks'> +7 (910) 099-04-46 </a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card contacts-card">

                            <div id="linked_to_card_click" style={{transform: "rotate(0)"}}>

                                <div className="card-body text-left">
                                    <h2><i className="fa fa-envelope"/> | Почта</h2>
                                    <p className="text-bolder"/>
                                    <div className="flex-column">
                                        <p className="text-muted">По всем вопросам:</p>
                                        <h4><a href="mailto:nks.grupp@bk.ru" className='link-nks'> nks.grupp@bk.ru</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">

                        <div className="text-right">
                            <Maps/>
                                <a href="/public/assets/docs/card-company.docx" download
                                   className='btn btn-nks btn-lg mr-5'>
                                    Юридическая информация
                                </a>
                        </div>
                    </div>

                </div>
                </div>
            </section>
        )
    }
}
