// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: 'AIzaSyAj-cPhNTJQ_Scoqh5PJIK6835IWzjmTXQ',
    authDomain: 'volume-traffic-light.firebaseapp.com',
    projectId: 'volume-traffic-light',
    storageBucket: 'volume-traffic-light.appspot.com',
    messagingSenderId: '813888130256',
    appId: '1:813888130256:web:c344b52c10cc4225d822d5',
    measurementId: 'G-D8T1CD3LQ4'
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
