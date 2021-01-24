import React, { Component } from 'react'
import './auth.css'
import { Link, withRouter,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../store/authAction.js'
import {signUp} from '../store/authAction.js'
import $ from 'jquery'
class Auth extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        email_si: '',
        password_si: ''
      }
      
    
      onSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        this.props.signUp(this.state);
      };
      
      onSignin = event => {
        event.preventDefault();
        //console.log("hello1");
        this.props.signIn(this.state);
    
      };

         
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
    render() {
        const { auth,authError}=this.props;
        if (auth.uid) return <Redirect to='/' /> 
        $(document).ready(function($) {
            
            $('.tabs h3 a').on('click', function(event) {
                event.preventDefault();
                $('.tabs h3 a').removeClass('active');
                $(this).addClass('active');
        
                $('div[id$="tab-content"]').removeClass('active');
                $($(this).attr('href')).addClass('active');
            });
        });
        
        return (
            <div>
              <div class="form-wrap">
		<div class="tabs">
			<h3 class="signup-tab"><a class="active" href="#signup-tab-content">Sign Up</a></h3>
			<h3 class="login-tab"><a href="#login-tab-content">Login</a></h3>
		</div>

		<div class="tabs-content">
			<div id="signup-tab-content" class="active">
				<form class="signup-form" action="" method="post" onSubmit={this.onSubmit} >
					<input type="email" class="input" id="user_email" name="email" onChange={this.onChange} autocomplete="off" placeholder="Email"/>
					<input type="text" class="input" id="user_name" name="name" onChange={this.onChange} autocomplete="off" placeholder="Username"/>
					<input type="password" class="input" id="user_pass" name="password" onChange={this.onChange} autocomplete="off" placeholder="Password"/>
					<input type="submit" class="button"  value="Sign Up"/>
				</form>
				<div class="help-text">
					<p>By signing up, you agree to our</p>
					<p><a href="#">Terms of service</a></p>
				</div>
			</div>

			<div id="login-tab-content">
				<form class="login-form" action="" method="post" onSubmit={this.onSignin}>
					<input type="email" class="input" id="user_login"  name="email_si" onChange={this.onChange} autocomplete="off" placeholder="Email or Username"/>
					<input type="password" class="input" id="user_pass"  name="password_si" onChange={this.onChange} autocomplete="off" placeholder="Password"/>
					
					

					<input type="submit" class="button" value="Login"/>
				</form>
				
			</div>
		</div>
	</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
   
    return{
      signIn:(creds)=>dispatch(signIn(creds)),
      signUp: (creds) => dispatch(signUp(creds))
      
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Auth);
  