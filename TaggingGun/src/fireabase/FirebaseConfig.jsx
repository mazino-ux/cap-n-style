import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMlT_GR1SSUEahqcStE3ccQcnLieCeqwE",
  authDomain: "taggingundele.firebaseapp.com",
  projectId: "taggingundele",
  storageBucket: "taggingundele.appspot.com",
  messagingSenderId: "485192685475",
  appId: "1:485192685475:web:34f26401dcf519154d6c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

// Export the fireDB and auth objects
export {fireDB,auth } ;