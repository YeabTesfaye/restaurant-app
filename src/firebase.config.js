import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBkiwJ6KL4hUWpzE8Zt6fNveYNeGlHeC1E",
    authDomain: "restaurant-app-13d70.firebaseapp.com",
    databaseURL: "https://restaurant-app-13d70-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-13d70",
    storageBucket: "restaurant-app-13d70.appspot.com",
    messagingSenderId: "695853761987",
    appId: "1:695853761987:web:ee6c690f55d182d1dd6976"
  };

  const app = getApps.length > 0 ? getApps() :initializeApp(firebaseConfig)

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app , firestore, storage}