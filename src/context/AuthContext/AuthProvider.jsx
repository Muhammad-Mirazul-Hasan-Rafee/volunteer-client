import { useEffect, useState } from "react"
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const AuthProvider = ({children})=>{
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);


    // create user
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);

    };
    // Login user
    const loginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {createUser, loginUser, user, setUser, loading, setLoading}

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;