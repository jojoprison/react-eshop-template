import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ProductsDynamic from "./ProductsDynamic";
import Selects from "./filters/SelectFilter";


const CatalogueFilters = React.memo((props) => {
    const [products, setProducts] = useState([]);
    const [filterVariants, setFilterVariants] = useState({});
    // TODO через пропсы засовывать сюда уже selectedFiltersValues когда будем на страницах разных продуктов делать
    const [selectedFiltersValues, setSelectedFiltersValues] = useState({});
    const [loading, setLoading] = useState(true);

    // передавать вторым аргументом state, при изменении которого должна вызываться функция чтоб не было лишних
    useEffect(() => {
        async function fetchInitData() {
            const resFilterVariants = await fetch(process.env.REACT_APP_NKS_API + 'products/filtersAll');
            const resProducts = await fetch(process.env.REACT_APP_NKS_API + 'products/filter');
            const dataFilters = await resFilterVariants.json();
            const dataProducts = await resProducts.json();

            setProducts(dataProducts);
            setFilterVariants(dataFilters);
            setLoading(false);
        }

        fetchInitData();
    }, []);

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

        fetch(process.env.REACT_APP_NKS_API + `products/filter?${convertedQueryParams}`)
            .then(res => res.json())
            .then((products) => {
                setProducts(products);
            }, (error) => {
                alert('Не удалось получить продукты');
            })
    }

    const clearFilters = () => {
        async function reset() {
            await setSelectedFiltersValues({});
        }

        reset();
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

    return (
        <Container>
            <header className="section-heading">
                <h3 className="section-title">Продукты</h3>
            </header>

            <Form onSubmit={handleSubmit}>

                <Row className="mb-3">

                    {!loading && (
                        <Selects fieldList={filterVariants.select}
                            // resetValues={resetSelectsKey}
                                 selectedValues={selectedFiltersValues}
                                 handleChange={handlerCHANGER}
                        />
                    )}
                </Row>

                {/*{!loading ?*/}
                {/*    checkboxList() : null*/}
                {/*}*/}

                <Row>
                    <Col xs={{offset: 4}}>
                        <Button type="submit" className='nks-btn center'>
                            {/*TODO сделать из нее Spinner Buttons bootstrap*/}
                            Применить фильтры
                        </Button>
                    </Col>
                    <Col xs={{order: 'last'}}>
                        <Button variant="primary" className='nks-btn float-right'
                                onClick={clearFilters}>
                            Сбросить фильтры
                        </Button>
                    </Col>
                </Row>

                {/* TODO хз как юзать */}
                <Form.Control.Feedback type="invalid">НЕПРАВ</Form.Control.Feedback>
            </Form>

            {!loading && (<ProductsDynamic products={products}/>)}

        </Container>
    )
});


export default CatalogueFilters;
