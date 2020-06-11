import React from 'react';
import ProductItem from '../../components/shared/product-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GetProduct } from '../../reducesrs/product';

import'./index.scss'

class Home extends React.Component {

    state={
        product: {}
    }
    componentDidMount(){
        this.props.GetProduct();
    }

    render(){
        console.log("this.props", this.props);
        return(
            <div>
                home
                <ProductItem />
            </div>
        )
    }
}

const mapStateToProps = ({ product }) => ({
    product
  });
 
  const mapDispatch = dispatch => {
    return bindActionCreators({
        GetProduct,
    }, dispatch)
  };

  export default connect(mapStateToProps, mapDispatch)(Home);