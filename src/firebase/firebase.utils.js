import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAsnGA430d4T0QRHYm9ibfqSxiw6qZv8Hc',
  authDomain: 'clothing-store-4ac3f.firebaseapp.com',
  projectId: 'clothing-store-4ac3f',
  storageBucket: 'clothing-store-4ac3f.appspot.com',
  messagingSenderId: '634405273002',
  appId: '1:634405273002:web:feed9cdf5abb0880fbbfd3',
  measurementId: 'G-TYH744VJ2P',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
