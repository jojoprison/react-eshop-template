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
                            <NavDropdown.Item href="filters">
                                Весовые
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="filters">
                                Столы-мойки
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="filters">
                                Высокие
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link href="/filters">Тумбы</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/filters">Стулья/Кресла/Табуреты</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/filters">Стойки</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/filters">Стеллажи</Nav.Link>
                        </Nav.Item>
                        {/*<Nav.Item>*/}
                        {/*    <Nav.Link href="/filters" className="nav-text">Шкафы</Nav.Link>*/}
                        {/*</Nav.Item>*/}
                        <Nav.Item>
                            <Nav.Link href="/filters">Дополнительное оснащение</Nav.Link>
                        </Nav.Item>


                        {/*<nav class="navbar navbar-expand-sm navbar-custom py-0">*/}
                        {/*    <a href="/" class="navbar-brand">Custom</a>*/}
                        {/*    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">*/}
                        {/*        <i class="fa fa-bars fa-lg py-1 text-white"></i>*/}
                        {/*    </button>*/}
                        {/*    <div class="navbar-collapse collapse" id="navbarCustom">*/}
                        {/*        <ul class="navbar-nav">*/}
                        {/*            <li class="nav-item active">*/}
                        {/*                <a class="nav-link" href="#">Active</a>*/}
                        {/*            </li>*/}
                        {/*            <li class="nav-item">*/}
                        {/*                <a class="nav-link" href="#">Link</a>*/}
                        {/*            </li>*/}
                        {/*            <li class="nav-item">*/}
                        {/*                <a class="nav-link" href="#">Link</a>*/}
                        {/*            </li>*/}
                        {/*            <li class="nav-item dropdown">*/}
                        {/*                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                        {/*                    Dropdown*/}
                        {/*                </a>*/}
                        {/*                <div class="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*                    <a class="dropdown-item" href="#">Action</a>*/}
                        {/*                    <a class="dropdown-item" href="#">Another action</a>*/}
                        {/*                    <a class="dropdown-item" href="#">Something else here</a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*        <span class="ml-auto navbar-text">Text</span>*/}
                        {/*    </div>*/}
                        {/*</nav>*/}
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
