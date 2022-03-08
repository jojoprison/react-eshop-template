import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Container, NavDropdown, Dropdown, Button} from "react-bootstrap";

export default function Navigation() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/*<NavLink to="/">Тестили Table</NavLink>*/}
                <Navbar.Brand href="#home">Главная</Navbar.Brand>
                {/* TODO пробнуть aria-controls="basic-navbar-nav", пока хз в чем разница) */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* TODO нужно как то реализовать NavLink вместо Nav.Link со стилями! */}
                        {/*<NavLink to="/table">Тестили Table</NavLink>*/}
                        {/*<NavLink to="/catalog">Каталог</NavLink>*/}
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        {/* TODO вот такой дропдаун - точно юзаем */}
                        <NavDropdown title="сча все будет выпадать наХ" trigger ="hover" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* третий способ размщения nav.link */}
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
