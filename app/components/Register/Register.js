import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUserAction } from '../../containers/App/actions'

import './style.scss';

class Register extends Component { // eslint-disable-line react/prefer-stateless-function
  
  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      name, email, password
    };

   
    this.props.dispatch(registerUserAction(data));

  }



  render() {
   

    return (      
      <div>
        <h3>RegisterPage</h3>
        

        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>


      
      </div>
    );
  }
}


const mapStateToProps = (response) => ({
  response
});


export default connect(mapStateToProps)(Register);







