import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-custom">
            <Container>
                <Navbar.Brand href="/">
                    {/*TODO добавить сюда иконку NKS*/}
                    {/*<Navbar.Brand href="#home">*/}
                    {/*    <img*/}
                    {/*        alt=""*/}
                    {/*        src="/logo.svg"*/}
                    {/*        width="30"*/}
                    {/*        height="30"*/}
                    {/*        className="d-inline-block align-top"*/}
                    {/*    />{' '}*/}
                    Главная
                </Navbar.Brand>
                {/* TODO пробнуть aria-controls="basic-navbar-nav", пока хз в чем разница) */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*TODO потом получать список из базы и отображать выпадающим подтипы*/}
                        <NavDropdown title="Столы" trigger="hover" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/tables">
                                Весовые
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/tables">
                                Столы-мойки
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/tables">
                                Высокие
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link href="/drawers">Тумбы</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/chairs">Стулья/Кресла/Табуреты</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/stands">Стойки</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/racks">Стеллажи</Nav.Link>
                        </Nav.Item>
                        {/*<Nav.Item>*/}
                        {/*    <Nav.Link href="/filters" className="nav-text">Шкафы</Nav.Link>*/}
                        {/*</Nav.Item>*/}
                        <Nav.Item>
                            <Nav.Link href="/accessories">Дополнительное оснащение</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {/*<Nav>*/}
                    {/*    <Nav.Link eventKey={3} href="/filters">*/}
                    {/*        Еще разок фильтры*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
