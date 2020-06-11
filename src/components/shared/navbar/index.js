import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import './index.scss';

class NavBar extends React.Component {
    render(){
        return(
            <div className="navbar-continer">
            <Row type="flex">
                <Col xs={0} sm={0} md={12} lg={6} xl={6}>
                    <div className="logo-area">
                        <i className="fa fa-reddit"> </i>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={12} lg={10} xl={10}>
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
                </Col>
                <Col xs={0} sm={0} md={12} lg={8} xl={8}>
                    <div className="sala-area">
                        <i className="fa fa-shopping-basket"> </i>
                    </div>
                </Col>
            </Row>
            </div>
        )
    }
}

export default NavBar;