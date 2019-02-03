import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAK8S9HPG44rs9pyHXRWwDlMK_8Ez-qMLc",
    authDomain: "moveiapp-react.firebaseapp.com",
    databaseURL: "https://moveiapp-react.firebaseio.com",
    projectId: "moveiapp-react",
    storageBucket: "moveiapp-react.appspot.com",
    messagingSenderId: "496275138339"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'rishav',
    age:26,
    isSingle: false,
    location : {
        city: 'newdelhi',
        country:'India'
    }
})