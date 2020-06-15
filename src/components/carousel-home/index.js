import React from 'react';
import { Carousel, Row, Col } from 'antd';
import './index.scss';

class CarouselHome extends React.Component{
    render(){
        // const { img } = this.props.imagesCarousel;
        return(
            <Carousel autoplay>
                <div className="carousel-img-continer">
                    <img src='https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg' />
                </div>
                <div className="carousel-img-continer">
                    <img src='https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_960_720.jpg' />
                </div>
                <div className="carousel-img-continer">
                    <img src='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg' />
                </div>
            </Carousel>
        )
    }
}

export default CarouselHome;