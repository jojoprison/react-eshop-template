import React, {Component, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {ProductsDynamic} from "./ProductsDynamic";


export class CatalogueFilters extends Component {

    constructor(props) {
        super(props);
        this.state = {filters: [], searchFilters: {}, products: [], selectedValue: 'ALL'}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_NKS_API + "products/filtersAll")
            .then((res) => res.json())
            .then((data) => {
                this.setState({filters: data});
            })
    }

    handleSubmit(event) {
        event.preventDefault();

        const convertedQueryParams = `photo=${this.state.selectedValue}`;

        fetch(process.env.REACT_APP_NKS_API + `products/filter?${convertedQueryParams}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({products: data});
            }, (error) => {
                alert('Product filtered GET Failed!');
            })
            .then(console.log(this.state.products));
    }

    handleChange(event) {
        this.setState({selectedValue: event.target.value});
    }


    runCallback = (cb) => {
        return cb();
    };

    render() {
        const {selectedValue, products} = this.state;
        console.log(this.state);

        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    {
                        this.runCallback(() => {
                            const selects = [];

                            for (let j = 0; j < 2; j++) {
                                const row = [];
                                for (let i = 0; i < 6; i++) {
                                    row.push(<Form.Group as={Col} controlId="formGrid">
                                        <Form.Label>Тип</Form.Label>
                                        {/*TODO добавить самое верхнее дефолтное значение, которое пустое по факту "Все"*/}
                                        <Form.Control
                                            as='select'
                                            name='formGrid'
                                            value={selectedValue}
                                            onChange={this.handleChange.bind(this)}
                                        >
                                            {this.state.filters.map((filter, index) =>
                                                <option key={'' + j + i + index} value={filter}>
                                                    {filter}
                                                </option>
                                            )}
                                        </Form.Control>
                                    </Form.Group>);
                                }

                                selects.push(<Row className="mb-3">{row}</Row>)
                            }

                            const checkbox = [];
                            const checkboxBlock = [];
                            for (let i = 0; i < 6; i++) {
                                checkbox.push(
                                    <Form.Check
                                        inline
                                        type='checkbox'
                                        id='custom-checkbox-1'
                                        label='custom-checkbox'
                                    />);
                            }
                            checkboxBlock.push(<Form.Group className="mb-3"
                                                           id="formGridCheckbox">{checkbox}</Form.Group>)

                            return [selects, checkboxBlock];
                        })
                    }

                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Применить фильтры
                    </Button>

                </Form>

                <ProductsDynamic products={products}/>
            </Container>
        );
    }
}
