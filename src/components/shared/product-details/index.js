import React from 'react';
import './index.scss';
class ProductDetails extends React.Component{
    
    renderProductItemDetials = (idProduct) =>{
        const { products, products:{ id, name, desc, img, price } } = this.props;

        if(products){
            if(id == idProduct ){
                return(
                    <div key={id} className="product">
                        <img src={img} alt="" className="img-product" />
                        <div className="about-product">
                            <h2>
                                {name}
                            </h2>
                            <h4> 
                                <span> about product:  </span> {desc}
                            </h4>
                            <p> <span> Price: </span> {price} $ </p>
                        </div>
                    </div>
                )
            }
        }
    }

    render(){
        const { id } = this.props;
        // console.log("this.props",this.props.products);
        
        if(!id){
            window.location.reload();
        }
        
        return(
            <div className="product-detials-continer">
                {this.renderProductItemDetials(id)}
            </div>
        )
    }
}

export default ProductDetails;