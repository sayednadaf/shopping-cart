import React, {Component} from 'react';
import cart_logo from './cart_icon.png';
class Nav extends Component{
    state={
        count:0
    }
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1"><img style={{width:"30px", height:"30px"}} src={cart_logo} alt="Icon"/>
            <span class="badge badge-secondary">{this.state.count}</span></span>
            </nav>
        );
    }
}

export default Nav;