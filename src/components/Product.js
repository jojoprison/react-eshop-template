import React, {Component} from 'react';
import {Products} from "./Products";

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
        if(JSON.stringify(prevState) !== JSON.stringify(this.state))
            this.refreshList()
    }

    render() {
        // TODO products или catalog оставляем?
        const {product} = this.state;

        return (
            <div>
                <p>Hello world!</p>
            </div>
        )
    }
}