import logo from './logo.svg';
import './App.css';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import initializeAuthentication from './firebase/firebase.initialize';


initializeAuthentication()

const provider = new GoogleAuthProvider();
function App() {
  return (
    <div className="App">
      <h1>Ding Dong </h1>
      <button onClick>Sign In</button>
    </div>
  );
}

export default App;
