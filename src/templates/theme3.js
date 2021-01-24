import React, { Component } from 'react'

import $ from 'jquery'
export default class theme3 extends Component{
    render() {
     var skills=this.props.skills.split(',');

     var hobbies = this.props.hobbies.split(',');
     console.log(this.props);
        return (
            <div>
               <html>
              <head>
  <meta charset="UTF-8"/>
  <title>{this.props.name} </title>
  <meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="description" content=""/>
<meta name="author" content=""/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
<title>{this.props.name}</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"/>
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'/><link rel="stylesheet" href="./theme3.css"/>

</head>
<body>

<body>
  
   <nav class="navbar1 navbar-default navbar-fixed-top">
      <div class="container">
         <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-controls="navbar">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">{this.props.name}</a>
         </div>
         <div id="navbar1" class="collapse navbar-collapse">
            <ul class="nav1 navbar-nav navbar-right">
               <li id="nav-about"><a href="#about">About</a></li>
               <li id="nav-portfolio"><a href="#portfolio">Portfolio</a></li>
               <li id="nav-contact"><a href="#contact">Contact</a></li>
            </ul>
         </div>
         
      </div>
   </nav>

   <div class="container-fluid">

      <div class="row cover top">
         <div class="col-xs-12">
            <div class="row">
               <div class="col-xs-12 headline">
                  <h1 class="text-center hi-there"> { "Hi I'm"+this.props.name}</h1>
                  <p class="lead text-center">{this.props.job_title}</p>
               </div>
            </div>
            <div class="row">
               <div class="col-xs-12 center-block text-center">
                  <a href="#about"><span id="scrollIcon" class="front-glyph glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
               </div>
            </div>
         </div>
      </div>

      <div id="about" class="row cover heading3">
      <div class="heading4 col-lg-12">
         <h2 class="text-center">About Me</h2>
         <div class="row">
            <div class="col-md-6 text-center about-info">
               <img class="img-circle text-center profile-img" src={this.props.photo}/>
               <p class="text-center heading3">{this.props.bio}</p>
            </div>
            <div class="col-md-6 about-tools">
               
               <div class="col-xs-6">
                  <h3>My skills</h3>
                  <ul>{
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


      <div id="portfolio " class="row cover work">
      <div class="heading3">
         <h2 class="text-center heading3">Experience</h2>
         <div class="row break  heading3">
               <div class="col-lg-12 about-last heading3">
                  <p class="text-center heading3">My work experience <span class="glyphicon glyphicon-arrow-down"></span></p>

                  <div class="container ">
         <div class="row ">
            <div class="col-lg-6">
            <div>
            <h3>{this.props.work_exp_name1}</h3>
            </div>
            <div>
            <h4>{this.props.work_exp_job1}</h4>
            </div>      
                  
                  <div>
                  <h5>{this.props.work_exp_date1}</h5>
                  </div>
                  
                  <div>
                  <p>{this.props.work_exp_bio1}</p>
                  </div>
                  
            </div>
            <div class="col-lg-6">
            <div>
            <h3>{this.props.work_exp_name2}</h3>
            </div>
                  
                  <div>
                  <h4>{this.props.work_exp_job2}</h4>
                  </div>
                  
                  <div>
                  <h5>{this.props.work_exp_date2}</h5>
                  </div>
                 
                  <div>
                  <p>{this.props.work_exp_bio2}</p>
                  </div>
                  
            </div>
            </div>
         </div>
         </div>
               </div>
            
         
      </div>
      </div>
  
      

      
      <div id="portfolio " class="row cover">
      <div class="heading3">
         <h2 class="text-center heading3">Portfolio</h2>
         <div class="row break  heading3">
               <div class="col-lg-12 about-last heading3">
                  <p class="text-center heading3">Check out my latest projects <span class="glyphicon glyphicon-arrow-down"></span></p>
               </div>
            
         <div class="container">
            <div class="row portfolio-projects">
               
               <div class="col-lg-6">
                
                  <div class="row">
                     <div class="col-sm-5 text-center">
                        <h4 class="portfolio-projects--title">{this.props.p1_name}</h4>
                        <p class="portfolio-projects--desc">{this.props.p1_det}</p>
                        <p class="portfolio-projects--desc">{this.props.p1_skill}</p>
                        <a class="btn btn-rounded portfolio-projects--btn" href={this.props.p1_link} role="button">View Project</a>
                     </div>
                     <div class="col-sm-7 text-center">
                        <img class="portfolio-projects--image" src="https://sonorangirl.github.io/img/slice-quotes.png"/>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6">
                 
                  <div class="row">
                     <div class="col-sm-5 text-center pull-right-sm">
                     <h4 class="portfolio-projects--title">{this.props.p2_name}</h4>
                        <p class="portfolio-projects--desc">{this.props.p2_det}</p>
                        <p class="portfolio-projects--desc">{this.props.p2_skill}</p>
                        <a class="btn btn-rounded portfolio-projects--btn" href={this.props.p2_link} role="button">View Project</a>
                     </div>
                     <div class="col-sm-7 text-center pull-right-sm">
                        
                        <img class="img-rounded portfolio-projects--image" src="https://sonorangirl.github.io/img/slice-task-timer.png"/>
                     </div>
                  </div>
               </div>
            </div>
           

            <div class="row portfolio-projects">
               
               <div class="col-lg-6">
                 
                  <div class="row">
                     <div class="col-sm-5 text-center">
                     <h4 class="portfolio-projects--title">{this.props.p3_name}</h4>
                        <p class="portfolio-projects--desc">{this.props.p3_det}</p>
                        <p class="portfolio-projects--desc">{this.props.p3_skill}</p>
                        <a class="btn btn-rounded portfolio-projects--btn" href={this.props.p3_link} role="button">View Project</a>
                     </div>
                     <div class="col-sm-7 text-center">
                        <img class="img-rounded portfolio-projects--image" src="https://sonorangirl.github.io/img/weather-slice.png"/>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6">
                
                  <div class="row">
                     <div class="col-sm-5 text-center pull-right-sm">
                     <h4 class="portfolio-projects--title">{this.props.p4_name}</h4>
                        <p class="portfolio-projects--desc">{this.props.p4_det}</p>
                        <p class="portfolio-projects--desc">{this.props.p4_skill}</p>
                        <a class="btn btn-rounded portfolio-projects--btn" href={this.props.p4_link} role="button">View Project</a>
                     </div>
                     <div class="col-sm-7 text-center pull-right-sm">
                       
                        <img class="img-rounded portfolio-projects--image" src="https://sonorangirl.github.io/img/slice-simon.png" />
                     </div>
                  </div>
               </div>
            </div>
           

         </div>
         </div>
      </div>
      </div>
   </div>

   <div id="contact" class="row cover bottom ">
   <div class="col-lg-12">
      <h2 class="text-center contact-header ">Contact Me</h2>
      
      <p class="text-center contact-email">Get in touch with me <span class="glyphicon glyphicon-arrow-right"></span> {this.props.email} ,{this.props.phone} </p>
      <div class="text-center contact-social-icons">
         <p>Or find me on:</p>
         <ul class="centered">
            
         <a href={this.props.linkedin_link}>
               <li><i class="fa fa-linkedin-square"></i> LinkedIn</li>
            </a>
            <a href={this.props.git_link}>
               <li><i class="fa fa-github"></i> Github Link</li>
            </a>            
            <a href={this.props.twitter_link}>
               <li><i class="fa fa-twitter"></i> Twitter</li>
            </a>
            <a href={this.props.resume_link}>
               <li>Resume</li>
            </a>
         </ul>
         
      </div>
      </div>
   </div>

   <footer class="footer">
      <div class="container">
      </div>
   </footer>

</body>

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js'></script>
<script src='https://cdn.jsdelivr.net/jquery.scrollto/2.1.0/jquery.scrollTo.min.js'></script><script  src="./theme3_js.js"></script>

</body>
</html>
            </div>
        )
    }
}
                                                                                                         