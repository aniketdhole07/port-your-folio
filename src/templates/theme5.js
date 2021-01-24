import React, { Component } from 'react';
import $ from 'jquery';
import './theme5.css';
export default class theme5 extends Component {
    render() {
        return (
            
    <div>        
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#home"><span class="fa fa-home"></span> Home</a></li>
        <li><a href="#bio"><span class="fa fa-info-circle"></span> About</a></li>
        <li><a href="#portfolio"><span class="fa fa-book"></span> Portfolio</a></li> 
        <li><a href="#contact-me"><span class="fa fa-envelope"></span> Contact</a></li> 
      </ul>
    </div>
  </div>
</nav>


<header>
 <div id="b" class="container">
  <div class="header"> 
   <div class="background">
 <div class="text-center center-block" id="home"> 
  <h2>Aaron Cuddeback</h2>
    <h4>N00b Web Developer</h4>
   <ul class="social">
     <li><a href="https://twitter.com/aaroncuddeback" target="_blank"><i class="fa fa-3x fa-twitter"></i></a></li>
     <li><a href="https://github.com/gymrat" target="_blank"><i class="fa fa-3x fa-github"></i></a></li>
     <li><a href="https://facebook.com/gymratpacks" target="_blank"><i class="fa fa-3x fa-facebook"></i></a></li>
   </ul>
     </div>
    </div>
   </div>
  </div>
</header>



  
<div class="about" id="bio">
 <div class="content">
 <div class="row">
   <div class="col-sm-4"> 
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/548344/heroratman.png" class="img-circle" alt="Aaron Cuddeback Portrait" width="225" height="225" id="bioimage"/></div>
       <div class="col-sm-8">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra pharetra tempus. Nam placerat malesuada pellentesque. Morbi in elit sed quam rhoncus laoreet. In quam neque, euismod egestas viverra at, faucibus pulvinar magna. Vestibulum eleifend facilisis magna, non pulvinar sapien aliquam pulvinar. Pellentesque nec orci convallis, mollis augue at, elementum orci. Aenean neque sem, viverra vel lectus ac, volutpat gravida massa. Donec id justo venenatis, luctus ex a, imperdiet libero. Nullam varius placerat tellus, eu scelerisque turpis consectetur nec. Curabitur dapibus, tortor ac venenatis porttitor, leo neque vehicula eros, ac ornare tellus tellus ut nulla. Sed sed justo commodo sem scelerisque pulvinar. Sed lacinia laoreet enim, ut fermentum leo ultrices a. Sed semper elit a ligula vestibulum, quis accumsan lorem efficitur.</p></div>
  </div>
 </div>
  </div>
 

  
  <section id="portfolio" class="section section-portfolio">
	<div class="animate-up">
		<h2 class="section-title">- Projects -</h2>

		<div class="filter">
			<div class="filter-inner">
				<div class="filter-bar">
					<span class="filter-bar-line"></span>
				</div>
			</div>
		</div>

		<div class="grid">
			<div class="grid-sizer"></div>

			<div class="grid-item size22 photography">
				<div class="grid-box">
					<figure class="portfolio-figure">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/548344/gymrat.png" alt=""/>
						<figcaption class="portfolio-caption">
							<div class="portfolio-caption-inner">
								<h3 class="portfolio-title">Gymratpacks.com</h3>
								<h4 class="portfolio-cat">Companies</h4>

<div class="btn-group">
<a class="btn-link" href="http://gymratpacks.com" target="_blank"><i class="icon-link"></i></a>
<a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox1" href="#"><i class="icon icon-eye"></i></a>
</div>
	</div>
						</figcaption>
					</figure>

					<div id="portfolio1-inline1" class="fancybox-inline-box">
<div class="inline-embed" data-embed-type="image" data-embed-url="img/uploads/portfolio/portfolio-thumb-05-large.jpg"></div>
						<div class="inline-cont">
							<h2 class="inline-title"></h2>
							<div class="inline-text">
								<p></p>
							</div>
						</div>
					</div>

					<div id="portfolio1-inline2" class="fancybox-inline-box">
																<div class="inline-embed" data-embed-type="image" data-embed-url="img/uploads/portfolio/portfolio-thumb-01-large.jpg"></div>
						<div class="inline-cont">
							<div class="inline-text">
								<h2 class="inline-title"></h2>
					
							</div>
						</div>
					</div>

					<div id="portfolio1-inline3" class="fancybox-inline-box">
																<div class="inline-embed" data-embed-type="iframe" data-embed-url="https://player.vimeo.com/video/118244244"></div>
						<div class="inline-cont">
							<div class="inline-text">
								<h2 class="inline-title"></h2>
								
							</div>
						</div>
					</div>
		
				</div>
			</div>

			<div class="grid-item size11 bridge">
				<div class="grid-box">
					<figure class="portfolio-figure">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/548344/AB_Equity.jpg" alt=""/>
						<figcaption class="portfolio-caption">
							<div class="portfolio-caption-inner">
								<h3 class="portfolio-title">AB Equity Group</h3>
								<h4 class="portfolio-cat">Companies</h4>

								<div class="btn-group">
									<a class="btn-link" href="http://abequitygroup.com" target="_blank"><i class="icon icon-link"></i></a>
									<a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox2" href="#portfolio2-inline1"><i class="icon icon-eye"></i></a>
								</div>
							</div>
						</figcaption>
					</figure>

			
					<div id="portfolio2-inline1" class="fancybox-inline-box">
						<div class="inline-cont">
							<h2 class="inline-title">Test</h2>
							<div class="inline-text">
								
							</div>
						</div>
					</div>
				
				</div>
			</div>

			<div class="grid-item size11 nature photography">
				<div class="grid-box">
					<figure class="portfolio-figure">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/548344/goldriverseo.gif" alt=""/>
						<figcaption class="portfolio-caption">
							<div class="portfolio-caption-inner">
								<h3 class="portfolio-title">Gold River SEO</h3>
								<h4 class="portfolio-cat">Companies</h4>

								<div class="btn-group">
									<a class="btn-link" href="http://goldriverseo.com" target="_blank"><i class="icon icon-link"></i></a>
									<a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox3" href="#portfolio"><i class="icon icon-eye"></i></a>
									<a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox3" href="abequitygroup.com"></a>
									<a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox3" href="#portfolio"></a>
								</div>
							</div>
						</figcaption>
					</figure>

				
				</div>
			</div>
		</div>

		
	</div>
</section>

  
  <div class="container">
    <div id="contact-form">
  <form action="index.html" method="post" id="contact-me">
        <h1> Contact Me </h1>
        
        <fieldset>
          
          <legend><span class="number">1</span> Your Basic Info</legend>
        
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name"/>
        
          <label for="email">Email:</label>
          <input type="email" id="mail" name="user_email"/>
          
         <label for="bio">Your Message:</label>
          <textarea id="bio" name="user_bio"></textarea>
   
         </fieldset>
      
        <button type="submit">Submit</button>
       </form>
       </div>
  </div>
  

 
    <div id="social-box">
      <h1>Let's have a chat!</h1>
      <div class="container fluid" id="social-contact">
      <ul>
      <li><a href="https://twitter.com/aaroncuddeback" target="_blank"><i class="fa fa-fw fa-4x fa-twitter"></i></a> Twitter</li>
        <li><a href="https://github.com/gymrat"  target="_blank"><i class="fa fa-fw fa-4x fa-github"></i></a> Github</li>
        <li><a href="https://facebook.com/gymratpacks"  target="_blank"><i class="fa fa-fw fa-4x fa-facebook"></i></a> Facebook</li>
      </ul>
      </div>
  </div>

  <footer id="footer-links">
    <ul>
      <li><a href="#home"/>Home</li>
      <li><a href="#bio"/>About</li>
      <li><a href="#portfolio"/>Portfolio</li>
      <li><a href="#contact"/>Contact</li>
    </ul>
    <p>Copyright  &#169 <a href="https://twitter.com/aaroncuddeback"target="_blank">Aaron Cuddeback</a> Designs 2016</p>
  </footer>
            </div>
            
        )
    }
}