export const submit_to_db= (data)=>{
	
  
	return (dispatch,getState,{getFirebase,getFirestore})=>{
		const firestore=getFirestore();
		firestore.collection('users').doc(data.uid).update({
			name: data.name,
			email: data.email,
			website: data.website,
			bio: data.bio,
			phone: data.phone,
			photo: data.photo,
			job_title: data.job_title,
			location: data.location,
			git_link: data.git_link,
			linkedin_link: data.linkedin_link,
			twitter_link: data.twitter_link,
			work_exp: data.work_exp,
			hobbies: data.hobbies,
			skills: data.skills,
			projects: data.projects,
			resume_link: data.resume_link,
			theme: data.theme,
			p1_name: data.p1_name,
			p1_det: data.p1_det,
			p1_skill: data.p1_skill,
			p1_link: data.p1_link,
			p2_name: data.p2_name,
			p2_det: data.p2_det,
			p2_skill: data.p2_skill,
			p2_link: data.p2_link,
			p3_name: data.p3_name,
			p3_det: data.p3_det,
			p3_skill: data.p3_skill,
			p3_link: data.p3_link,
			p4_name: data.p4_name,
			p4_det: data.p4_det,
			p4_skill: data.p4_skill,
			p4_link: data.p4_link,
			work_exp_name1: data.work_exp_name1,
			work_exp_job1: data.work_exp_job1,
			work_exp_date1:data.work_exp_date1,
			work_exp_bio1: data.work_exp_bio1,
			work_exp_name2: data.work_exp_name2,
			work_exp_job2: data.work_exp_job2,
			work_exp_date2: data.work_exp_date2,
			work_exp_bio2: data.work_exp_bio2
		}).then(()=>{
			
			dispatch({type:'CREATE_PROJECT1'});
		}).catch((err)=>{
			dispatch({type:'CREATE_PROJECT_ERR1'});
		})
		
	}

}

