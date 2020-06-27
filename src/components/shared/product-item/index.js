import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom'

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


    handelAddToBasket = () =>{
        console.log("test handel");
    }

    render(){
        const { id, name, desc, img } = this.props.product;

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
                                        <Button block> <Link to={`/product-item?id=${id}`}> Detials </Link> </Button>
                                        <Button type="primary" onclick={this.handelAddToBasket}> Add <i className="fa fa-plus"> </i> </Button>
                                    </div>
                            </Col>
                        </Row>
                    </div>
            </Col>
        )
    }
}


export default ProductItem;
