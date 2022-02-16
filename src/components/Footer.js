import React from "react";

const Footer = () => {

    return (

<footer className="section-footer border-top bg">
    <div className="container">
        <section className="footer-top  padding-y">
            <div className="row">
                <aside className="col-md col-6">
                    <h6 className="title">Brands</h6>
                    <ul className="list-unstyled">
                        <li><a href="#">Adidas</a></li>
                        <li><a href="#">Puma</a></li>
                        <li><a href="#">Reebok</a></li>
                        <li><a href="#">Nike</a></li>
                    </ul>
                </aside>
                <aside className="col-md col-6">
                    <h6 className="title">Company</h6>
                    <ul className="list-unstyled">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Find a store</a></li>
                        <li><a href="#">Rules and terms</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </aside>
                <aside className="col-md col-6">
                    <h6 className="title">Help</h6>
                    <ul className="list-unstyled">
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Money refund</a></li>
                        <li><a href="#">Order status</a></li>
                        <li><a href="#">Shipping info</a></li>
                        <li><a href="#">Open dispute</a></li>
                    </ul>
                </aside>
                <aside className="col-md col-6">
                    <h6 className="title">Account</h6>
                    <ul className="list-unstyled">
                        <li><a href="#"> User Login </a></li>
                        <li><a href="#"> User register </a></li>
                        <li><a href="#"> Account Setting </a></li>
                        <li><a href="#"> My Orders </a></li>
                    </ul>
                </aside>
                <aside className="col-md">
                    <h6 className="title">Social</h6>
                    <ul className="list-unstyled">
                        <li><a href="#"> <i className="fab fa-facebook"></i> Facebook </a></li>
                        <li><a href="#"> <i className="fab fa-twitter"></i> Twitter </a></li>
                        <li><a href="#"> <i className="fab fa-instagram"></i> Instagram </a></li>
                        <li><a href="#"> <i className="fab fa-youtube"></i> Youtube </a></li>
                    </ul>
                </aside>
            </div>
        </section>
    </div>
</footer>


        );
        };
        export default Footer;
