import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVo2Nud-MNL0csLd2EJDV6vklJLcRp16s",
  authDomain: "firstapp-389f2.firebaseapp.com",
  projectId: "firstapp-389f2",
  storageBucket: "firstapp-389f2.appspot.com",
  messagingSenderId: "295785110238",
  appId: "1:295785110238:web:a6ef2a258e46a209f0804f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

// Export the fireDB and auth objects
export {fireDB,auth } ;