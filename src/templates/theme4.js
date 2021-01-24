import React, { Component } from 'react'
import './theme4.css'
import $ from 'jquery';
export default class theme4 extends Component {
    render() {
        
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// $('body').scrollspy({
//     target: '.navbar-fixed-top'
// })

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


        return (
<div id="page-top" class="index">
    <nav class="navbar navbar-default navbar-color navbar-fixed-top">
        <div class="container_t4">
            
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-left">
                    <li class="page-scroll">
                        <a href="#page-top">Home</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#myLikes">What I Do</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            
        </div>
      
    </nav>


    <header>
        <div class="container_t4">
            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-text">
                        <span class="name">{this.props.name}</span>
                        <span class="skills">{this.props.skills}</span>
                        <hr class="star-light"/>
                    </div>
                    <img class="img-responsive img-bigScreen" src="https://res.cloudinary.com/dasdezine/image/upload/v1458052055/glass_cdjbpa.png" alt="glasses image" title="geek loves glasses"/>
                </div>
            </div>
            <div class="seeMore-btn text-center btn-style">
                <div class="btn-styleLine double-line page-scroll">
                    <a href="#portfolio" class=" btn-lg btn-outline">
                        See More
                    </a>
                </div>
            </div>
        </div>
    </header>


    <section id="myLikes">
        <div class="_t4">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>My Projects</h2>
                    <hr class="star-primary"/>
                    <p>{this.props.bio}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 portfolio-item">
                    
                    <article class="portfolio-item-One">
                        <header>
                            <h3>{this.props.p1_name}</h3>
                        </header>
                        <p>
                        {this.props.p1_det}
                        </p>
                        <p>
                        {this.props.p1_link}
                        </p>
                        <p>
                        {this.props.p1_skill}
                        </p>
                    </article>
                </div>
                <div class="col-sm-4 portfolio-item">
                <article class="portfolio-item-One">
                        <header>
                            <h3>{this.props.p2_name}</h3>
                        </header>
                        <p>
                        {this.props.p2_det}
                        </p>
                        <p>
                        {this.props.p2_link}
                        </p>
                        <p>
                        {this.props.p2_skill}
                        </p>
                    </article>
                </div>
                <div class="col-sm-4 portfolio-item">
                <article class="portfolio-item-One">
                        <header>
                            <h3>{this.props.p3_name}</h3>
                        </header>
                        <p>
                        {this.props.p3_det}
                        </p>
                        <p>
                        {this.props.p3_link}
                        </p>
                        <p>
                        {this.props.p3_skill}
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </section>
    <div>
        <hr class="loc-hr"/>
    </div>

    
    <div>
        <hr class="loc-hr"/>
    </div>


    <section id="about">
        <div class="container_t4">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Work Experience</h2>
                    <hr class="star-primary"/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 center-block about-item">
                    <img src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png" class="img-responsive" alt=""/>
                    <article class="about-item-One">
                        <header>
                            <h3>{this.props.work_exp_name1}</h3>
                            <h3>{this.props.work_exp_job1}</h3>
                            <h3>{this.props.work_exp_date1}</h3>
                        </header>
                        <p>
                        {this.props.work_exp_bio1}
                        </p>
                    </article>
                </div>
                <div class="col-sm-4 about-item ">

                        <img src="https://res.cloudinary.com/dasdezine/image/upload/v1458052396/illustrator_a9kxav.png" class="img-responsive" alt=""/>

                    <article class="about-item-Two">
                    <header>
                            <h3>{this.props.work_exp_name2}</h3>
                            <h3>{this.props.work_exp_job2}</h3>
                            <h3>{this.props.work_exp_date2}</h3>
                        </header>
                        <p>
                        {this.props.work_exp_bio2}
                        </p>
                    </article>
                </div>
               
            </div>
            <div class="text-center btn-style double-line">
                <div class="btn-styleLine">
                    <a href={this.props.resume_link} class=" btn-lg btn-outline">
                         Download Resume
                    </a>
                </div>
            </div>
        </div>
    </section>
                

    <section id="contact">
        <div class="container_t4">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Contact Me</h2>
                    <hr class="star-primary"></hr>
                </div>
            </div>
            <div class="row form-padding">
                <div class="col-lg-8 col-lg-offset-2">
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."></input>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Email Address</label>
                                <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."></input>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Message</label>
                                <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <br/>
                        <div class="contact-btn text-center btn-style">
                            <div class="btn-styleLine double-line page-scroll">
                                <a href="#portfolio" class="btn btn-lg btn-outline">
                                   Send
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="text-center">
        <div class="footer-above">
            <div class="container_t4">
                <div class="row4_bottom">
                    <div class="footer-col col-md-4">
                        <h3>Location</h3>
                    <p>{this.props.location}</p>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul class="list-inline">
                            <li>
                                <a href={this.props.linkedin_link} target="_blank" class="btn-social btn-outline" alt="Behance" title="Behance">
                                    <i class="fa fa-fw fa-behance" aria-hidden="true"></i>
                                    <span class="sr-only">Linkedin</span>
                                </a>
                            </li>
                            <li>
                                <a href={this.props.git_link} target="_blank" class="btn-social btn-outline" alt="Codepen" title="Codepen">
                                    <i class="fa fa-fw fa-codepen" aria-hidden="true"></i>
                                    <span class="sr-only">Github</span>
                                </a>
                            </li>
                            <li>
                                <a href={this.props.twitter_link} target="_blank" class="btn-social btn-outline"
                                alt="Twitter" title="Twitter">
                                    <i class="fa fa-fw fa-twitter" aria-hidden="true"></i>
                                    <span class="sr-only">twitter</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Contact Info</h3>
                        <ul class="list-inline">
                            <li>
                                <a href="tel:0091 90 51 314800" class="btn-social btn-outline" alt="My Phone number"
                                title="+91 9051314800">
                                    <i class="fa fa-fw fa-phone" aria-hidden="true"></i>
                                    <span class="sr-only ">My Phone number</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ipabhi@gmail.com" class="btn-social btn-outline" alt="My E-mail ID"
                                title="My E-mail ID">
                                    <i class="fa fa-fw fa-envelope" aria-hidden="true"></i>
                                    <span class="sr-only ">My E-mail</span>
                                </a>
                            </li>
                        </ul>
                        <p class="white_text">If you want to hire me please use phone contact or my E-mail.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container_t4">
                <div class="row">
                </div>
            </div>
        </div>
    </footer>

    
    <div class="scroll-top page-scroll visible-xs visible-sm">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>
</div>
        );
    }
}