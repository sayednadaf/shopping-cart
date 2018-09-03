import React, {Component} from 'react';
import bag from './bag.jpg'

class Item1 extends Component{

    state={
        image:bag,
        description:[
            'name: College bag,',
            'material: leather,',
            'qty: 15 litres'
    ],
    cost:1000
    }
    render(){
        return(
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={bag} alt="Bag"/>
            <div className="card-body">
            <h5 className="card-title">College Bag</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button onClick={this.props.onAdd} className="btn btn-primary">Add to cart</button>
            </div>
            </div>
          
        )
    }
}

export default Item1;