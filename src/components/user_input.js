import React, { Component } from 'react'
import {Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {submit_to_db} from "../store/solvedAction.js";
import Form from 'react-bootstrap/Form'
class User_Input extends Component {
    state = {
        name: '',
        email: '',
        website: '',
        bio: '',
        phone: '',
        photo: '',
        job_title: '',
        location: '',
        git_link: '',
        linkedin_link: '',
        twitter_link: '',
        work_exp: '',
        work_exp_name1: '',
        work_exp_job1: '',
        work_exp_date1: '',
        work_exp_bio1: '',
        work_exp_name2: '',
        work_exp_job2: '',
        work_exp_date2: '',
        work_exp_bio2: '',
        hobbies: '',
        skills: '',
        projects: '',
        resume_link: '',
        theme: 'Theme1',
        uid:'',
        p1_name: '',
        p1_det: '',
        p1_skill: '',
        p1_link: '',
        p2_name: '',
        p2_det: '',
        p2_skill: '',
        p2_link: '',
        p3_name: '',
        p3_det: '',
        p3_skill: '',
        p3_link: '',
        p4_name: '',
        p4_det: '',
        p4_skill: '',
        p4_link: '',
        check: false
      }
     
    
    
      onSubmit = event => {
        event.preventDefault();
        if(this.props.uid){
            
            this.setState({
                uid:this.props.uid,
                check:true
              }, () => {
                this.props.submit_to_db(this.state);
                
                //this.context.router.push(link_site);
              }); 
            
        }
        else{
            alert("Please Login/SignUp To Build Your Portfolio");
          }
        
      };
      
     
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
      onChangeTheme = event => {
        this.setState({ theme: event.target.value }, () => 
        console.log(this.state,event.target.value));
        
        //this.setState({ [this.state.theme] : event.target.value });
        //console.log(this.state.theme,event.target.value);
      }
    
      render() {
    
        // const { auth,authError}=this.props;
        // if (!auth.uid) return <Redirect to='/' /> 
        // var check = false;
        var link_site = '/portfolio/'+this.state.website;
        if(this.state.check)
        {
          return(
            
            <Redirect to={link_site}/>
          )
        }
    
       
        
        return (
    
    <section class="forms-section">
      
          <form class="form form-signup" onSubmit={this.onSubmit}>
            <fieldset>
              <legend>Please Enter Your Portfolio Details</legend>
              <Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Select Theme for Portfolio</Form.Label>
    <Form.Control as="select" custom onChange={this.onChangeTheme.bind(this)}>
      <option>Theme1</option>
      <option>Theme2</option>
      <option>Theme3</option>
      <option>Theme4</option>
      <option>Theme5</option>
    </Form.Control>
  </Form.Group>
</Form>
              <div class="input-block">
                <label for="name">Name</label>
                <input id="name" name="name"  onChange={this.onChange} type="text" required/>
              </div>
              <div class="input-block">
                <label for="signup-email">E-mail</label>
                <input id="signup-email"  name="email"  onChange={this.onChange} type="email" />
              </div>
              <div class="input-block">
                <label for="name">Phone</label>
                <input id="name" name="phone"  onChange={this.onChange} type="tel" />
              </div>
              <div class="input-block">
                <label for="name">Preferred Website Name (https://port-your-folio.web.app/portfolio/your_website_name)</label>
                <input id="name" name="website"  onChange={this.onChange} type="text" required/>
              </div>
              <div class="input-block">
                <label for="name">Enter Your Bio</label>
                <input id="name" name="bio"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Photo Image Link</label>
                <input id="name" name="photo"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Job Title</label>
                <input id="name" name="job_title"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Work Location</label>
                <input id="name" name="location"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Github Link</label>
                <input id="name" name="git_link"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">LinkedIn Link</label>
                <input id="name" name="linkedin_link"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Twitter Link</label>
                <input id="name" name="twitter_link"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Work Experience</label>
                <input id="name" name="work_exp"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                 <label for="name">Hobbies (List by Commas)</label>
                <input id="name" name="hobbies"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Skills (List by Commas)</label>
                <input id="name" name="skills"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Company Name 1</label>
                <input id="name" name="work_exp_name1"   onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Company Job Title 1</label>
                <input id="name" name="work_exp_job1"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Details 1</label>
                <input id="name" name="work_exp_bio1" onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Date 1</label>
                <input id="name" name="work_exp_date1"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Company Name 2</label>
                <input id="name" name="work_exp_name2"   onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Company Job Title 2</label>
                <input id="name" name="work_exp_job2"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Details 2</label>
                <input id="name" name="work_exp_bio2" onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Date 2</label>
                <input id="name" name="work_exp_date2"  onChange={this.onChange} type="text" />
              </div>
          
              <div class="input-block">
                <label for="name">Project Name 1</label>
                <input id="name" name="p1_name"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Projet Details 1</label>
                <input id="name" name="p1_det" onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Link 1</label>
                <input id="name" name="p1_link"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Skills (List by Commas)</label>
                <input id="name" name="p1_skill"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Name 2</label>
                <input id="name" name="p2_name"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Projet Details 2</label>
                <input id="name" name="p2_det" onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Link 2</label>
                <input id="name" name="p2_link"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Skills 2(List by Commas)</label>
                <input id="name" name="p2_skill"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Name 3</label>
                <input id="name" name="p3_name"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Projet Details 3</label>
                <input id="name" name="p3_det" onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Link 3</label>
                <input id="name" name="p3_link"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Skills 3(List by Commas)</label>
                <input id="name" name="p3_skill"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Name 4</label>
                <input id="name" name="p4_name"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Projet Details 4</label>
                <input id="name" name="p4_det" onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Link 4</label>
                <input id="name" name="p4_link"  onChange={this.onChange} type="text" />
              </div>
              <div class="input-block">
                <label for="name">Project Skills 4(List by Commas)</label>
                <input id="name" name="p4_skill"  onChange={this.onChange} type="text" />
              </div>
            </fieldset>
            <button type="submit" class="btn-signup">Continue</button>
            
          </form>
        
    </section>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
      submit_to_db:(data)=>dispatch(submit_to_db(data))
    }
  }
export default connect(null,mapDispatchToProps)(User_Input);