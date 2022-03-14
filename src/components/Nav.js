import React from 'react';
import {Navbar, Nav, Container, NavDropdown, Dropdown, Button} from "react-bootstrap";

export default function Navigation() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
            <Container>
                <Navbar.Brand href="/">Главная</Navbar.Brand>
                {/* TODO пробнуть aria-controls="basic-navbar-nav", пока хз в чем разница) */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/table">Таблица</Nav.Link>
                        <Nav.Link href="/catalog">Каталог</Nav.Link>
                        {/* TODO вот такой дропдаун - точно юзаем */}
                        <NavDropdown title="Столы" trigger ="hover" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Высокие</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Еще action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Еще</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Последние</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Шутка</Nav.Link>
                        <Nav.Link eventKey={3} href="/filters">
                            Еще разок фильтры
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
