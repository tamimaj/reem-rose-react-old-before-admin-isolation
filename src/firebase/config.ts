import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCIifNSTZsial1yGOSVmNswXlmrH_rrKfQ",
  authDomain: "reemrose-next.firebaseapp.com",
  projectId: "reemrose-next",
  storageBucket: "reemrose-next.appspot.com",
  messagingSenderId: "142418627587",
  appId: "1:142418627587:web:078d3e82fe2f459537d236",
  measurementId: "G-JPCMJ0D63C",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;
