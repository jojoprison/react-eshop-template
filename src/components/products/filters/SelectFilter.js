import {Col, Form} from "react-bootstrap";
import React from "react";
import {TableContainer, TablePagination, TableRow} from "@mui/material";


export default function SelectFilter(props) {
    console.log(props);
    const valueChanger = props.valueChanger;
    const selectedValue = props.selectedValue;
    const values = props.values;
    const name = props.name;
    // const { items } = useCart();

    return (
        <Form.Group className="col-2" as={TableContainer} controlId={product_prop}>
            <Form.Label>{name}</Form.Label>
            <Form.Control
                as='select'
                name={name}
                value={selectedValue}
                onChange={valueChanger}
                defaultValue='1'
            >
                {values.map((filter, index) =>
                    <option value={filter}>
                        {filter}
                    </option>
                )}
            </Form.Control>
        </Form.Group>
    )
}
