import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCZRDpyeFm1rCLHA_lMn0AWsjXBZQ-_AnA",
  authDomain: "getresume-b7e11.firebaseapp.com",
  projectId: "getresume-b7e11",
  storageBucket: "getresume-b7e11.appspot.com",
  messagingSenderId: "244540074434",
  appId: "1:244540074434:web:b3f6e847010a0c3a670e5b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

  export {projectStorage, projectFirestore}

  export default firebase;