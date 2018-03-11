import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBlqIU27E8ca7SWzUtn3tsgEtVOoWNefT4',
  authDomain: 'lvl-inventory-man.firebaseapp.com',
  databaseURL: 'https://lvl-inventory-man.firebaseio.com',
  projectId: 'lvl-inventory-man',
  storageBucket: 'lvl-inventory-man.appspot.com',
  messagingSenderId: '880047903726'
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log('USER', {...user});
  } else {
    // User is signed out.
    console.log('User is signed out');
  }
});

firebase.auth().signInAnonymously().catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

  console.log('ERR', errorMessage);
});


export const fb = firebase;
export const db = fb.database();

export const Goods = db.ref('goods');