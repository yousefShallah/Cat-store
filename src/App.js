import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Home from './pages/home';
import ProductDetials from './pages/product-details';
import NavBar from './components/shared/navbar';
import Footer from './components/shared/footer';

import store from './store';
import { Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Row type="flex" style={{flexDirection: 'row-reverse'}}>
              <Col xs={24} sm={24} md={6} lg={6} xl={6} className="nav">
                  <NavBar />
              </Col>
              <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/products" component={ProductDetials} />
                    </Switch>
              </Col>
              <Col xs={24} sm={24} md={18} lg={20} xl={20}>
                <div className="footer">
                  <Footer />
                </div>
              </Col>
            </Row>
          </Router>
        </div>
      </Provider>
    );
  } 
}

export default App;
