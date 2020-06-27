import React from 'react';
import ProductItem from '../../components/shared/product-item';
import CarouselHome from '../../components/carousel-home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GetProduct } from '../../reducesrs/product';
import { Row, Col, Spin } from 'antd';
import './index.scss';

class Dogs extends React.Component{
    state={
        products: []
    }

    componentDidMount(){
        const { products: { data } } = this.props;
        if(data.length > 0){
            return false
        }else{
            this.props.GetProduct();
        }
    }

    render(){
        const { products: { data, data:{ type } } } = this.props;
        
        return(
            <div className="home-continer">
                <CarouselHome imagesCarousel={data} typeData='dog' />

                { !data && <Spin /> }
                
                <Row type="flex">
                    { data && data.map(product => {
                        return(
                                product.type == 'dog' && <ProductItem product={product} />    
                            )
                    }) }
                </Row>
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

  export default connect(mapStateToProps, mapDispatch)(Dogs);