import { useEffect, useState } from "react"
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({children})=>{
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create user
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    };

    // Login user
    const loginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    };

    // Google login
    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth , googleProvider);
    };

    // Github login
    const githubLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth , githubProvider);
    }

    // Logout user
    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

   useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);
    console.log('state captured', currentUser?.email);

    if (currentUser?.email) {
      try {
        await axios.post(
          '/api/jwt',
          { email: currentUser.email },
          { withCredentials: true, timeout: 5000 }
        );
        console.log('JWT cookie set');
      } catch (err) {
        console.error('JWT API call failed:', err.message);
      }
    }

    // Only stop loading AFTER JWT attempt resolves
    setLoading(false);
  });

  return () => unsubscribe();
}, []);

    const authInfo = {
        createUser, 
        loginUser, 
        user, 
        setUser, 
        loading, 
        setLoading, 
        googleLogin, 
        githubLogin, 
        logOutUser
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;