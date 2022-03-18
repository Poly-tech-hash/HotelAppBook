import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"


const app = firebase.initializeApp({
    apiKey: "AIzaSyCzMEo_nDSouwiV9VGDc48DELqjg-dlBE0",
    authDomain: "hoteladmin-13069.firebaseapp.com",
    databaseURL: "https://hoteladmin-13069-default-rtdb.firebaseio.com",
    projectId: "hoteladmin-13069",
    storageBucket: "hoteladmin-13069.appspot.com",
    messagingSenderId: "489081994754",
    appId: "1:489081994754:web:a99f10b2f8d5be03a3711b",
    measurementId: "G-YP3CPMEX2B"
})
export const auth = app.auth()
export const db = app.database()
export default app