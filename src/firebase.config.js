import { initializeApp, getApp, getApps, } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    
  apiKey: "AIzaSyCfWbmzTVh_5JauVELixYb0db7MTaFyKrA",
  authDomain: "projeto-test-56c9b.firebaseapp.com",
  projectId: "projeto-test-56c9b",
  storageBucket: "projeto-test-56c9b.appspot.com",
  messagingSenderId: "1030194470961",
  appId: "1:1030194470961:web:4bc4f8346a719d2662b510"
};

const app = getApps.length > 0 ? getApp() :  initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage}