// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLG5Zi19hwYWMM659LIMn6stXGglvKokA",
  authDomain: "nod-production.firebaseapp.com",
  projectId: "nod-production",
  storageBucket: "nod-production.appspot.com",
  messagingSenderId: "109875278953",
  appId: "1:109875278953:web:bafc75a38a755e6023def8"
};

//This one is for development
// const firebaseConfig = {
//     apiKey: "AIzaSyC2sIpoy83W-txwAieIJWQpCKQ4eY5npo8",
//     authDomain: "nod-development.firebaseapp.com",
//     projectId: "nod-development",
//     storageBucket: "nod-development.appspot.com",
//     messagingSenderId: "857912163401",
//     appId: "1:857912163401:web:4c5564f8d2977be70ad398"
//   };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
  return signOut(auth);
}

// Custom hook
export const useAuth = () => {
  const [ currentUser, setCurrentUser ] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    })
    return unsub
  }, [])

  return currentUser
}