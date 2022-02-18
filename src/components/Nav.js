import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./Home";
import {Table} from "./Table";

export class Navigation extends Component {

    render() {
        return (
            <BrowserRouter>
                    <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
                        <div className="container">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav"
                                    aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>

                            <div className="collapse navbar-collapse" id="main_nav">
                                <ul className="navbar-nav">

                                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                                        Главная
                                    </NavLink>

                                    <NavLink className="d-inline p-2 bg-dark text-white" to="/table">
                                        Столы
                                    </NavLink>

                                    <NavLink className="d-inline p-2 bg-dark text-white" to="#">
                                        11
                                    </NavLink>

                                    <NavLink className="d-inline p-2 bg-dark text-white" to="#">
                                        22
                                    </NavLink>

                                    <NavLink className="d-inline p-2 bg-dark text-white" to="#">
                                        33
                                    </NavLink>

                                    <NavLink className="d-inline p-2 bg-dark text-white" to="#">
                                        44
                                    </NavLink>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> More</a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Foods and Drink</a>
                                            <a className="dropdown-item" href="#">Home interior</a>

                                            <div className="dropdown-divider" />

                                            <a className="dropdown-item" href="#">Category 1</a>
                                            <a className="dropdown-item" href="#">Category 2</a>
                                            <a className="dropdown-item" href="#">Category 3</a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>

                <Routes>
                    {/*component={Home} dont work!*/}
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/table" element={<Table/>} exact/>
                </Routes>
            </BrowserRouter>
            // <Navbar bg="dark" expand="lg">
            //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav>
            //             <NavLink className="d-inline p-2 bg-dark text-white" to="/">
            //                 Home
            //             </NavLink>
            //             <NavLink className="d-inline p-2 bg-dark text-white" to="/table">
            //                 Table
            //             </NavLink>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
        );
    }
}
