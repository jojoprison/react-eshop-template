import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ProductsDynamic from "./ProductsDynamic";
import Selects from "./filters/SelectFilter";
import ReactPaginate from 'react-paginate';
import ProductsPaginated from "./ProductsPaginated";
import PaginatedItems from "./ProductsPaginated";


const CatalogueFilters = React.memo((props) => {
    const [products, setProducts] = useState([]);
    const [filterVariants, setFilterVariants] = useState({});
    // TODO через пропсы засовывать сюда уже selectedFiltersValues когда будем на страницах разных продуктов делать
    const [selectedFiltersValues, setSelectedFiltersValues] = useState({});
    const [loading, setLoading] = useState(true);

    // передавать вторым аргументом state, при изменении которого должна вызываться функция чтоб не было лишних
    useEffect(() => {
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_NKS_API + 'products/filtersAll', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Origin': ''
                }
            })
                .then(res => res.json())
                .then((filters) => {
                    setFilterVariants(filters);
                }, (error) => {
                    console.log('Не удалось получить список фильтров');
                });

            await fetch(process.env.REACT_APP_NKS_API + 'products/filter', {
            })
                .then(res => res.json())
                .then((products) => {
                    setProducts(products);
                }, (error) => {
                    console.log('Не удалось получить список фильтров');
                })
                .then(() => setLoading(false));
        }

        fetchInitData();
        console.log(products);
    }, []);

    const getProducts = async (filtersQueryParams) => {
        if (!filtersQueryParams) {
            filtersQueryParams = '';
        }

        await fetch(process.env.REACT_APP_NKS_API + `products/filter?${filtersQueryParams}`)
            .then(res => res.json())
            .then((products) => {
                setProducts(products);
                return products;
            }, (error) => {
                console.log('Не удалось получить продукты');
                return null;
            })
    };

    const handleSubmit = (event) => {
        // Event: Cancels Event (Stops HTML Default Form Submit)
        event.preventDefault();
        // Event: Prevents Event Bubbling To Parent Elements
        event.stopPropagation();

        let convertedQueryParams = '';

        // const formData = new FormData(event.target)

        Object.entries(selectedFiltersValues).forEach(([fieldName, value]) => {
            if (value !== '') {
                convertedQueryParams += `${fieldName}=${value}&`;
            }
        })

        convertedQueryParams = convertedQueryParams.substring(0, convertedQueryParams.length - 1);
        console.log(convertedQueryParams);

        getProducts(convertedQueryParams);
    }

    const clearFilters = () => {
        async function reset() {
            await setSelectedFiltersValues({});
            getProducts();
        }

        reset();
        // console.log(selectedFiltersValues);
    }

    const runCallback = (cb) => {
        console.log('DODOD');
        return cb();
    }

    const handlerCHANGER = (event) => {
        setSelectedFiltersValues({...selectedFiltersValues, [event.target.id]: event.target.value});

        console.log(selectedFiltersValues);
    }

    // TODO переделать по аналогии с селектами, сделать компоненты
    const checkboxList = () => {
        console.log('CHECK');

        return (
            <Row className="mb-3">
                {/*const priceFilter = filter.variants.price;*/}
                {
                    runCallback(() => {
                        const checkboxFilters = filterVariants.checkbox;

                        const checkbox = [];
                        const checkboxBlock = [];

                        console.log('adad');

                        checkboxFilters.map((checkboxFilter, index) =>
                            // TODO col-lg and etc. for adaptive design (4 to 2 elems in row)
                            checkbox.push(
                                <Form.Group
                                    key={checkboxFilter + '_' + index}
                                    controlId={checkboxFilter}
                                >
                                    <Form.Check name={checkboxFilter}
                                                inline
                                                type='checkbox'
                                                id={checkboxFilter + '_' + index}
                                                label={checkboxFilter}
                                    />
                                </Form.Group>)
                        );

                        checkboxBlock.push(
                            <Row className="mb-3">
                                {checkbox}
                            </Row>);

                        console.log('RUN');

                        return checkboxBlock;
                    })
                }
            </Row>
        );
    };

    const content = (loading) => {
        if (!loading) {
            return (
                <>
                    <Form onSubmit={handleSubmit}>

                        <Row className="mb-3">
                            <Selects fieldList={filterVariants.select}
                                // resetValues={resetSelectsKey}
                                     selectedValues={selectedFiltersValues}
                                     handlerChangeSelect={handlerCHANGER}
                            />
                        </Row>

                        {/*{!loading ?*/}
                        {/*    checkboxList() : null*/}
                        {/*}*/}

                        <Row>
                            <Col xs={{offset: 8}}>
                                <Button type="submit" className='filters-btn'>
                                    {/*TODO сделать из нее Spinner Buttons bootstrap*/}
                                    Применить фильтры
                                </Button>
                            </Col>
                            <Col xs={{order: 'last'}}>
                                <Button variant="primary" className='filters-btn float-right'
                                        onClick={clearFilters}>
                                    Сбросить фильтры
                                </Button>
                            </Col>
                        </Row>

                        {/* TODO хз как юзать */}
                        <Form.Control.Feedback type="invalid">НЕПРАВ</Form.Control.Feedback>
                    </Form>

                    {/* TODO это чтобы блок с продуктами не пропадал, даже если пустой - переделать на норм*/}
                    <div className="padding-y-sm" style={{minHeight: '900px'}}>
                        {/*{!loading && (<ProductsDynamic products={products}/>)}*/}
                        <PaginatedItems products={products} productsPerPage={12}/>
                    </div>
                </>
            );
        } else {
            return null;
        }
    }

    return (
        <Container>
            <h3 className="p-4 banner-alert mt-3">
                В связи с тем, что в стране инфляция, цены изделий могут незначительно отличаться.
                <br/>
                Для уточнения звоните по телефону, указанному на странице Контакты.
            </h3>

            <header className="section-heading">
                <h3 className="section-title">Изделия</h3>
            </header>

            <div className="padding-y-sm" style={{minHeight: '900px'}}>
                {content(loading)}
            </div>

            {/*<Form onSubmit={handleSubmit}>*/}

            {/*    <Row className="mb-3">*/}

            {/*        {!loading && (*/}
            {/*            <Selects fieldList={filterVariants.select}*/}
            {/*                // resetValues={resetSelectsKey}*/}
            {/*                     selectedValues={selectedFiltersValues}*/}
            {/*                     handlerChangeSelect={handlerCHANGER}*/}
            {/*            />*/}
            {/*        )}*/}
            {/*    </Row>*/}

            {/*    /!*{!loading ?*!/*/}
            {/*    /!*    checkboxList() : null*!/*/}
            {/*    /!*}*!/*/}

            {/*    <Row>*/}
            {/*        <Col xs={{offset: 8}}>*/}
            {/*            <Button type="submit" className='filters-btn'>*/}
            {/*                /!*TODO сделать из нее Spinner Buttons bootstrap*!/*/}
            {/*                Применить фильтры*/}
            {/*            </Button>*/}
            {/*        </Col>*/}
            {/*        <Col xs={{order: 'last'}}>*/}
            {/*            <Button variant="primary" className='filters-btn float-right'*/}
            {/*                    onClick={clearFilters}>*/}
            {/*                Сбросить фильтры*/}
            {/*            </Button>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}

            {/*    /!* TODO хз как юзать *!/*/}
            {/*    <Form.Control.Feedback type="invalid">НЕПРАВ</Form.Control.Feedback>*/}
            {/*</Form>*/}

            {/*/!* TODO это чтобы блок с продуктами не пропадал, даже если пустой - переделать на норм*!/*/}
            {/*<div className="padding-y-sm" style={{minHeight: '900px'}}>*/}
            {/*    /!*{!loading && (<ProductsDynamic products={products}/>)}*!/*/}
            {/*    {!loading && (<PaginatedItems products={products} productsPerPage={12}/>)}*/}
            {/*</div>*/}

        </Container>
    )
});


export default CatalogueFilters;
