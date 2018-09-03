import React, {Component} from 'react';

class CartDetails extends Component{
    render(){
        return(
            <div>

            <div className="row">
            
            <div className="col-lg-2">
                Sl.No
            </div>

            <div className="col-lg-4">
                Image
            </div>
            
            <div className="col-lg-4">
                Item Description
            </div>

            <div className="col-lg-2">
                Cost
            </div>

            </div>

            </div>
        )
    }
}

export default CartDetails;