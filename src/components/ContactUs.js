import React, {Component} from 'react';


export class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {product: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'contact')
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
            <div className="bg-light">
                <div className="container ">
                    <div className="row justify justify-content-center ">
                        <div className="col-11 col-md-8 col-lg-6 col-xl-5">
                            <form className="" onSubmit="event.preventDefault()">
                                <div className="modal-page bg-dark modal-border">
                                    <div className="row mt-0">
                                        <div className="col-md-12 ">
                                            <h4 className="">Быстрый заказ</h4>
                                            <p> Сделать тут ,чтобы выводил название продукта, на котором находится пользователь</p>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <div className="col-md-12 mb-0">
                                            <p className="mb-1 text-left">Имя Фамилия</p>
                                            <input id="name" type="text"
                                                   placeholder="Ваше Имя и Фамилия"
                                                   name="name"
                                                   className="form-control input-box rm-border"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <div className="col-md-12 mb-0">
                                            <p className="mb-1 text-left">Контактный телефон</p>
                                            <input id="name" type="tel" pattern="[0-9]{10}"
                                                   placeholder="Контактный телефон"
                                                   name="phone"
                                                   className="form-control input-box rm-border"/>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-3">
                                        <div className="col-md-12 mb-0">
                                            <p className="mb-1 text-left">Email</p>
                                            <input id="e-mail" type="email"
                                                 placeholder="Ваша электронная почта"
                                                 name="email"
                                                 className="form-control input-box rm-border"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12 mb-2">
                                                <p className="mb-1 text-left">Message</p>
                                            <textarea id="message" type="text"
                                                  placeholder="Текст сообщения"
                                                  name="message"
                                                  className="form-control input-box rm-border">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row justify-content-center mb-0">
                                        <div className="col-md-12 px-3">
                                            <input type="submit" value="Отправить"
                                                   className="btn btn-block btn-purple rm-border"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
