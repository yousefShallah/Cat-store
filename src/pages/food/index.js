import React from 'react';
// import ProductItem from '../../components/shared/product-item';
// import CarouselHome from '../../components/carousel-home';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { GetFoods } from '../../reducesrs/food';
// import { Row, Col, Spin } from 'antd';
import './index.scss';


class Food extends React.Component{

    componentDidMount(){
        // const { foods: { data } } = this.props;
        // if(data.length > 0){
        //     return false
        // }else{
        //     this.props.GetFoods();
        // }
    }
    
    render(){
        return(
            <div> 
                Food
            </div>
        )

    }
}

// const mapStateToProps = ({ foods }) => ({
//     foods
//   });
 
//   const mapDispatch = dispatch => {
//     return bindActionCreators({
//         GetFoods,
//     }, dispatch)
//   };

//   export default connect(mapStateToProps, mapDispatch)(Food);

export default Food;