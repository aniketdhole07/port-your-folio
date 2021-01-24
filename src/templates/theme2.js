import React, { Component } from 'react'
import './theme2.css'
export default class theme2 extends Component {
    render() {
        return (
            <div>
                <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">Rachel White</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="#works">Works</a></li>
          </ul>
        </div>
      </div>
    </div>


	<div id="headerwrap">
	    <div class="container">
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<h4>HELLO PEOPLE, MY NAME IS</h4>
					<h1>Rachel White</h1>
					<h4>ARTIST & TECHNOLOGIST</h4>
				</div>
			</div>
	    </div> 
	</div>
	
	<section id="works"></section>
	<div class="container">
		<div class="row centered mt mb">
			<h1>My Portfolio</h1>
			
			<div class="col-lg-4 col-md-4 col-sm-4 gallery">
				<a href="work.html"></a>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4 gallery">
				<a href="work.html"></a>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4 gallery">
				<a href="work.html"></a>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4 gallery">
				<a href="work.html"></a>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4 gallery">
				<a href="work.html"></a>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4 gallery">
				<a href="work.html"></a>
			</div>
		</div>
	</div>
	
	<div id="social">
		<div class="container">
			<div class="row centered">
				<div class="col-lg-2">
					<a href="#"><i class="fa fa-dribbble"></i></a>
				</div>
				<div class="col-lg-2">
					<a href="#"><i class="fa fa-facebook"></i></a>
				</div>
				<div class="col-lg-2">
					<a href="http://www.twitter.com/ohhoe"><i class="fa fa-twitter"></i></a>
				</div>
				<div class="col-lg-2">
					<a href="https://www.linkedin.com/in/rachelwhite/"><i class="fa fa-linkedin"></i></a>
				</div>
				<div class="col-lg-2">
					<a href="http://www.instagram.com/ohhoe"><i class="fa fa-instagram"></i></a>
				</div>
				<div class="col-lg-2">
					<a href="#"><i class="fa fa-tumblr"></i></a>
				</div>
			
			</div>
		</div>
	</div>

	<div id="footerwrap">
		<div class="container">
			<div class="row centered">
				<div class="col-lg-4">
					<p><b>ARTIST & TECHNOLOGIST</b></p>
				</div>
			
				<div class="col-lg-4">
					<p>Living in Brooklyn.</p>
				</div>
				<div class="col-lg-4">
					<p>rawhit@microsoft.com</p>
				</div>
			</div>
		</div>
	</div>
            </div>
        )
    }
}
