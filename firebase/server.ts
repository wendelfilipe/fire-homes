import {Firestore, getFirestore} from "firebase-admin/firestore";
import {getApps, ServiceAccount}  from "firebase-admin/app";
import admin, { initializeApp } from "firebase-admin";

const serviceAccount = {
    "type": "service_account",
}

let firestore: Firestore
const currentApps = getApps();

if(!currentApps.length){
    const app = initializeApp({
        credential: admin.credential.cert(serviceAccount as ServiceAccount)
    });
    firestore = getFirestore(app);
}else{
    const app = currentApps[0];
    firestore = getFirestore(app);
}

export { firestore };