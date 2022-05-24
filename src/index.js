/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXMu6r1AGJ4I1OcS1LWS_UM2xGEdeuQkY",
  authDomain: "my-project-travel-experience.firebaseapp.com",
  projectId: "my-project-travel-experience",
  storageBucket: "my-project-travel-experience.appspot.com",
  messagingSenderId: "231548490653",
  appId: "1:231548490653:web:4e5c1985738beb99395574",
  measurementId: "G-G21F07M9GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createRoot(
  document.getElementById('root')
).render(
    <App />
)


