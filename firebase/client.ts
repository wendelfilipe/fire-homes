// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuhUVel9bDHX8KN2xnBVXDRw-U-AnSJ8g",
  authDomain: "my-fire-home-abc123.firebaseapp.com",
  projectId: "my-fire-home-abc123",
  storageBucket: "my-fire-home-abc123.firebasestorage.app",
  messagingSenderId: "772476659130",
  appId: "1:772476659130:web:c6b723f08792374b286983"
};

// Initialize Firebase
const currentApps = getApps();

let auth: Auth;
let storage: FirebaseStorage;

if(!currentApps.length){
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    storage = getStorage(app);
}else{
    const app = currentApps[0];
    auth = getAuth(app);
    storage = getStorage(app);
}

export { auth, storage };

