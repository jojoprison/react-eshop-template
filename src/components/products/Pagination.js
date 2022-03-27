import React, {Component} from 'react';
import {Table as BootstrapTable} from 'react-bootstrap';

export class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'api/products')
            .then(response => response.json())
            .then(data => {
                this.setState({catalog: data});
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state))
            this.refreshList()
    }

    render() {
        const {products} = this.state;

        return (
            <BootstrapTable className="mt-4" striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Product_ID</th>
                    <th>TypeID</th>
                    <th>TableTitle</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                {products.map(products  =>
                    <tr key={products.id}>
                        <td>{products.id}</td>
                        <td>{products.type}</td>
                        <td>{products.title}</td>
                        <td>Edit / Delete</td>
                    </tr>)}
                </tbody>
            </BootstrapTable>
        )

    }
}
