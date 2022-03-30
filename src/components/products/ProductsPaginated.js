import ProductCard from "./ProductCard";
import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {Col, Row} from "react-bootstrap";


const Products = ({products}) => {
    if ((!products) || (products.length === 0)) {
        return (
            <div className="alert alert-warning" role="alert">
                Нет продуктов по заданным фильтрам
            </div>
        );
    }

    return (
        <Row>
            {products.map((product) => (
                <Col xxl={3} lg={4} md={6} sm={12} className='padding-bottom-sm'>
                    <ProductCard product={product}/>
                </Col>
            ))}
        </Row>
    );
};


const ProductsPaginated = ({products, productsPerPage}) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    // const [pageOffset, setPageOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + productsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / productsPerPage));
    }, [itemOffset, productsPerPage, products]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * productsPerPage % products.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    const handlePageChange = (event) => {
        console.log(event);
        // TODO Only change displayed selected page
        // when its content is loaded in useEffect.
        // setPageOffset(event.selected);
    };

    if (!currentItems) {
        return null;
    } else {
        return (
            <>
                <ReactPaginate
                    nextLabel="> Следующая"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="Предыдущая <"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />

                <Products products={currentItems} />

                <ReactPaginate
                    nextLabel="> Следующая"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="Предыдущая <"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }
};

export default ProductsPaginated;
