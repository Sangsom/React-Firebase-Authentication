import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
    apiKey: "AIzaSyDAlBdlDSnQwTNwibcCSXqG5pb8vcJ2_PQ",
    authDomain: "react-authentication-ae2e9.firebaseapp.com",
    databaseURL: "https://react-authentication-ae2e9.firebaseio.com",
    projectId: "react-authentication-ae2e9",
    storageBucket: "react-authentication-ae2e9.appspot.com",
    messagingSenderId: "1051638018269"
};

const devConfig = {
    apiKey: "AIzaSyD5XO_4TwWwMEnMikQx2zbVZBg2dWKjRJA",
    authDomain: "react-authentication-dev-3cf75.firebaseapp.com",
    databaseURL: "https://react-authentication-dev-3cf75.firebaseio.com",
    projectId: "react-authentication-dev-3cf75",
    storageBucket: "",
    messagingSenderId: "856265801986"
};

// Switch between firebase configs
const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
