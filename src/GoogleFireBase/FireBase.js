// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCcT7_h-nwuaT7dfNLRzqBa-GYzqP7CmLg",

  authDomain: "photo-app-redux-a6e45.firebaseapp.com",

  projectId: "photo-app-redux-a6e45",

  storageBucket: "photo-app-redux-a6e45.appspot.com",

  messagingSenderId: "717641151906",

  appId: "1:717641151906:web:c054191cb7e38c86bbeefb",

  measurementId: "G-MQ41ZZF9L7",

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
console.log({auth})
console.log({analytics})
//liên kết firebase và lấy xác thực người dùng ở firebase