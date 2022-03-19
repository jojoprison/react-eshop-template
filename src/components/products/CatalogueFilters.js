import React, {Component, useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ProductsDynamic from "./ProductsDynamic";
import ProductCard from "./ProductCard";
import SelectFilter from "./filters/SelectFilter";


export default function CatalogueFilters(props) {
    const [state, setState] = useState(
        {filterVariants: [], searchFilters: {}, products: []}
    );
    const [selectedValues, setSelectedValues] = useState([{'type': 1}])
    const [loading, setLoading] = useState(true);

    // передавать вторым аргументом state, при изменении которого должна вызываться функция чтоб не было лишних
    useEffect(() => {
        async function FetchInitData() {
            setLoading(true);
            const resFilterVariants = await fetch(process.env.REACT_APP_NKS_API + 'products/filtersAll');
            const resProducts = await fetch(process.env.REACT_APP_NKS_API + 'products/filter?photo=ALL');
            const dataFilters = await resFilterVariants.json();
            const dataProducts = await resProducts.json();

            setState({...state, filterVariants: dataFilters, products: dataProducts});
            console.log(state);
            setLoading(false);
        }

        FetchInitData();
    }, [])


    function handleSubmit(event) {
        event.preventDefault();

        // TODO доделать норм параметры
        const convertedQueryParams = `photo=${selectedValues}`;

        fetch(process.env.REACT_APP_NKS_API + `products/filter?${convertedQueryParams}`)
            .then(res => res.json())
            .then((data) => {
                setState({...state, products: data});
            }, (error) => {
                alert('Product filtered GET Failed!');
            })
    }

    function handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        const newSelectedValues = selectedValues.push({})

        // TODO разобраться как вставить в качестве ключа переменную
        setSelectedValues({dadad: event.target.value});

        console.log(selectedValues);
    }

    function clearFilters() {
        setState({...state, selectedValue: [{'type': 1}]});
    }

    const runCallback = (cb) => {
        return cb();
    }

    const {filterVariants, products} = state;
    const selectFilters = filterVariants.select;
    const checkboxFilters = filterVariants.checkbox;

    function renderFilters() {
        if(!loading) {
            return (
                <Form onSubmit={handleSubmit}>
                    {
                        runCallback(() => {
                            const selects = [];


                            console.log(selectFilters);

                            // const priceFilter = filter.variants.price;

                            // TODO ограничить число колонок в строке   до 6
                            const row = [];

                            selectFilters.map((filterSelect, index) =>
                                // TODO col-lg and etc. for adaptive design (4 to 2 elems in row)
                                row.push(
                                    <div className="col-md-3" key={filterSelect.product_prop + '_' + index}>
                                        <SelectFilter valueChanger={handleChange}
                                                      name={filterSelect.product_prop}
                                                      values={filterSelect.values}
                                                      selectedValue={selectedValues[filterSelect.product_prop]}
                                        />
                                    </div>)
                            );

                            selects.push(<Row className="mb-3">{row}</Row>);

                            const checkbox = [];
                            const checkboxBlock = [];

                            checkboxFilters.map((checkboxFilter, index) =>
                                // TODO col-lg and etc. for adaptive design (4 to 2 elems in row)
                                checkbox.push(
                                    <div className="col-md-3" key={checkboxFilter + '_' + index}>
                                        <Form.Check name={checkboxFilter}
                                            inline
                                            type='checkbox'
                                            id={checkboxFilter + '_' + index}
                                            label={checkboxFilter}
                                        />
                                    </div>)
                            );

                            checkboxBlock.push(
                                <Row className="mb-3">
                                    <Form.Group className="mb-3" id="formGridCheckbox">{checkbox}
                                    </Form.Group>
                                </Row>);

                            return [selects, checkboxBlock];
                        })
                    }

                    <Row>
                        <Col xs={{offset: 4}}>
                            <Button type="submit" className='nks-btn center'
                                    onClick={handleSubmit}>
                                {/*TODO сделать из нее Spinner Buttons bootstrap*/}
                                Применить фильтры
                            </Button>
                        </Col>
                        <Col xs={{order: 'last'}}>
                            <Button variant="primary" type="submit" className='nks-btn float-right'
                                    onClick={clearFilters}>
                                Сбросить фильтры
                            </Button>
                        </Col>
                    </Row>
                </Form>
            );
        }
        return null;
    }

    return (
        <Container>
            <header className="section-heading">
                <h3 className="section-title">Продукты</h3>
            </header>

            { renderFilters() }


            <ProductsDynamic products={products}/>
        </Container>
    )
}
