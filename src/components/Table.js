import React, {Component} from 'react';
import {Table as BootstrapTable} from 'react-bootstrap';

export class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {tables: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'table')
            .then(response => response.json())
            .then(data => {
                this.setState({tables: data});
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.refreshList();
    }

    render() {
        const {tables} = this.state;

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
                {tables.map(table =>
                    <tr key={table.id}>
                        <td>{table.id}</td>
                        <td>{table.title}</td>
                        <td>Edit / Delete</td>
                    </tr>)}
                </tbody>
            </BootstrapTable>
        );
    }
}
