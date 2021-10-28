import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setuser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');

  const auth = getAuth();
  const singnInUsingGoogle = () => {
    setIsLoading(true)
    const googleprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleprovider)
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setuser(user)
      }
      else {
        setuser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }

  const handleFrom = (event) => {
    console.log(email, password)
    event.preventDefault();
    if (password.length < 6) {
      setError("Minimum at least 6 character");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('at least two uppercase')
      return;
    }

    if (isLogin) {
      logIn(email, password)
    }
    else {
      newAccountRegister(email, password)
    }

  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const toogleLogin = (event) => {
    setIsLogin(event.target.checked)
  }

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
  }

  const newAccountRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setError('')
        verifyEmail();
        userProfile();
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then((result) => {
        console.log(result)
      })
  }

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
  }

  const handleUpdate = event => {
    setName(event.target.value)
  }

  const userProfile = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => {

      })


  }



  return {
    user,
    isLoading,
    singnInUsingGoogle,
    logOut,
    handleFrom,
    handlePassword,
    handleUpdate,
    handleEmail,
    toogleLogin,
    resetPassword,
    logIn,
    error,
    isLogin,
    
  }
}
export default useFirebase;