import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Auth from './components/auth';
import Theme1 from './templates/theme1';
import Theme2 from './templates/theme2';
import Theme3 from './templates/theme3';
import Theme4 from './templates/theme4';
import Theme5 from './templates/theme5';
import User_Input from './components/user_input.js';
import Theme_Selector from './components/theme_selector.js';
import { firestoreConnect} from  'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
function App(props) {
  const {data,uid}=props;
  
  var name1='';
  var email='';
  var website= '';
  var bio= '';
  var phone= '';
  var photo= '';
  var job_title= '';
  var location= '';
  var git_link= '';
  var linkedin_link= '';
  var twitter_link= '';
  var work_exp= '';
  var hobbies= '';
  var skills= '';
  var projects= '';
  var resume_link= '';
  var theme= 'Theme1';
  var p1_name= '';
  var p1_det= '';
  var p1_skill='';
  var p1_link='';
  var p2_name='';
  var p2_det='';
  var p2_skill='';
  var p2_link='';
  var p3_name='';
  var p3_det='';
  var p3_skill='';
  var p3_link='';
  var p4_name='';
  var p4_det='';
  var p4_skill='';
  var p4_link='';
  var work_exp_name1= '';
  var work_exp_job1= '';
  var work_exp_date1= '';
  var work_exp_bio1= '';
  var work_exp_name2= '';
  var work_exp_job2= '';
  var work_exp_date2= '';
  var work_exp_bio2= '';
 for(var key in data)
  {
    if(uid === data[key]["id"])
    {
      name1=data[key]["name"];
      email=data[key]["email"];
      website=data[key]["website"];
      bio=data[key]["bio"];
      phone=data[key]["phone"];
      photo=data[key]["photo"];
      job_title=data[key]["job_title"];
      location=data[key]["location"];
      git_link=data[key]["git_link"];
      linkedin_link=data[key]["linkedin_link"];
      twitter_link=data[key]["twitter_link"];
      work_exp=data[key]["work_exp"];
      hobbies=data[key]["hobbies"];
      skills=data[key]["skills"];
      projects=data[key]["projects"];
      resume_link=data[key]["resume_link"];
      theme=data[key]["theme"];
      p1_name= data[key]["p1_name"];
			p1_det= data[key]["p1_det"];
			p1_skill=data[key]["p1_skill"];
			p1_link=data[key]["p1_link"];
			p2_name=data[key]["p2_name"];
			p2_det=data[key]["p2_det"];
			p2_skill=data[key]["p2_skill"];
			p2_link=data[key]["p2_link"];
			p3_name=data[key]["p3_name"];
			p3_det=data[key]["p3_det"];
			p3_skill=data[key]["p3_skill"];
			p3_link=data[key]["p3_link"];
			p4_name=data[key]["p4_name"];
			p4_det=data[key]["p4_det"];
			p4_skill=data[key]["p4_skill"];
      p4_link=data[key]["p4_link"];
      work_exp_name1= data[key]["work_exp_name1"];
  work_exp_job1= data[key]["work_exp_job1"];
  work_exp_date1= data[key]["work_exp_date2"];
  work_exp_bio1= data[key]["work_exp_bio1"];
  work_exp_name2= data[key]["work_exp_name2"];
  work_exp_job2= data[key]["work_exp_job2"];
  work_exp_date2=data[key]["work_exp_date2"];
  work_exp_bio2= data[key]["work_exp_bio2"];

    }
  }
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Switch>

      <Route exact path="/portfolio/:id" exact component={props=><Theme_Selector {...props} data={data}/>} />
    </Switch>
    <Switch>

      <Route exact path="/theme1" exact component={()=><Theme1 uid={uid} name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>} />
    </Switch>
    <Switch>
      <Route exact path="/theme2" exact component={()=><Theme2 uid={uid} name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>} />
    </Switch>
    <Switch>
      <Route exact path="/theme3" exact component={()=><Theme3 uid={uid} name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>} />
    </Switch>
    <Switch>
      <Route exact path="/theme4" exact component={()=><Theme4 uid={uid} name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>} />
    </Switch>
    <Switch>
      <Route exact path="/theme5" exact component={()=><Theme5 uid={uid} name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>} />
    </Switch>
    <Switch>
      <Route exact path="/build_portfolio" exact component={()=><User_Input uid={uid}/>} />
    </Switch>
    <Switch>
      <Route exact path="/auth" component={Auth} />
    </Switch>
    </BrowserRouter>
  );
}


const mapStateToProps=(state)=>{

  if (state.firestore.ordered.users){
    return{
    data: state.firestore.ordered.users,
    uid: state.firebase.auth.uid
  }
  }
  else{
    return{}
  }
  
}
export default compose(

  firestoreConnect([
      { collection: 'users' }
    ]),
    connect(mapStateToProps)
  )(App);



