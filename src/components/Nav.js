import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Container, NavDropdown, Dropdown, Button} from "react-bootstrap";

export default function Navigation() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"> НКС Групп</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="сча все ь=будет" trigger ="hover" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
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

        // TODO закомментил, чтобы собрать динамический компонент реакта, через вторую ссыль получаю с сервака данные

        // <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
        //     <div className="container">
        //
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav"
        //                 aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"/>
        //         </button>
        //
        //         <div className="collapse navbar-collapse" id="main_nav">
        //             <ul className="navbar-nav">
        //
        //                 <NavLink className="d-inline p-2 bg-dark text-white" to="/">
        //                     Главная
        //                 </NavLink>
        //
        //                 <NavLink className="d-inline p-2 bg-dark text-white" to="/table">
        //                     Столы
        //                 </NavLink>
        //
        //                 <NavLink className="d-inline p-2 bg-dark text-white" to="#">
        //                     11
        //                 </NavLink>
        //
        //                 <NavLink className="d-inline p-2 bg-dark text-white" to="#">
        //                     22
        //                 </NavLink>
        //
        //                 <NavLink className="d-inline p-2 bg-dark text-white" to="#">
        //                     33
        //                 </NavLink>
        //
        //                 <NavLink className="d-inline p-2 bg-dark text-white" to="#">
        //                     44
        //                 </NavLink>
        //
        //                 <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> More</a>
        //
        //                     <div className="dropdown-menu">
        //                         <a className="dropdown-item" href="#">Foods and Drink</a>
        //                         <a className="dropdown-item" href="#">Home interior</a>
        //
        //                         <div className="dropdown-divider"/>
        //
        //                         <a className="dropdown-item" href="#">Category 1</a>
        //                         <a className="dropdown-item" href="#">Category 2</a>
        //                         <a className="dropdown-item" href="#">Category 3</a>
        //                     </div>
        //                 </li>
        //
        //             </ul>
        //         </div>
        //     </div>
        // </nav>