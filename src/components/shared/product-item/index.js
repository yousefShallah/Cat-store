import React from 'react';
import { Row, Col, Button } from 'antd';

import './index.scss';

class ProductItem extends React.Component{

    state={
        add_to_sala: false,
        count: 0
    }
    addToBasket = () =>{
        const {add_to_sala, count } = this.state;
        if(add_to_sala){
            this.setState({
                add_to_sala: false,
                count: count - 1
            })
        }else{
            this.setState({
                add_to_sala: true,
                count: count + 1
            })
        }
    }

    render(){
        const { id, name, desc, img } = this.props.product;

        console.log("this.state.add_to_sala", this.state.add_to_sala);
        console.log("this.state.count", this.state.count);
        
        return(
            <Col xs={24} sm={12} md={12} lg={8} xl={8} className="product-continer">
                 <div className="product">
                   <Row key={id}>
                       <Col span={24}>
                            <div className="img-continer">
                                <img src={img} alt="product image" />
                            </div>
                       </Col>
                       <Col span={24}>
                            <div className="name-continer">
                                <h3> {name} </h3>
                            </div>
                       </Col>
                       <Col span={24}>
                            <div className="desc-continer">
                                <p> {desc} </p>
                            </div>
                       </Col>
                       <Col span={24}>
                            <div className="sale-btn-continer">
                                <Button type="primary"> Add To Basket <i className="fa fa-plus"> </i> </Button>
                            </div>
                       </Col>
                   </Row>

                </div>
            </Col>
        )
    }
}


export default ProductItem;
