import React, {Component} from 'react';
import {Header} from "../pages/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Footer} from "../pages/Footer";

export class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'catalog')
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
        const {catalog} = this.state;

        return (
            <Bootstrap className="mt-4" striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>TableId</th>
                    <th>TableTitle</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                {catalog.map(table =>
                    <tr key={table.id}>
                        <td>{table.id}</td>
                        <td>{table.title}</td>
                        <td>Edit / Delete</td>
                    </tr>)}
                </tbody>
            </Bootstrap>
        )

    }
}
