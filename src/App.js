import React, { Component } from 'react';
import Nav from './components/nav';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import CartDetails from './components/cart-details';

class App extends Component {


  render() {
    return (
      <div>
        <Nav />
        <div className='row'>

        <div className='col-lg-4'>
        <Item1/>
        </div>

        <div className='col-lg-4'>
        <Item2 />
        </div>

        <div className='col-lg-4'>
        <Item3 />
        </div>

        </div>
        <br/>
        <CartDetails onAdd = {this.handleClick} />
      </div>
    );
  }
}

export default App;
