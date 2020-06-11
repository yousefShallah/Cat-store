import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import ProductDetials from './pages/product-details';
import NavBar from './components/shared/navbar';
import 'antd/dist/antd.css';
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={ProductDetials} />
            </Switch>
        </Router>
      </div>
    );
  } 
}

export default App;
