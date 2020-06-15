import React from 'react';
import { Link } from "react-router-dom";

import './index.scss';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer-continer">
                <i className="fa fa-reddit logo"> </i>
                <div className="links">
                    <ul className="nav-list-area">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">products</Link>
                        </li>
                        <li>
                            <Link to="/products">products</Link>
                        </li>
                        <li>
                            <Link to="/products">products</Link>
                        </li>
                    </ul>
                </div>
                <div className="soical-media">
                    <div className="icons">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-twitter"></i>
                    </div>
                </div> 
                <div className="copyrit-section">
                    <p> dev: yousef shallah and owner this store 2020<i class="fa fa-copyright" aria-hidden="true"></i> </p>
                </div>
            </div>
        )
    }
}

export default Footer;