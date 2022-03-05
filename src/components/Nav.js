import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";

export default function Navigation() {

    return (
        // className="d-inline p-2 bg-dark text-white"
        <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
            <div className="container">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/table">Table</NavLink>
                        <NavLink to="/catalog">Catalog</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

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
    );
}
