import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyDmoucK58rOQ34PswTLP1MuaqSJNU2DsGw",
  authDomain: "chat-react-9108a.firebaseapp.com",
  projectId: "chat-react-9108a",
  storageBucket: "chat-react-9108a.appspot.com",
  messagingSenderId: "276054221069",
  appId: "1:276054221069:web:1a25e20a16aca42ff15044",
  measurementId: "G-3DDS85XT93"
});

export const Context = createContext(null)

const auth = firebase.auth()//объект для авторизации
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
