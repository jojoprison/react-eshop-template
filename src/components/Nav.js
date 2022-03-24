import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import $ from 'jquery';

export default function Navigation() {


    return (

        <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
            <Container>
                {/*<Navbar.Brand href="/">Главная</Navbar.Brand>*/}
                {/* TODO пробнуть aria-controls="basic-navbar-nav", пока хз в чем разница) */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Столы" trigger ="hover" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Столы лабораторные</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Столы мойки</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Весовые столы</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/table">Тумбы</Nav.Link>
                        <Nav.Link href="/catalog">Шкафы</Nav.Link>
                        {/* TODO вот такой дропдаун - точно юзаем */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="/filters">Стеллажи</Nav.Link>
                        <Nav.Link href="/filters">Стулья/Кресла</Nav.Link>
                        <Nav.Link href="/filters">Доп.оснащения</Nav.Link>
                        {/*<Nav.Link eventKey={3} href="/filters">*/}
                        {/*    Еще разок фильтры*/}
                        {/*</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
