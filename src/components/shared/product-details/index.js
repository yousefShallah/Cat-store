import React from 'react';

class ProductDetails extends React.Component{


    renderProductItemDetials = (idProduct) =>{
        const { products, products:{ id, name, desc, img } } = this.props;
        if(products){
            if(id == idProduct ){
                return(
                    <div key={id}>
                        {name}
                        {desc}
                        <img src={img} />
                    </div>
                )
            }
        }
    }

    render(){
        const { id } = this.props;
        
        return(
            <div>
                {this.renderProductItemDetials(id)}
            </div>
        )
    }
}

export default ProductDetails;