import React from 'react'
import Theme1 from '../templates/theme1';
import Theme2 from '../templates/theme2';
import Theme3 from '../templates/theme3';
import Theme4 from '../templates/theme4';
import Theme5 from '../templates/theme5';
export default function theme_selector(props) {

    const data=props.data;

    const id=props.match.params.id;
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
  var theme= '';
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
    if(id === data[key]["website"])
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
  console.log(data,id);
  console.log(name1);
  var ThemeComponent;
  if(theme==="Theme1")
    {ThemeComponent=<Theme1  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>;
  }
  else if(theme==="Theme2")
  {ThemeComponent=<Theme2  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>;}
  else if(theme==="Theme3")
  {ThemeComponent=<Theme3  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>;
  console.log("t3");}
  else if(theme==="Theme4")
  {ThemeComponent=<Theme4  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>;}
  else if(theme==="Theme5")
  {ThemeComponent=<Theme5  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme} p1_name={p1_name} p1_det={p1_det} p1_skill={p1_skill} p1_link={p1_link} p2_name={p2_name} p2_det={p2_det} p2_skill={p2_skill} p2_link={p2_link} p3_name={p3_name} p3_det={p3_det} p3_skill={p3_skill} p3_link={p3_link} p4_name={p4_name} p4_det={p4_det} p4_skill={p4_skill} p4_link={p4_link} work_exp_name1= {work_exp_name1} work_exp_job1= {work_exp_job1} work_exp_date1= {work_exp_date1} work_exp_bio1= {work_exp_bio1} work_exp_name2= {work_exp_name2} work_exp_job2= {work_exp_job2} work_exp_date2={work_exp_date2} work_exp_bio2= {work_exp_bio2}/>;}
    return (
        <div>
          {ThemeComponent}
        </div>
    )
}
