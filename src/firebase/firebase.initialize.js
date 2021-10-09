import{ initializeApp} from 'firebase/App';
import firebaseConfig from "./firebaseConfig";

const initializeAuthentication =()=>{
initializeApp(firebaseConfig);
}

export default initializeAuthentication;