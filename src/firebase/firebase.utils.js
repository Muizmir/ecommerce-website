import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth' 

const config = {
    apiKey: "AIzaSyCAYxy5csgM48awNokVW8_e-mHY2JZdmWM",
    authDomain: "crwn-db-230aa.firebaseapp.com",
    databaseURL: "https://crwn-db-230aa.firebaseio.com",
    projectId: "crwn-db-230aa",
    storageBucket: "crwn-db-230aa.appspot.com",
    messagingSenderId: "985607643772",
    appId: "1:985607643772:web:d8797bb8150c67cc9edff9",
    measurementId: "G-Q11CXK9V5M"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
        const{ displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log("error creating user", error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;