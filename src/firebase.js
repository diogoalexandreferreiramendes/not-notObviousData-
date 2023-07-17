// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
