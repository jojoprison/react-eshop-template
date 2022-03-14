import React, {Component} from 'react';
import {Table as BootstrapTable} from 'react-bootstrap';

export class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {catalog: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'catalog')
            .then(response => response.json())
            .then(data => {
                this.setState({catalog: data});
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
        const {catalog} = this.state;

        return (
            <BootstrapTable className="mt-4" striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>TableId</th>
                    <th>TableTitle</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                {catalog.map(product =>
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>Edit / Delete</td>
                    </tr>)}
                </tbody>
            </BootstrapTable>
        )

    }
}
