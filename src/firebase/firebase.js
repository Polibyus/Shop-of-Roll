import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

//firebaseconfig

const firebaseConfig = {
  apiKey: "AIzaSyC5alOpNcsZ9qxmu5kTrUwsr08qjcmb5Bc",
  authDomain: "shop-of-roll.firebaseapp.com",
  projectId: "shop-of-roll",
  storageBucket: "shop-of-roll.appspot.com",
  messagingSenderId: "470904819706",
  appId: "1:470904819706:web:2398fa79c4b66ebabede43",
  measurementId: "G-BLED7EHRP3"
};


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APIID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage(app);
export default db;
