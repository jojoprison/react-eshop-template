import React from 'react';
import {Ad} from "./Ad";
import {Container} from "react-bootstrap";

const Home = ({modal, setModal, authToken}) => {
    return (
        <Container>
            <Ad/>
        </Container>
    )
};

export default Home;
