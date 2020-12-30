import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "enter your public key here",
  authDomain: "clone1-4e27e.firebaseapp.com",
  databaseURL: "https://clone1-4e27e.firebaseio.com",
  projectId: "clone1-4e27e",
  storageBucket: "clone1-4e27e.appspot.com",
  messagingSenderId: "889550157625",
  appId: "1:889550157625:web:40467e03f2fc1944d15ae8",
  measurementId: "G-V3CCJ6WL0F"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export {db,auth};
