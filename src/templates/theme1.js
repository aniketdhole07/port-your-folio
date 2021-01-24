import React, { Component } from 'react'
import './theme1.css';

export default class theme1 extends Component {
  render() {

    var skills=this.props.skills.split(',');

     var hobbies = this.props.hobbies.split(',');
    return (
   
<div>
<section class="nav-head">
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">{this.props.website}</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
</section>

<div id="home">
<div class="container">
  <div class="home-wrap text-center col-lg-12">
    <h1 class="home-header">Personal Portfolio Webpage</h1>
    <h2>{this.props.name}</h2>
    <hr class="home-line"/>   
    <div class="home-buttons">
      <a href={this.props.twitter_link} class="btn btn-default"><i class="fa fa-twitter"></i></a>
      <a href={this.props.linkedin_link} class="btn btn-default"><i class="fa fa-linkedin"></i></a><a href="#" class="btn btn-default"><i class="fa fa-github"></i></a>
      <a href={this.props.git_link} class="btn btn-default"><i class="fa fa-fire"></i></a>
    </div>
  </div>
</div>
</div>

<div id="about">
  <div class="container">
    <div class="about-wrap text-center">
      <h1>ABOUT ME</h1>
      <hr class="line"/>
      <div class="about-text">
        <p>{this.props.bio}</p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3>Skills:</h3>
          <ul class="skills-list">{
                     skills.map(skill=>(
                        <li>{skill}</li>
                     ))
                  }</ul>
               </div>
               <div class="col-xs-6">
                  <h3>My Hobbies</h3>
                  <ul>{
                     hobbies.map(hobby=>(
                        <li>{hobby}</li>
                     ))
                  }</ul>
          
        </div>
        
      </div>
      
    </div>
    
  </div>
  
</div>

<div id="portfolio">
  <div class="container">
    <h1 class="portfolio-header text-center">PORTFOLIO</h1>
    <hr class="line"/>
    <div class="placeholder-box">
      <div class="row">
        <div class="col-md-4">
          <div class="placeholder-item">
            <a href="#"><img src="https://placehold.it/350x150" alt="project"/></a>
            <p class="placeholder-desc"> Placeholder</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="placeholder-item">
            <a href="#"><img src="https://placehold.it/350x150" alt="project"/></a>
            <p class="placeholder-desc"> Placeholder</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="placeholder-item">
            <a href="#"><img src="https://placehold.it/350x150" alt="project"/></a>
            <p class="placeholder-desc"> Placeholder</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="placeholder-item">
            <a href="#"><img src="https://placehold.it/350x150" alt="project"/></a>
            <p class="placeholder-desc"> Placeholder</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="placeholder-item">
            <a href="#"><img src="https://placehold.it/350x150" alt="project"/></a>
            <p class="placeholder-desc"> Placeholder</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="placeholder-item">
            <a href="#"><img src="https://placehold.it/350x150" alt="project"/></a>
            <p class="placeholder-desc"> Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="divider"></div>

<div id="contact">
  <div class="container">
    <div class="contact-wrap text-center">
      <h1 class="contact-header">CONTACT</h1>
      <hr class="contact-line"/>
      <form method="post" action="#">
        <div class="row">
          <div class="col-md-12">
            <input type="text" id="name" name="name" required="required" placeholder="John Doe" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <input type="email" id="email" name="email" placeholder="johndoe@example.com" required="required" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <textarea id="message" name="message" required="required" data-minlength="20"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <input type="submit" value="Submit" class="btn btn-default" id="submit-button"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<footer>
  <ul class="footer-menu">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</footer>
      </div>
      
    );
  }
}

  
            