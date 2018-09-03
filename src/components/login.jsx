import React, { Component } from 'react';


class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {email: '',password: ''};
  
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value})
    }
  
    handleSubmit(event) {
        if(this.state.email==='sayednadaf@gmail.com'&&this.state.password==='sayed@1996'){
         //alert('Successful login');
        this.props.history.push('/App')
      }
      else
      alert('Invalid credentials!!! Please check your email and password');
      event.preventDefault();
    }

    
    render() {
      return (
          <div>
              <br/>
              <br/>
          <center>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email-Id:
            <input type="text" email={this.state.value} onChange={this.handleEmailChange} />
          </label>
          <br/>
          <label>
            Password:
            <input type="password" password={this.state.value} onChange={this.handlePasswordChange} />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        </center>
        </div>
      );
    }
  }

  export default LoginForm;