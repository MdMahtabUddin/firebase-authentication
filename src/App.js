import logo from './logo.svg';
import './App.css';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3G1OH_kqSBKWL2owCqQiD6Gnjfaegd2c",
  authDomain: "simple-firebase-95511.firebaseapp.com",
  projectId: "simple-firebase-95511",
  storageBucket: "simple-firebase-95511.appspot.com",
  messagingSenderId: "114579888052",
  appId: "1:114579888052:web:70c4d9e3f17c83b5dd04e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
function App() {
  const GoogleSignIn =()=>{
const auth = getAuth()
signInWithPopup=(auth , provider)
.then(result => {
  const user =result.user;
  console.log(user);
})

  }
  return (
    <div className="App">
      <h1>Ding Dong </h1>
      <button onClick ={GoogleSignIn} >Sign In</button>
    </div>
  );
}

export default App;
