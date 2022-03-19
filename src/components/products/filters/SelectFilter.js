import {Col, Form} from "react-bootstrap";
import React from "react";


export default function SelectFilter(props) {
    console.log(props);
    const valueChanger = props.valueChanger;
    const selectedValue = props.selectedValue;
    const values = props.values;
    const name = props.name;
    // const { items } = useCart();

    return (
        <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Тип</Form.Label>
            {/*TODO добавить самое верхнее дефолтное значение, которое пустое по факту "Все"*/}
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
