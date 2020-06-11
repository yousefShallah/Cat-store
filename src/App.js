import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Home from './pages/home';
import ProductDetials from './pages/product-details';
import NavBar from './components/shared/navbar';
import store from './store';

import 'antd/dist/antd.css';
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={ProductDetials} />
              </Switch>
          </Router>
        </div>
      </Provider>
    );
  } 
}

export default App;
