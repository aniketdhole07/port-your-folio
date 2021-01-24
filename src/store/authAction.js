import axios from 'axios'
export const signIn=(credentials)=>{
	return(dispatch,getState,{getFirebase})=>{
		const firebase=getFirebase();
		firebase.auth().signInWithEmailAndPassword(
			credentials.email_si,
			credentials.password_si
			).then(()=>{

				dispatch({type:'LOGIN_SUCCESS'});
			}).catch((err)=>{
				dispatch({type:'LOGIN_ERROR',err});
			});
	}
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export const signUp = (newUser) => {	
	var solved = [];
  
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(resp => {
      firebase.auth().currentUser.sendEmailVerification();
         axios({
            method: "POST", 
            url:"https://nameless-brushlands-46737.herokuapp.com/send", 
            data: {
        name: newUser.name,
        email: newUser.email
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Email sent, awesome!"); 
            }else if(response.data.msg === 'fail'){
                alert("Oops, something went wrong. Try again")
            }
        })
      return firestore.collection('users').doc(resp.user.uid).set({
        name: newUser.name,
        email:newUser.email,
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
        hobbies: '',
        skills: '',
        projects: '',
        resume_link: '',
        theme: 'Theme 1'

      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }

}