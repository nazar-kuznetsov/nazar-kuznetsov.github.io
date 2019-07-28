import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBEnGLkRn0xKeNzb_l76-VFnKR3yak7iSY',
  authDomain: 'citrus-ck.firebaseapp.com',
  databaseURL: 'https://citrus-ck.firebaseio.com',
  projectId: 'citrus-ck',
  storageBucket: '',
  messagingSenderId: '292854102091',
  appId: '1:292854102091:web:8b2523dfd596922f'
};

firebase.initializeApp(config);

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
