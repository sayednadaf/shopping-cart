import React, {Component} from 'react';
import shades from './shades.jpg';

class Item3 extends Component{
    render(){
        return(
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={shades} alt="Shades"/>
            <div className="card-body">
            <h5 className="card-title">Black Shades</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button onClick={this.handleClick} className="btn btn-primary">Add to cart</button>
            </div>
            </div>
        )
    }
}

export default Item3;