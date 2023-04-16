import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyClSrXwFhAV3WuBW04SE4BBwu72c7xeBug",
  authDomain: "listed-assignment-db330.firebaseapp.com",
  projectId: "listed-assignment-db330",
  storageBucket: "listed-assignment-db330.appspot.com",
  messagingSenderId: "197274093002",
  appId: "1:197274093002:web:31ff20213b09b1d877fb33",
  measurementId: "G-SPR19PX3JD"
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);