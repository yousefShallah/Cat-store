import React from 'react';
import ProductItem from '../../components/shared/product-item';
import'./index.scss'

class Home extends React.Component {
    render(){
        return(
            <div>
                home
                <ProductItem />
            </div>
        )
    }
}

export default Home;