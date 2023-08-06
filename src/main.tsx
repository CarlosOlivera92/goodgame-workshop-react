import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAio9AV5EX5L-dbXACWjcZJuEC5s_Nr3Nc",
  authDomain: "react-goodgame-app.firebaseapp.com",
  projectId: "react-goodgame-app",
  storageBucket: "react-goodgame-app.appspot.com",
  messagingSenderId: "496050774029",
  appId: "1:496050774029:web:1841987bf74e8cedd53544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
