import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Drawer } from 'antd';
import './index.scss';

class NavBar extends React.Component {

    state={
        visabilDrawer: false
    }

    renderLinksRout = () =>{
        return(
            <ul className="nav-list-area">
                <li>
                    <i className="fa fa-home"> </i>
                    <Link to="/cats">Cats</Link>
                </li>
                <li>
                    <i className="fa fa-cloud"> </i>
                    <Link to="/food">Food</Link>
                </li>
                <li>
                    <i className="fa fa-paw"> </i>
                    <Link to="/dogs">Dogs</Link>
                </li>
            </ul>
        )
    }
    
    renderdesctopNavbar = () =>{
        return(
            <Row type="flex">
                <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                    <div className="logo-area">
                        <i className="fa fa-reddit"> </i>
                        <div className="sala-area">
                            <i className="fa fa-shopping-basket"> </i>
                            <p> 2 </p>
                        </div>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                    { this.renderLinksRout() }
                </Col>
            </Row>
        )
    }

    onCloseDrawer = () => {
        this.setState({
            visabilDrawer: false
        })
    };

    onOpenDrawer = () =>{
        this.setState({
            visabilDrawer: true
        })
    }

    renderSidebarNavbar = () =>{
        return(
            <div className="drawer-area-mobile">
                 <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onCloseDrawer}
                    visible={this.state.visabilDrawer}
                    onClick={this.onCloseDrawer}
                >
                    { this.renderLinksRout() }
                </Drawer>
                <i className="fa fa-align-justify" onClick={this.onOpenDrawer}> </i>
            </div>
        )
    }

    renderMobileNavbar = () =>{
        return(
            <Row type="flex">
                <Col xs={12} sm={12} md={0} lg={0} xl={0}>
                    <div className="logo-area-mobile">
                        <i className="fa fa-reddit"> </i>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={0} lg={0} xl={0}>
                    <div className="sala-area-mobile">
                        <i className="fa fa-shopping-basket"> </i>
                        <p> 2 </p>
                    </div>
                    { this.renderSidebarNavbar() }
                </Col>
            </Row>
        )
    }


    render(){
        return(
            <div className="navbar-continer">
                <div className="desc-navbar">
                    { this.renderdesctopNavbar() }
                </div>
                <div className="mobile-navbar">
                    { this.renderMobileNavbar() }
                </div>
            </div>
        )
    }
}

export default NavBar;