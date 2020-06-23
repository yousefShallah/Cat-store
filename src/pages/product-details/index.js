import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GetProduct } from '../../reducesrs/product';
import ProductDetails from '../../components/shared/product-details';
import { getLocationQuery } from '../../utils/functions';


class ProductDetials extends React.Component {

    state={
        idProduct: 0
    }

    componentDidMount(){
        const { products: { data } } = this.props;
        if(data.length > 0){
            return false
        }else{
            this.props.GetProduct();
        }
        
        let queryString = this.props.location.search;
        let params = getLocationQuery(queryString);
        let id = params.id;
        this.setState({
            idProduct: id
        })
    }

    render(){
        const { data } = this.props.products;
        const { idProduct } = this.state;
        
        return( 
            <div>
                { data && data.map((product) => {
                    return(
                            <ProductDetails key={product.id} id={idProduct} products={ product } />    
                        )
                }) }
            </div>
        )
    }
}

const mapStateToProps = ({ products }) => ({
    products
  });
 
  const mapDispatch = dispatch => {
    return bindActionCreators({
        GetProduct,
    }, dispatch)
  };

  export default connect(mapStateToProps, mapDispatch)(ProductDetials);