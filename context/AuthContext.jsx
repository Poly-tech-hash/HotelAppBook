import React ,{useState,useContext,useEffect} from "react";
import { auth,db } from "../components/firebase";


const AuthContext = React.createContext()
export function useAuth () {
    return useContext(AuthContext)
}

export function AuthProvider({children}){
const [currentUser,setCurrentUser]=useState()
const [loading,setLoading]=useState(true)
function SignUp(email,password){
    return auth.createUserWithEmailAndPassword(email,password)
}

const login =(email,password)=>{
    return auth.createUserWithEmailAndPassword(email,password)
}
const logOut=()=>{
    return auth.signOut()
} 
const restPassword=(email)=>{
    return auth.sendPasswordRestEmail(email)
}
const updateEmail=(email)=>{
    return currentUser.updateEmail(email)
}
const addRoom=(data)=>{
    return db.ref('room').push(data).then((res)=>{
        console.log(res);
}).catch((err)=>{
    console.log(err);
})
useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(user=>{
        setLoading(false)
        setCurrentUser(user)
    })
    return unsubscribe
},[])

const value ={
    currentUser,
    Signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,addRoom
}

}
    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    )
}

export default AuthProvider