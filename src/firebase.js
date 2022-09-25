import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithRedirect, FacebookAuthProvider} from "firebase/auth";

const auth = getAuth(initializeApp({
    apiKey: "AIzaSyBWTiFa9gaGbpXvYoT_rQA_1Mkxthl0SaI",
    authDomain: "messenger-ff14a.firebaseapp.com",
    projectId: "messenger-ff14a",
    storageBucket: "messenger-ff14a.appspot.com",
    messagingSenderId: "888715564312",
    appId: "1:888715564312:web:5352baa0895c8b0acffa6d"
}));
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
};
export const signInWithFacebook = () => {
    signInWithRedirect(auth, facebookProvider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
};

