
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyBz254D7yVr0TZXLr7ND187mJT7wr_3w9Y",
    authDomain: "clone-e6a02.firebaseapp.com",
    databaseURL: "https://clone-e6a02.firebaseio.com",
    projectId: "clone-e6a02",
    storageBucket: "clone-e6a02.appspot.com",
    messagingSenderId: "1057874622518",
    appId: "1:1057874622518:web:543c566d8a82e130b90097",
    measurementId: "G-1QN3GG2T1L"
  })
//   const db=firebaseApp.fireStore()
  const auth = firebase.auth()

  export {auth}