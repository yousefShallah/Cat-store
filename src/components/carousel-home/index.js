import React from 'react';
import { Carousel, Row, Col } from 'antd';
import './index.scss';

class CarouselHome extends React.Component{
    render(){
        const { typeData } = this.props;

        return(
            <Carousel autoplay>
                <div className="carousel-img-continer">
                    { typeData === 'cat' && <img src='https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg' /> }
                    { typeData === 'dog' && <img src="https://i.ytimg.com/vi/74EOjyseccc/maxresdefault.jpg" /> }
                </div>
                <div className="carousel-img-continer">
                    { typeData =='cat' && <img src='https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_960_720.jpg' /> }
                    { typeData === 'dog' && <img src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.214xh&resize=1200:*" /> }
                </div>
                <div className="carousel-img-continer">
                    { typeData =='cat' && <img src='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg' /> }
                    { typeData === 'dog' && <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=1200:*" /> }
                </div>
            </Carousel>
        )
    }
}

export default CarouselHome;