
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC3gXntet1uKV15KPypEtpXuyzoATJz-gs",
  authDomain: "port-your-folio.firebaseapp.com",
  projectId: "port-your-folio",
  storageBucket: "port-your-folio.appspot.com",
  messagingSenderId: "615101498898",
  appId: "1:615101498898:web:c68c5342254aeccc09bacb",
  measurementId: "G-RYP9DLSD8J"
};

    firebase.initializeApp(config);
    firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase