import React, { Component } from 'react';
import './home.css';
import './navbar.js';
import Navbar from './navbar.js';
import $ from 'jquery';
import {Link} from "react-router-dom"
import {signOut} from '../store/authAction';
import {connect} from 'react-redux';
class Home extends Component {



    render(){
        const {auth} = this.props;

      $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();
    
    });
    
    //   $(window).scroll(function() {
    //     if (0) {
    //         $('.nav').addClass('affix');
    //         console.log("OK");
    //     } else {
    //         $('.nav').removeClass('affix');
    //     }
    // });
    return (
      <div className="Home">
     <nav class="nav affix">
        <div class="container">
            <div class="logo">
                <a href="#">Port-Your-Folio</a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>                                  
                    <li><a href="#">Contact</a></li>
                    {auth.uid ? (
                        <li><button type='button' class="btn btn-danger" onClick={this.props.signOut} >Logout</button></li>
                        
                    ) : (                        
                        <li><a href="/auth">Login/Signup</a></li>
                    )}
            </ul>
            </div>
        </div>
    </nav>

    <section class="header-home">
    <div class="inner-header-home flex">

<h1 class="abc"><b>Port-Your-Folio</b></h1>
<br/>
<p class="para">Start building your portfolio with our templates</p>

</div>
<div class="build">
<Link to={"/build_portfolio"}><button type="button" class="btn btn-light btn-lg ">Build</button></Link>
</div>
<div>
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>

<div>
<div class="content-home flex">
<p>portfolio | 2021 | Free to use</p>
</div>
</div>
    </section>
    

    

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="js/scripts.js"></script>
      </div>
    
    );
}



  }
  const mapStateToProps = (state)=>{
  
    return{
      auth: state.firebase.auth
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  
    
